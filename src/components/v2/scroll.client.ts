// Continuous parallax controller. One rAF loop. Writes a per-section --p
// (range roughly -1..1, where 0 means the section is centered in the viewport).
// CSS layers consume --p via translate3d(0, calc(var(--p) * <depth>), 0).

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const slides = Array.from(document.querySelectorAll<HTMLElement>('[data-slide]'));

if (slides.length && !reduce) {
  let needsUpdate = true;
  let viewportH = window.innerHeight;

  const onScroll = () => { needsUpdate = true; };
  const onResize = () => { viewportH = window.innerHeight; needsUpdate = true; };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });

  const tick = () => {
    if (needsUpdate) {
      const center = viewportH / 2;
      for (const el of slides) {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        // Normalize so 0 = centered, -1 = far below viewport center, 1 = far above
        const p = (center - elCenter) / (viewportH / 2 + rect.height / 2);
        el.style.setProperty('--p', p.toFixed(3));
      }
      needsUpdate = false;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// Reveal-on-enter: add .is-visible once when each slide first crosses 25% of viewport.
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.25 }
);

for (const slide of slides) io.observe(slide);

// Hero and outro also use the .is-visible reveal (they have [data-reveal] children)
for (const el of document.querySelectorAll<HTMLElement>('[data-reveal-root]')) {
  io.observe(el);
}

export {};
