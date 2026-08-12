# Portfolio Website

**Deutsch** | [English](README_EN.md)

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

## Status

Aktiv in Bearbeitung. Projektstände im Portfolio werden bewusst ehrlich gekennzeichnet, z. B. fertig, in Arbeit, lokal nutzbar oder nicht öffentlich verlinkt.
