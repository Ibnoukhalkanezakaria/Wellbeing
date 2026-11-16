import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

let scrolling;
let motionPreference;

function updateMotionPreference() {
  scrolling?.destroy();
  scrolling = undefined;
  if (!motionPreference.matches) {
    scrolling = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.1,
      anchors: { offset: -96 },
      allowNestedScroll: true,
    });
  }
}

export function startSmoothScroll() {
  if (motionPreference) return;
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  motionPreference.addEventListener('change', updateMotionPreference);
  updateMotionPreference();
}

export function stopSmoothScroll() {
  scrolling?.destroy();
  motionPreference?.removeEventListener('change', updateMotionPreference);
  scrolling = undefined;
  motionPreference = undefined;
}

export function scrollPage(to, savedPosition) {
  let anchor;
  if (to.hash) {
    try { anchor = document.getElementById(decodeURIComponent(to.hash.slice(1))); } catch { /* Ignore invalid fragment encoding. */ }
  }
  const top = savedPosition?.top ?? (anchor ? anchor.getBoundingClientRect().top + window.scrollY - 96 : 0);
  if (scrolling) {
    scrolling.resize();
    scrolling.scrollTo(Math.max(0, top), { force: true });
  } else {
    window.scrollTo({ top: Math.max(0, top), left: savedPosition?.left ?? 0, behavior: motionPreference?.matches ? 'instant' : 'smooth' });
  }
  return false;
}
