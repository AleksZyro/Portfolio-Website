(() => {
  const STYLE_ID = 'portfolio-final-fix-styles';

  const i18n = {
    de: {
      details: 'Details anzeigen', download: 'PDF herunterladen', cert: 'Zertifikat', legal: 'Rechtliches',
      proof: [['20+', 'Public Repos', 'eigene und Open-Source-Arbeiten'], ['6', 'OSS-Merges', 'gemergte Pull Requests'], ['SVG', 'GitHub Overview', 'profilierte GitHub-Startseite'], ['Live', 'Kundenprojekt', 'AargoClean GmbH Website']],
      abacusTitle: 'ABACUS Finanzbuchhaltung', genaiTitle: 'Was ist generative KI?', certDesc: 'Zertifikat im PDF-Format mit direkter Vorschau und Download.',
      abacusDetail: 'ABACUS Finanzbuchhaltung\n\nDieses Zertifikat bestätigt den erfolgreichen Abschluss des ABACUS-Anwenderkurses zur Finanzbuchhaltung.\n\nDie Prüfung umfasst Benutzeroberfläche, Stammdaten, Buchungen anhand von Belegen, Buchungsarten, Auswertungen sowie MWST-Abrechnung.',
      genaiDetail: 'Was ist generative KI?\n\nAbgeschlossener LinkedIn-Learning-Kurs zu generativer KI.\n\nDer Kurs behandelt generative KI-Tools, künstliche Intelligenz und die grundlegende Einordnung generativer KI.',
      imprint: ['Impressum', 'Private Portfolio-Seite von Aleksandar Nikolić.', 'Diese Website ist eine private Portfolio-Seite von Aleksandar Nikolić. Sie dient der Präsentation von Ausbildung, Projekten, Zertifikaten und Kontaktmöglichkeiten. Kontakt ist per E-Mail im Kontaktbereich möglich.'],
      privacy: ['Datenschutz', 'Keine Formulare, keine Analytics, keine Werbetracker.', 'Diese Website verwendet keine Formulare, keine Analytics, keine Werbetracker und keine externen Tracking-Skripte. Der Hoster verarbeitet beim Aufruf nur technisch notwendige Zugriffsdaten.'],
      cookies: ['Cookies', 'Keine Tracking-Cookies. Spracheinstellung bleibt lokal gespeichert.', 'Es werden keine Tracking-Cookies gesetzt. Die gewählte Sprache kann lokal im Browser gespeichert werden, damit die Einstellung beim nächsten Besuch erhalten bleibt.']
    },
    en: {
      details: 'Show details', download: 'Download PDF', cert: 'Certificate', legal: 'Legal note',
      proof: [['20+', 'Public repos', 'own and open-source work'], ['6', 'OSS merges', 'merged pull requests'], ['SVG', 'GitHub overview', 'custom profile README'], ['Live', 'Client project', 'AargoClean GmbH website']],
      abacusTitle: 'ABACUS Financial Accounting', genaiTitle: 'What is generative AI?', certDesc: 'Certificate as a PDF with direct preview and download.',
      abacusDetail: 'ABACUS Financial Accounting\n\nThis certificate confirms successful completion of the ABACUS user course for financial accounting.\n\nThe assessment covered the user interface, master data, postings based on receipts, booking types, reports and VAT settlement.',
      genaiDetail: 'What is generative AI?\n\nCompleted LinkedIn Learning course about generative AI.\n\nThe course covers generative AI tools, artificial intelligence and the basic classification of generative AI.',
      imprint: ['Imprint', 'Private portfolio website by Aleksandar Nikolić.', 'This website is a private portfolio website by Aleksandar Nikolić. It presents education, projects, certificates and contact options. Contact is available by email in the contact section.'],
      privacy: ['Privacy', 'No forms, analytics or advertising trackers.', 'This website uses no forms, no analytics, no advertising trackers and no external tracking scripts. The host only processes technically necessary access data when the site is opened.'],
      cookies: ['Cookies', 'No tracking cookies. Language is stored locally.', 'No tracking cookies are set. The selected language can be stored locally in the browser so the setting is kept for the next visit.']
    },
    fr: {}, sr: {}, 'sr-cyrl': {}
  };
  i18n.fr = { ...i18n.en, details: 'Afficher les détails', download: 'Télécharger le PDF', cert: 'Certificat', legal: 'Informations légales', abacusTitle: 'ABACUS comptabilité financière', genaiTitle: 'Qu’est-ce que l’IA générative?' };
  i18n.sr = { ...i18n.en, details: 'Prikaži detalje', download: 'Preuzmi PDF', cert: 'Sertifikat', legal: 'Pravno', abacusTitle: 'ABACUS finansijsko knjigovodstvo', genaiTitle: 'Šta je generativna VI?' };
  i18n['sr-cyrl'] = { ...i18n.sr, details: 'Прикажи детаље', download: 'Преузми PDF', cert: 'Сертификат', legal: 'Правно', abacusTitle: 'ABACUS финансијско књиговодство', genaiTitle: 'Шта је генеративна ВИ?' };

  const lang = () => document.documentElement.lang || 'de';
  const t = () => i18n[lang()] || i18n.de;
  const html = (text) => text.split('\n\n').map((part) => `<p>${part.replace(/\n/g, '<br>')}</p>`).join('');

  const certs = {
    abacus: { match: ['ABACUS Finanzbuchhaltung', 'ABACUS Financial Accounting'], title: () => t().abacusTitle, desc: () => t().certDesc, detail: () => t().abacusDetail, preview: 'assets/certificate-previews/abacus-finanzbuchhaltung.svg', pdf: 'assets/certificates/abacus-finanzbuchhaltung.pdf' },
    genai: { match: ['Was ist generative KI?', 'What is generative AI?', 'generative KI', 'generative AI'], title: () => t().genaiTitle, desc: () => t().certDesc, detail: () => t().genaiDetail, preview: 'assets/certificate-previews/linkedin-generative-ki.svg', pdf: 'assets/certificates/linkedin-generative-ki.pdf' }
  };

  const addStyles = () => {
    let s = document.getElementById(STYLE_ID);
    if (!s) { s = document.createElement('style'); s.id = STYLE_ID; document.head.appendChild(s); }
    s.textContent = `
      .hero-ticker{display:none!important}.hero-proof-strip{margin-top:22px;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;border:1px solid var(--line);border-radius:18px;padding:12px;background:rgba(13,10,24,.55)}.hero-proof-strip a,.hero-proof-strip span{display:flex;flex-direction:column;gap:2px;min-height:58px;padding:11px 13px;border:1px solid rgba(139,92,246,.25);border-radius:14px;background:rgba(139,92,246,.12);color:var(--text);text-decoration:none}.hero-proof-strip strong{font-size:1.05rem}.hero-proof-strip small{color:var(--muted);font-weight:700}@media(max-width:820px){.hero-proof-strip{grid-template-columns:repeat(2,minmax(0,1fr))}}
      .certificates-section{min-height:auto!important;padding-top:clamp(88px,9vw,140px)!important;padding-bottom:clamp(68px,8vw,112px)!important}.certificates-section .certificate-block{margin-top:0!important}.certificates-section .certificate-head{margin-bottom:24px!important}.certificates-section .certificate-head h3{font-size:clamp(2.2rem,5vw,4rem)!important;line-height:.98!important;letter-spacing:-.045em!important}.certificates-section .certificate-head:before{content:'Nachweise';display:block;color:var(--accent-2);font-size:.78rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase;margin-bottom:9px}html[lang=en] .certificates-section .certificate-head:before{content:'Credentials'}html[lang=fr] .certificates-section .certificate-head:before{content:'Certificats'}html[lang=sr] .certificates-section .certificate-head:before{content:'Sertifikati'}html[lang=sr-cyrl] .certificates-section .certificate-head:before{content:'Сертификати'}
      .item-card:focus:not(:focus-visible),.item-card.is-modal-return-focus,.item-card[data-modal-return-focus=true]{outline:none!important;border-color:var(--line)!important;box-shadow:var(--shadow)!important}.certificate-detail-trigger{margin-top:auto;align-self:flex-start}.modal-preview img{cursor:zoom-in}.legal-card{cursor:pointer;align-items:flex-start!important;gap:18px!important;grid-template-columns:auto 1fr!important}.legal-card:focus-visible{outline:2px solid var(--accent-2);outline-offset:4px}.legal-card p:nth-of-type(n+2){display:none!important}.legal-card p{max-width:42ch}@media(min-width:1400px){.section{min-height:auto!important}}
    `;
  };

  const modalParts = () => ({ modal: document.getElementById('detail-modal'), title: document.getElementById('modal-title'), kicker: document.querySelector('.modal-kicker'), preview: document.querySelector('.modal-preview'), desc: document.getElementById('modal-description'), meta: document.getElementById('modal-meta'), download: document.getElementById('modal-download') });

  const openCert = (c) => {
    const m = modalParts(); if (!m.modal) return;
    m.title.textContent = c.title(); m.kicker.textContent = t().cert; m.preview.hidden = false; m.preview.innerHTML = `<img src="${c.preview}" alt="${c.title()}" loading="lazy">`; m.desc.innerHTML = html(c.detail()); m.meta.innerHTML = '<li>Format: PDF</li><li>Download: verfügbar</li>'; m.download.hidden = false; m.download.href = c.pdf; m.download.setAttribute('download', ''); m.download.textContent = t().download; m.modal.showModal?.();
  };
  const openLegal = (entry) => { const m = modalParts(); if (!m.modal) return; m.title.textContent = entry[0]; m.kicker.textContent = t().legal; m.preview.hidden = true; m.preview.innerHTML = ''; m.desc.innerHTML = `<p>${entry[2]}</p>`; m.meta.innerHTML = ''; m.download.hidden = true; m.modal.showModal?.(); };

  const blurCards = () => { document.activeElement?.blur?.(); document.querySelectorAll('.item-card,[data-clickable-card=true]').forEach((c) => { c.blur?.(); c.classList.remove('active','is-active','is-modal-return-focus'); c.dataset.modalReturnFocus='false'; }); };

  const installHeroProof = () => { const hero = document.querySelector('.hero-copy'); if (!hero) return; let strip = hero.querySelector('.hero-proof-strip'); if (!strip) { strip = document.createElement('div'); strip.className = 'hero-proof-strip'; hero.querySelector('.hero-ticker')?.insertAdjacentElement('beforebegin', strip); } strip.innerHTML = t().proof.map(([a,b,c],i)=>{ const href=i===0?'https://github.com/AleksZyro?tab=repositories':i===2?'https://github.com/AleksZyro':i===3?'https://github.com/AleksZyro/aargoclean':''; const inner=`<strong>${a}</strong><small>${b}</small><small>${c}</small>`; return href?`<a href="${href}" target="_blank" rel="noopener noreferrer">${inner}</a>`:`<span>${inner}</span>`; }).join(''); };

  const moveCertificates = () => { const block=document.querySelector('.certificate-block'), portfolio=document.getElementById('portfolio'); if(!block||!portfolio)return; let sec=document.querySelector('.certificates-section'); if(!sec){sec=document.createElement('section'); sec.className='certificates-section section'; sec.id='certificates'; sec.innerHTML='<div class="container" id="certificates-container"></div>'; portfolio.insertAdjacentElement('afterend',sec);} if(!block.closest('.certificates-section')) sec.querySelector('.container').appendChild(block); };

  const certKey = (text) => Object.entries(certs).find(([,c]) => c.match.some((m) => text.includes(m)))?.[0];
  const fixCertificates = () => { const grid=document.getElementById('certificates-grid'); if(!grid)return; const seen=new Set(); [...grid.children].forEach((card)=>{ if(!(card instanceof HTMLElement))return; const key=certKey(card.textContent||''); if(!key)return; if(seen.has(key)){card.remove();return;} seen.add(key); const c=certs[key]; card.classList.add('item-card'); card.tabIndex=0; card.setAttribute('role','button'); card.innerHTML=`<div class="project-preview certificate-preview"><img src="${c.preview}" alt="${c.title()}" loading="lazy"></div><h3>${c.title()}</h3><p>${c.desc()}</p><button type="button" class="btn btn-secondary certificate-detail-trigger">${t().details}</button>`; const open=(e)=>{e.preventDefault();e.stopPropagation();openCert(c);}; card.onclick=open; card.onkeydown=(e)=>{if(e.key==='Enter'||e.key===' ')open(e);}; }); };

  const fixLegal = () => { const entries=[t().imprint,t().privacy,t().cookies]; document.querySelectorAll('.legal-card').forEach((card,i)=>{ const e=entries[i]; if(!e)return; const icon=card.querySelector('.legal-icon')?.outerHTML||''; card.tabIndex=0; card.setAttribute('role','button'); card.innerHTML=`${icon}<div><h3>${e[0]}</h3><p>${e[1]}</p></div>`; const open=(ev)=>{ev.preventDefault();ev.stopPropagation();openLegal(e);}; card.onclick=open; card.onkeydown=(ev)=>{if(ev.key==='Enter'||ev.key===' ')open(ev);}; }); };

  const installModal = () => { const m=document.getElementById('detail-modal'); if(!m||m.dataset.finalInstalled)return; m.dataset.finalInstalled='true'; m.addEventListener('close',()=>setTimeout(blurCards,0)); document.addEventListener('keydown',(e)=>{if(e.key==='Escape')setTimeout(blurCards,0);}); m.addEventListener('click',(e)=>{ const img=e.target.closest?.('.modal-preview img'); if(img?.src){e.preventDefault();e.stopPropagation();window.open(img.src,'_blank','noopener,noreferrer');} }); };

  const run = () => { addStyles(); installModal(); installHeroProof(); moveCertificates(); fixCertificates(); fixLegal(); blurCards(); };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
  window.addEventListener('load',run,{once:true}); setTimeout(run,150); setTimeout(run,700); setTimeout(run,1500);
})();
