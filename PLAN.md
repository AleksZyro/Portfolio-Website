# Portfolio-Neugestaltung

## Veröffentlichung vom 09.11.2026

Die geprüfte Gestaltung wird zur Startseite. Der Release-Branch startet von
aktuellem `origin/main`, damit der aktuelle Beitragszähler und die SVG erhalten
bleiben. Die alten Entwürfe bleiben auf dem Konzeptbranch.

Die Release-Prüfung deckt Tastaturfokus, alle fünf Sprachen, die bisherigen
Adressen für Impressum, Datenschutz und Cookies sowie den Rückweg zum Kontakt
ab. Agent Dock ist als privates Repository gekennzeichnet. Nach den Prüfungen
folgt die Veröffentlichung über `main` und die Kontrolle auf der öffentlichen
Domain.

## Abnahme-Korrekturen vom 07.11.2026

Lesetexte und Praktikumshinweis vergrössern; MMTA (kontinuierliche Pflege),
UMR und Agent Dock verlinken, AargoClean unverlinkt lassen. Agent Dock ersetzt
CodexTwin; das Repository bleibt privat. PathLab-Zusatzdemo entfernen und fünf
bestehende Projekte als gleichwertige Textzeilen darstellen. Weitere Projekte
noch nicht ändern. Zertifikatslinien nur zwischen Reihen; Contribution-SVG
unverändert, äusseren blauen Rahmen entfernen. OSS-Liste ohne letzte Linie
mit ausgeglichener Zeilenhöhe. Kontaktüberschrift einfarbig mit klar lesbarem &.
Rechtliche Seiten anpassen. Technologie-Ideen dokumentieren, noch nicht bauen.

## Freigegebene Umsetzung: atmosphärisch, leicht und vollständig

Aleksandar gibt grünes Licht zur Umsetzung nach dem Referenzvergleich: markanter
Einstieg ohne Porträt oder UMR-Werbebild, sparsamer Einsatz von Bewegung und
ein echtes interaktives Projektbeispiel. Alle vorhandenen Inhalte und fünf
Sprachen bleiben direkt erhalten; AargoClean nur als aktuelles Kundenprojekt.
Arbeitsfassung: `design-preview.html` mit separaten Styles/Skripten. Das grüne
Licht betrifft die Umsetzung, nicht Merge oder öffentliche Veröffentlichung.
Tests: tatsächliche Bedienung der Wegfindung, alle Sprachen, Touch/Keyboard,
Navigation und bisherige Inhalte; geprüfte visuelle Referenzen.

## Neueste Rückmeldung

Porträt wieder aus der Vorschau entfernen, Originaldatei behalten. Zunächst
echte IMS-Portfolios als Referenzen vergleichen; keine weitere Designrichtung
ohne diese gemeinsame Auswahl vorwegnehmen. Ausschlüsse: Ahmet Ilhan,
Tim Akceret, Andrin Maag, Botond Csereklye, Kasum Bajrami, Bensik Ajdini,
Fynn Auerbach und Lionel Wermelinger.

## Aktuell: Entwurf 03, vollständige Inhalte statt reduziertem Showcase

Aleksandar möchte alle bestehenden Bereiche und die Sprachauswahl direkt in
der Vorschau sehen. Der Einstieg soll persönlicher werden: vorhandenes Porträt
`assets/profile-temp.jpeg` unverändert verwenden, kein UMR-Werbebild im Einstieg,
keine gelbe Akzentfarbe. Dafür wird die vollständige bestehende Startseite mit
ihrem funktionierenden `app.js` und allen fünf Sprachdateien als Basis für
`design-preview.html` verwendet. Nur eine zusätzliche lokale Gestaltungsschicht;
die Produktionsdateien bleiben erhalten. AargoClean bleibt eine aktuelle
Kundenprojekt-Erwähnung. Frühere Konzeptvarianten sind verworfene Entwürfe.

## Korrektur nach Aleksandars Feedback

- AargoClean ausschliesslich als laufendes Kundenprojekt erwähnen. Keine Bilder,
  Vorschauen, Detailansichten oder Projektvorstellung dazu.
- Die Formulierung «neue Welten» entfällt.
- Beige, Rostrot und kursive Serifenschrift des ersten Entwurfs verwerfen.
- Persönlicher Einstieg und Projektbetrachter bilden eine zusammengehörige
  Komposition. Bilder, Projekttitel, Erklärung und Aktionen stehen direkt zusammen;
  keine vorgelagerte Bildcollage und spätere Wiederholung der UMR-Vorstellung.
- Zweiter Entwurf: Graphit, klare serifenlose Schrift und ein limettengrüner Akzent.
- Bestehender Konzeptbranch; weiterhin kein Merge oder Deployment ohne Freigabe.

## Auftrag und Freigabegrenze

Zuerst Bestandsaufnahme und eine visuell beurteilbare Designrichtung erstellen.
Vor dem vollständigen Umbau Aleksandars Feedback einholen. Kein Merge und keine
Veröffentlichung ohne ausdrückliche Freigabe für diese Neugestaltung.

## Aktueller Schritt: Konzept und begrenzter Prototyp

- [x] Aktuelles `origin/main`, Hosting-Header, Projektstruktur und Tests prüfen.
- [x] AargoClean und UMR anhand vorhandener Repositories und echter Assets prüfen.
- [x] Drei Gestaltungsrichtungen dokumentieren und eine empfehlen.
- [x] Eigenständige deutsche Konzeptvorschau unter `concept/` bauen.
- [x] Desktop-/Mobilansichten und sinnvolle Projektinteraktionen umsetzen.
- [x] Echte Browserprüfungen und gezielte Fehlerproben durchführen.
- [x] Vorschau visuell prüfen und zur Richtungsentscheidung übergeben.

Ergebnisse: `docs/portfolio-design-direction.md` und
`docs/portfolio-concept-validation.md`. Lokale Vorschau: `npm run preview`,
danach `http://127.0.0.1:8767/concept/`.

Die bestehende Startseite, ihre fünf Sprachen und rechtlichen Seiten bleiben
während dieser Konzeptphase die Produktionsfassung. Der Prototyp ist bewusst
ein begrenzter deutscher Entwurf, kein fertig übersetztes Release.

## Nach Richtungsfreigabe

1. Inhalte, Projektseiten und einfach pflegbare Werkstattdaten strukturieren.
2. Gewählte Gestaltung vollständig in allen fünf Sprachen umsetzen.
3. Werdegang, Zertifikate, Technologien und korrekte OSS-Nachweise integrieren.
4. Browser-Tests für Navigation, Dialoge, Fokus, Scrollposition, Sprachen und
   rechtliche Seiten erweitern; geprüfte Screenshot-Referenzen ergänzen.
5. CI, Performance, Barrierefreiheit und Deployment-Vorschau prüfen.
6. Reviewfähigen Stand übergeben; Merge und Veröffentlichung nur nach Freigabe.

## Technische Entscheidungen

- Neues Arbeitsbranch ab `origin/main`: `portfolio-workshop-concept`.
- HTML, CSS und JavaScript ohne Framework-Wechsel oder Produktions-Build.
- Keine simulierte Live-Aktivität und keine erfundenen Projektresultate.
- Echte Browserprüfungen ergänzen die vorhandenen neun Quelltexttests.
- Vor Commits: `pytest -q` und `ruff check src tests`; fehlende Projektpfade
  transparent dokumentieren. Keine Dateien unter `data/` committen.
