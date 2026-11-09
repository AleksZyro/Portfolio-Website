// Classic scripts also work when the portfolio is opened directly from disk.
const portfolioLanguages = (() => {
  const htmlCodes = { de: 'de', en: 'en', fr: 'fr', sr: 'sr-Latn', 'sr-cyrl': 'sr-Cyrl' };
  const dictionaries = new Map();
  const pending = new Map();
  const storageKey = 'portfolio-language';
  const supports = (code) => Object.hasOwn(htmlCodes, code);

  function initial() {
    const requested = new URLSearchParams(location.search).get('lang');
    if (supports(requested)) return requested;
    try {
      const saved = localStorage.getItem(storageKey);
      if (supports(saved)) return saved;
    } catch {
      // The language still works when browser storage is unavailable.
    }
    return 'de';
  }

  function read(code) {
    if (dictionaries.has(code)) return Promise.resolve(dictionaries.get(code));
    if (!pending.has(code)) {
      const script = document.createElement('script');
      script.src = `lang/${code}.js?v=20261109-refactor`;
      const request = new Promise((resolve) => {
        const finish = () => {
          pending.delete(code);
          script.remove();
          resolve(dictionaries.get(code));
        };
        script.onload = finish;
        script.onerror = finish;
        document.head.append(script);
      });
      pending.set(code, request);
    }
    return pending.get(code);
  }

  async function load(code) {
    const preferred = supports(code) ? code : 'de';
    const dictionary = await read(preferred);
    if (dictionary) return { code: preferred, dictionary };
    return { code: 'de', dictionary: await read('de') || {} };
  }

  function apply(code) {
    document.documentElement.lang = htmlCodes[code];
    try {
      localStorage.setItem(storageKey, code);
    } catch {
      // Persistence is optional.
    }
  }

  function bindMenu(button, menu, selectLanguage) {
    const options = [...menu.querySelectorAll('[data-lang]')];
    function setOpen(open) {
      menu.hidden = !open;
      button.setAttribute('aria-expanded', String(open));
    }

    button.addEventListener('click', () => setOpen(menu.hidden));
    options.forEach((option) => {
      option.addEventListener('click', () => {
        setOpen(false);
        button.focus();
        selectLanguage(option.dataset.lang);
      });
    });
    document.addEventListener('click', (event) => {
      if (!menu.hidden && !menu.contains(event.target) && !button.contains(event.target)) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || menu.hidden) return;
      setOpen(false);
      button.focus();
    });

    return (code) => {
      options.forEach((option) => {
        const active = option.dataset.lang === code;
        option.classList.toggle('is-active', active);
        option.setAttribute('aria-selected', String(active));
      });
      return options.find((option) => option.dataset.lang === code);
    };
  }

  return {
    initial, load, apply, bindMenu,
    register: (code, dictionary) => dictionaries.set(code, dictionary)
  };
})();
