"""Regression checks for the static portfolio UI.

These tests intentionally validate the contracts that are easy to break while
polishing the site: local assets, translated text keys, accessibility labels,
responsive spacing, modal scroll locking and OSS/certificate status copy.
"""

from __future__ import annotations

import json
import re
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LANG_CODES = ("de", "en", "fr", "sr", "sr-cyrl")
EXPECTED_MERGED_LABELS = {
    "de": "Gemergt",
    "en": "Merged",
    "fr": "Fusionné",
    "sr": "Merdžovano",
    "sr-cyrl": "Мерџовано",
}


def load_language(code: str) -> dict:
    return json.loads((ROOT / "lang" / f"{code}.json").read_text(encoding="utf-8"))


def flatten_keys(value: object, prefix: str = "") -> set[str]:
    if isinstance(value, dict):
        paths: set[str] = set()
        for key, child in value.items():
            child_path = f"{prefix}.{key}" if prefix else key
            paths.update(flatten_keys(child, child_path))
        return paths
    if isinstance(value, list):
        return {f"{prefix}[]"}
    return {prefix}


class MarkupContractParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.local_sources: list[str] = []
        self.image_alts: list[tuple[str, bool]] = []
        self.translation_keys: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        for name in ("src", "href", "poster"):
            value = attributes.get(name)
            if value:
                self.local_sources.append(value)
        if tag == "img":
            self.image_alts.append((attributes.get("alt", "") or "", "hidden" in attributes))
        for name in ("data-i18n", "data-i18n-aria"):
            value = attributes.get(name)
            if value:
                self.translation_keys.append(value)


def local_path(reference: str) -> Path | None:
    clean = reference.split("?", 1)[0].split("#", 1)[0]
    if not clean or clean.startswith(("#", "/", "data:", "http:", "https:", "mailto:", "javascript:")):
        return None
    return ROOT / clean.lstrip("./")


def css_rule(css: str, selector: str) -> str:
    matches = re.findall(rf"{re.escape(selector)}\s*\{{([^}}]*)\}}", css, flags=re.DOTALL)
    assert matches, f"CSS-Regel fehlt: {selector}"
    return matches[-1]


def css_rules(css: str, selector: str) -> list[str]:
    return re.findall(rf"{re.escape(selector)}\s*\{{([^}}]*)\}}", css, flags=re.DOTALL)


def test_all_local_markup_assets_exist_and_images_have_alt_text() -> None:
    parser = MarkupContractParser()
    parser.feed((ROOT / "index.html").read_text(encoding="utf-8"))
    parser.feed((ROOT / "rechtliches.html").read_text(encoding="utf-8"))

    missing = [reference for reference in parser.local_sources if (path := local_path(reference)) and not path.exists()]
    assert not missing, f"Fehlende lokale HTML-Ressourcen: {missing}"
    assert parser.image_alts, "Die Seite muss mindestens ein Bild enthalten."
    assert all(alt.strip() or hidden for alt, hidden in parser.image_alts), (
        "Jedes sichtbare Bild braucht einen nichtleeren Alt-Text."
    )


def test_css_asset_references_exist() -> None:
    css_files = list(ROOT.glob("*.css"))
    references: list[str] = []
    for css_file in css_files:
        css = css_file.read_text(encoding="utf-8")
        references.extend(re.findall(r"url\(\s*[\"']?([^\"')]+)", css))
    missing = [reference for reference in references if (path := local_path(reference)) and not path.exists()]
    assert not missing, f"Fehlende lokale CSS-Ressourcen: {missing}"


def test_javascript_asset_references_exist() -> None:
    """Catch broken project/certificate graphics created dynamically by app.js."""
    app = (ROOT / "app.js").read_text(encoding="utf-8")
    references = re.findall(r"[\"'`](assets/[^\"'`?#]+)", app)
    missing = sorted(
        {
            reference
            for reference in references
            if "${" not in reference and not (ROOT / reference).exists()
        }
    )
    assert not missing, f"Fehlende lokale JavaScript-Ressourcen: {missing}"


