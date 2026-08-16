(() => {
  const injectLiveFixStyles = () => {
    if (document.getElementById('portfolio-live-fix-styles')) return;

    const style = document.createElement('style');
    style.id = 'portfolio-live-fix-styles';
    style.textContent = `
      .hero-ticker {
        overflow: visible;
      }

      .ticker-track {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding: 10px;
        animation: none !important;
        transform: none !important;
      }

      .ticker-set {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding-right: 0;
      }

      .ticker-set[aria-hidden="true"] {
        display: none;
      }

      .practice-projects {
        min-height: auto;
        padding-top: clamp(28px, 4vw, 52px);
      }

      .practice-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 14px;
      }

      .practice-card {
        border: 1px solid var(--line);
        background: var(--surface);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow);
        padding: 18px;
        display: grid;
        gap: 12px;
      }

      .practice-card-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
      }

      .practice-card h3 {
        font-size: 1.12rem;
      }

      .practice-card p,
      .practice-card li {
        color: var(--muted);
        line-height: 1.58;
      }

      .practice-badge {
        border: 1px solid rgba(185, 174, 220, 0.18);
        background: rgba(141, 108, 255, 0.14);
        border-radius: 999px;
        color: var(--text);
        font-size: 0.76rem;
        font-weight: 800;
        padding: 6px 9px;
        white-space: nowrap;
      }

      .practice-list {
        display: grid;
        gap: 7px;
        list-style: disc;
        padding-left: 18px;
      }
    `;
    document.head.appendChild(style);
  };

  const patchProjectCards = () => {
    const cards = [...document.querySelectorAll('.item-card')];

    for (const card of cards) {
      const heading = card.querySelector('h3')?.textContent?.trim() || '';

      if (heading === 'SortLab' && !card.textContent.includes('GitHub Pages')) {
        const tagHost = [...card.querySelectorAll('span')].find((span) => span.textContent.trim() === 'Algorithmen')?.parentElement;
        if (tagHost) {
          const tag = document.createElement('span');
          tag.textContent = 'GitHub Pages';
          tagHost.appendChild(tag);
        }
      }

      if (heading.includes('VSW')) {
        for (const span of card.querySelectorAll('span')) {
          if (span.textContent.trim() === 'gemeinsam') {
            span.textContent = 'Gemeinsam';
          }
        }
      }
    }
  };

  const addPracticeProjectsSection = () => {
    if (document.querySelector('[data-section="practice-projects"]')) return;

    const portfolioSection = document.querySelector('#portfolio');
    if (!portfolioSection) return;

    const section = document.createElement('section');
    section.className = 'practice-projects section';
    section.dataset.section = 'practice-projects';
    section.setAttribute('aria-labelledby', 'practice-projects-title');
    section.innerHTML = `
      <div class="container">
        <div class="section-head reveal">
          <p class="kicker">Praxis</p>
          <h2 id="practice-projects-title">Praxis- und Kundenprojekte</h2>
          <p class="section-subline">
            Reale Gespräche, Präsentationen und Projektarbeit ausserhalb normaler Übungsaufgaben.
          </p>
        </div>

        <div class="practice-grid reveal">
          <article class="practice-card">
            <div class="practice-card-head">
              <div>
                <p class="kicker">Teamprojekt</p>
                <h3>Heimatschutz-Projekt</h3>
              </div>
              <span class="practice-badge">2026 · 2. Platz</span>
            </div>
            <p>
              Unser Team wurde im Rahmen eines Aargauer Heimatschutz-Projekts besucht und konnte seine Lösung präsentieren.
              Wir erreichten den 2. Platz und sammelten praktische Erfahrung mit echten Stakeholdern, Feedback und Weiterentwicklung einer Lösung.
            </p>
            <ul class="practice-list">
              <li>Präsentation vor externen Projektbeteiligten</li>
              <li>Feedback aus einem realen Anwendungskontext</li>
              <li>Weiterdenken der Lösung für mögliche Organisationen in anderen Kantonen</li>
            </ul>
          </article>
        </div>
      </div>
    `;

    portfolioSection.insertAdjacentElement('afterend', section);
  };

  const runPatches = () => {
    injectLiveFixStyles();
    patchProjectCards();
    addPracticeProjectsSection();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runPatches, { once: true });
  } else {
    runPatches();
  }

  window.addEventListener('load', patchProjectCards, { once: true });
})();
