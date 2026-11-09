# Portfolio Website

[Deutsch](README.md) | **English**

🌐 **Live website:** https://aleksandar-nikolic.ch/

Personal portfolio website for Aleksandar Nikolic. The static site brings profile information, education, tech stack, projects, certificates and contact links into one clear place.

## What problem does it solve?

A GitHub profile shows repositories, but not always the context behind them: which projects are finished, which were school projects, which technologies were actually used and which projects matter most for recruiters. This portfolio website makes that information structured, multilingual and easy to share.

## What does it help with?

- Present projects with an honest status and short context
- Show IMS education, skills, certificates and hackathon experience
- Give recruiters a quick overview of technical range
- Separate public links, local tools and private work clearly
- Maintain multilingual content through JSON files

## Content

- Hero area with short profile, skills and contact links
- About section with profile metrics
- Education and experience timeline
- Tech stack grouped by usage area
- Portfolio area with projects and certificates
- Detail views for projects and PDF certificates
- Five languages through `lang/*.js`, including Serbian in Latin and Cyrillic

## Tech Stack

- HTML
- CSS
- JavaScript
- JSON
- Local assets for images, icons and certificates

## Local Installation

The site is static. Python or any other local HTTP server is enough.

Windows PowerShell:

```powershell
git clone https://github.com/AleksZyro/Portfolio-Website.git
cd Portfolio-Website
python -m http.server 8765
```

macOS or Linux:

```bash
git clone https://github.com/AleksZyro/Portfolio-Website.git
cd Portfolio-Website
python3 -m http.server 8765
```

Open this URL in the browser:

```text
http://127.0.0.1:8765
```

## Maintenance

- Projects, certificates and tech groups are maintained in `app.js`.
- Each file under `lang/*.js` is the single maintained source for that language, including project and legal copy. The browser loads it on demand as a classic script, including when opening the HTML file from disk.
- Links, media and technical catalog data live in `src/portfolio-data.js`. `app.js` renders the home page and `src/detail-dialog.js` manages previews, focus and scroll restoration.
- Images, previews and PDFs are stored in `assets/`.
- New public projects should be added with status, short description and link.

## Repository Metadata Suggestion

- Description: `Personal developer portfolio website for projects, skills, certificates and contact information.`
- Topics: `portfolio`, `developer-portfolio`, `ims`, `html`, `css`, `javascript`, `multilingual`, `github-pages`

## Status

Actively maintained. Project statuses are intentionally kept honest, for example finished, in progress, locally usable or not publicly linked.
