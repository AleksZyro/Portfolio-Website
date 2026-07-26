# Portfolio Website

Persönliche Portfolio-Seite von Aleksandar Nikolic. Die Seite zeigt Profil, Werdegang, Tech-Stack, Projekte, Zertifikate und Kontaktinformationen in einem statischen Frontend.

## Ziel

Die Seite soll ein glaubwürdiges Entwicklerprofil zeigen: echte Projekte, klare Projektstände, nachvollziehbarer Tech-Stack und direkte Kontaktmöglichkeiten.

## Inhalte

- Startbereich mit Kurzprofil, Skills und Kontaktlinks
- Über-mich-Bereich mit Kennzahlen
- Werdegang mit IMS, Bezirksschule und Hackathon
- Gruppierter Tech-Stack nach Einsatzbereich
- Portfolio-Bereich mit Projekten und Zertifikaten
- Detailansicht für Projekte und PDF-Zertifikate
- Mehrsprachigkeit über `lang/de.json`, `lang/en.json`, `lang/fr.json` und `lang/sr.json`

## Tech-Stack

- HTML
- CSS
- JavaScript
- JSON
- Lokale Assets für Bilder, Icons und Zertifikate

## Lokal starten

Die Seite ist statisch. Am einfachsten läuft sie über einen lokalen Server:

```powershell
cd "C:\Users\Startklar\OneDrive - Alte Kantonsschule Aarau\Desktop\Dokumente\Playground\Portfolio"
python -m http.server 8765
```

Danach im Browser öffnen:

```text
http://127.0.0.1:8765
```

## Projektpflege

- Projekte, Zertifikate und Tech-Gruppen werden in `app.js` gepflegt.
- Übersetzungen werden in `lang/*.json` gepflegt.
- Bilder, Previews und PDFs liegen in `assets/`.

## Status

Aktiv in Bearbeitung. Projektstände im Portfolio werden bewusst ehrlich gekennzeichnet, z. B. fertig, in Arbeit, lokal nutzbar oder nicht öffentlich verlinkt.
