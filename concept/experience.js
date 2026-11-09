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
