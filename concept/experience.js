// New current-work labels share the five existing portfolio languages.
const labels = {
  de: { maintenance: "Kontinuierlich in Arbeit", privateRepo: "Privates Repository" },
  en: { maintenance: "Continuously maintained", privateRepo: "Private repository" },
  fr: { maintenance: "Amélioration continue", privateRepo: "Dépôt privé" },
  sr: { maintenance: "Kontinuirano se razvija", privateRepo: "Privatni repozitorijum" },
  "sr-cyrl": {
    maintenance: "Континуирано се развија",
    privateRepo: "Приватни репозиторијум",
  },
};
function translateCurrentWork() {
  const language =
    { "sr-Latn": "sr", "sr-Cyrl": "sr-cyrl" }[document.documentElement.lang] ||
    document.documentElement.lang;
  const copy = labels[language] || labels.de;
  document.querySelectorAll("[data-experience]").forEach((element) => {
    const value = copy[element.dataset.experience];
    if (value) element.textContent = value;
  });
}
new MutationObserver(translateCurrentWork).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["lang"],
});
translateCurrentWork();

// One frame per pointer input at most; no idle render loop, timers or particles.
const hero = document.querySelector(".hero");
const motion = matchMedia("(prefers-reduced-motion: reduce)");
let frame = null,
  pointerX = 0,
  pointerY = 0;
hero.addEventListener("pointermove", (event) => {
  if (motion.matches || event.pointerType !== "mouse") return;
  const rect = hero.getBoundingClientRect();
  pointerX = (event.clientX / rect.width - 0.5) * 18;
  pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
  if (frame !== null) return;
  frame = requestAnimationFrame(() => {
    frame = null;
    hero.style.setProperty("--motion-x", `${pointerX}px`);
    hero.style.setProperty("--motion-y", `${pointerY}px`);
  });
});
function resetMotion() {
  if (frame !== null) cancelAnimationFrame(frame);
  frame = null;
  hero.style.removeProperty("--motion-x");
  hero.style.removeProperty("--motion-y");
}
hero.addEventListener("pointerleave", resetMotion);
motion.addEventListener("change", resetMotion);
