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

## SEO und öffentliche Identität

- Hauptdomain und Canonical-URL: `https://aleksandar-nikolic.ch/`
- Öffentlicher Entwicklungsname: `AleksZyro`
- Offizielles Profil: `https://github.com/AleksZyro`
- `robots.txt` erlaubt das Crawling der Website und verweist auf `sitemap.xml`.
- Die Sitemap enthält absichtlich nur die kanonische Startseite. Die Zertifikatsdateien bleiben aus Suchresultaten ausgeschlossen.
- Die Startseite enthält `ProfilePage`-/`Person`-Daten mit dem echten Namen, dem Alias `AleksZyro` und dem verifizierten GitHub-Profil.
