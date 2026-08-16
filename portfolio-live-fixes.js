(() => {
  const injectTickerStyle = () => {
    const style = document.createElement('style');
    style.textContent = `
      .hero-ticker {
        overflow: hidden;
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
    `;
    document.head.appendChild(style);
  };

  const patchProjectCards = () => {
    const cards = [...document.querySelectorAll('.item-card')];

    for (const card of cards) {
      const heading = card.querySelector('h3')?.textContent?.trim() || '';
      const tags = card.querySelector('.tag-list, .project-tags, .item-tags, .tags') || card.querySelector('p + div');

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

  const addHeimatschutzExperience = () => {
    const timeline = document.querySelector('.career-timeline');
    if (!timeline || document.querySelector('[data-experience="heimatschutz"]')) return;

    const item = document.createElement('article');
    item.className = 'career-item';
    item.dataset.experience = 'heimatschutz';
    item.innerHTML = `
      <span class="career-dot" aria-hidden="true"></span>
      <div class="career-card">
        <div class="career-card-head">
          <div>
            <p class="career-type">Praxisprojekt</p>
            <h3>Heimatschutz-Projekt</h3>
          </div>
          <span class="career-badge">2026 · 2. Platz</span>
        </div>
        <p>
          Teamprojekt mit Besuch durch ein Aargauer Heimatschutz-Projekt. Unsere Lösung erreichte den 2. Platz;
          daraus entstanden wertvolle Erfahrungen in Präsentation, Kundenverständnis und Weiterentwicklung einer Lösung für reale Organisationen.
        </p>
      </div>
    `;

    const firstItem = timeline.querySelector('.career-item');
    if (firstItem?.nextSibling) {
      firstItem.after(item);
    } else {
      timeline.prepend(item);
    }
  };

  const runPatches = () => {
    injectTickerStyle();
    patchProjectCards();
    addHeimatschutzExperience();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runPatches, { once: true });
  } else {
    runPatches();
  }

  window.addEventListener('load', patchProjectCards, { once: true });
})();