def test_every_language_contains_the_same_translation_keys() -> None:
    dictionaries = {code: load_language(code) for code in LANG_CODES}
    base_keys = flatten_keys(dictionaries["de"])
    for code, dictionary in dictionaries.items():
        missing = sorted(base_keys - flatten_keys(dictionary))
        assert not missing, f"{code} fehlen Übersetzungsschlüssel: {missing[:8]}"


def test_all_markup_translation_keys_exist_in_every_language() -> None:
    parser = MarkupContractParser()
    parser.feed((ROOT / "index.html").read_text(encoding="utf-8"))
    parser.feed((ROOT / "rechtliches.html").read_text(encoding="utf-8"))
    language_keys = {code: flatten_keys(load_language(code)) for code in LANG_CODES}
    missing = {
        code: sorted(key for key in parser.translation_keys if key not in language_keys[code])
        for code in LANG_CODES
    }
    assert not any(missing.values()), f"Fehlende Markup-Übersetzungen: {missing}"


def test_merged_status_is_consistent_across_languages_and_renderer() -> None:
    for code, expected in EXPECTED_MERGED_LABELS.items():
        assert load_language(code)["github"]["mergedLabel"] == expected

    app = (ROOT / "app.js").read_text(encoding="utf-8")
    oss_block = app.split("openSourceContributions:", 1)[1].split("\n};", 1)[0]
    assert "status: 'open'" not in oss_block
    badge_block = app.split("const contributionLabel", 1)[1].split("bottom.append", 1)[0]
    assert "completedLabel" not in badge_block
    assert "t('github.mergedLabel'" in badge_block


def test_certificate_date_labels_are_normalized() -> None:
    app = (ROOT / "app.js").read_text(encoding="utf-8")
    assert "normalizeCertificateMeta" in app
    assert "certificateMeta" in app
    assert "Datum" in app and "Date" in app and "Датум" in app


def test_layout_and_interaction_contracts_are_present() -> None:
    css = "\n".join(path.read_text(encoding="utf-8") for path in ROOT.glob("*.css"))
    footer_rules = css_rules(css, ".footer-contact")
    footer_link = css_rule(css, ".footer-contact-link")
    assert any("grid-template-columns: repeat(2" in rule for rule in footer_rules)
    assert any("clamp(16px, 4vw, 48px)" in rule for rule in footer_rules)
    assert "justify-content: center" in footer_link

    modal_lock = css_rule(css, "body.modal-open")
    assert "overflow: hidden" in modal_lock
    assert "position: fixed" in modal_lock
    assert "width: 100%" in modal_lock
    assert "overscroll-behavior: contain" in css
    assert "@media (hover: hover) and (pointer: fine)" in css
    assert "grid-template-columns: 1fr" in css

    app = (ROOT / "app.js").read_text(encoding="utf-8")
    assert "window.history.replaceState" in app
    assert "modalScrollY" in app
    assert "window.scrollTo(0, modalScrollY)" in app

    index = (ROOT / "index.html").read_text(encoding="utf-8")
    for section_id in ("career", "portfolio", "certificates", "github-activity", "tech-stack", "contact"):
        assert f'id="{section_id}"' in index, f"Zentraler Seitenbereich fehlt: #{section_id}"
    assert "info@aleksandar-nikolic.ch" in index
    assert "border-top: 0" in css, "Die Detailkarten dürfen keine doppelte Trennlinie erzeugen."


def test_legal_flags_are_real_vector_assets_not_platform_emojis() -> None:
    css = (ROOT / "legal-pages.css").read_text(encoding="utf-8")
    for flag in ("flag-de", "flag-fr", "flag-rs", "flag-gb"):
        assert re.search(rf"\.{flag}\s*\{{[^}}]*data:image/svg\+xml", css, flags=re.DOTALL)
    legal = (ROOT / "rechtliches.html").read_text(encoding="utf-8")
    assert "🇬🇧" not in legal
    assert "🇩🇪" not in legal
