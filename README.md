# Portfolio Website

**Deutsch** | [English](README_EN.md)

🌐 **Live-Website:** https://aleksandar-nikolic.ch/

Persönliche Portfolio-Seite von Aleksandar Nikolic. Die statische Website bündelt Profil, Werdegang, Tech-Stack, Projekte, Zertifikate und Kontaktinformationen an einem Ort.

## Welches Problem löst das Projekt?

Ein GitHub-Profil zeigt zwar Repositories, aber selten den Kontext dahinter: Was ist fertig, was war ein Schulprojekt, welche Technologien wurden wirklich eingesetzt und welche Projekte sind für Recruiter relevant? Diese Portfolio-Website macht diese Informationen übersichtlich, mehrsprachig und direkt verlinkbar.

## Wobei hilft die Website?

- Projekte mit ehrlichem Status und kurzer Einordnung präsentieren
- IMS-Werdegang, Skills, Zertifikate und Hackathon-Erfahrung sichtbar machen
- Recruitern eine schnelle Übersicht über technische Breite geben
- öffentliche Projektlinks, lokale Tools und private Arbeiten sauber unterscheiden
- Inhalte mehrsprachig über JSON-Dateien pflegen

## Inhalte

- Startbereich mit Kurzprofil, Skills und Kontaktlinks
- Über-mich-Bereich mit Kennzahlen
- Werdegang mit IMS, Bezirksschule und Hackathon
- gruppierter Tech-Stack nach Einsatzbereich
- Portfolio-Bereich mit Projekten und Zertifikaten
- Detailansicht für Projekte und PDF-Zertifikate
- Mehrsprachigkeit über `lang/de.json`, `lang/en.json`, `lang/fr.json` und `lang/sr.json`

## Tech-Stack

- HTML
- CSS
- JavaScript
- JSON
- lokale Assets für Bilder, Icons und Zertifikate

## Lokal starten

Die Seite ist statisch. Du brauchst nur Python oder einen anderen lokalen HTTP-Server.

Windows PowerShell:

```powershell
git clone https://github.com/AleksZyro/Portfolio-Website.git
cd Portfolio-Website
python -m http.server 8765
```

macOS oder Linux:

```bash
git clone https://github.com/AleksZyro/Portfolio-Website.git
cd Portfolio-Website
python3 -m http.server 8765
```

Danach im Browser öffnen:

```text
http://127.0.0.1:8765
```

## Projektpflege

- Projekte, Zertifikate und Tech-Gruppen werden in `app.js` gepflegt.
- Übersetzungen werden in `lang/*.json` gepflegt.
- Bilder, Previews und PDFs liegen in `assets/`.
- Neue öffentliche Projekte sollten im Portfolio mit Status, kurzer Beschreibung und Link ergänzt werden.

## Repository-Metadaten Vorschlag

- Description: `Personal developer portfolio website for projects, skills, certificates and contact information.`
- Topics: `portfolio`, `developer-portfolio`, `ims`, `html`, `css`, `javascript`, `multilingual`, `github-pages`

## SEO und öffentliche Identität

- Hauptdomain und Canonical-URL: `https://aleksandar-nikolic.ch/`
- Öffentlicher Entwicklungsname: `AleksZyro`
- Offizielles Profil: `https://github.com/AleksZyro`
- `robots.txt` erlaubt das Crawling der Website und verweist auf `sitemap.xml`.
- Die Sitemap enthält absichtlich nur die kanonische Startseite. Die Zertifikatsdateien bleiben aus Suchresultaten ausgeschlossen.
- Die Startseite enthält `ProfilePage`-/`Person`-Daten mit dem echten Namen, dem Alias `AleksZyro` und dem verifizierten GitHub-Profil.

### Deployment- und Indexierungs-Checkliste

1. Dieses Repository muss die tatsächlich verbundene Cloudflare-Pages-Deployment-Quelle bleiben.
2. `www.aleksandar-nikolic.ch` muss in Cloudflare als Custom Domain korrekt auf dieses Projekt zeigen und danach mit einer Cloudflare Redirect Rule dauerhaft auf `https://aleksandar-nikolic.ch/` weiterleiten. Eine Pages-`_redirects`-Datei kann keine hostweite Weiterleitung konfigurieren.
3. In Google Search Console die Domain-Property verifizieren, `https://aleksandar-nikolic.ch/sitemap.xml` einreichen und die Startseite über die URL-Prüfung zur Indexierung anfordern.
4. Im GitHub-Profil-README und in wichtigen öffentlichen Repository-README-Dateien einen sichtbaren Link auf `https://aleksandar-nikolic.ch/` setzen.

Google entscheidet trotz dieser Signale selbst über Indexierung, Snippet und Ranking. Nach einem Deploy braucht die erneute Verarbeitung normalerweise mehrere Tage bis Wochen.

## Status

Aktiv in Bearbeitung. Projektstände im Portfolio werden bewusst ehrlich gekennzeichnet, zB. fertig, in Arbeit, lokal nutzbar oder nicht öffentlich verlinkt.
