// v3 screensaver: drives a single rAF loop that wraps each card around
// a closed Z corridor. Auto-scrolls when idle; user input (wheel/touch/drag)
// nudges the offset and pauses the auto-cruise until idle resumes.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const stage = document.querySelector<HTMLElement>('[data-stage]');
const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-card]'));
const hint = document.querySelector<HTMLElement>('[data-hint]');

if (stage && cards.length) {
  const SPACING = 720;
  const TOTAL = cards.length * SPACING;
  const HALF = TOTAL / 2;

  // Auto-scroll cruising speed in px/frame.
  const AUTO_SPEED = reduce ? 0 : 0.6;
  // Damping applied to user-injected velocity each frame.
  const DAMPING = 0.92;
  // Idle threshold before auto-cruise resumes.
  const IDLE_MS = 3500;
  // Smoothing for the easing back to AUTO_SPEED.
  const RESUME_BLEND = 0.04;

  let offset = 0;
  let velocity = AUTO_SPEED;
  let lastInteract = -Infinity;

  const cardData = cards.map((el) => ({
    el,
    baseZ: parseFloat(el.dataset.baseZ || '0'),
  }));

  const wrap = (n: number, mod: number) => ((n % mod) + mod) % mod;

  const tick = (now: number) => {
    const idle = now - lastInteract > IDLE_MS;

    if (idle) {
      // Ease velocity back to auto-cruise speed
      velocity += (AUTO_SPEED - velocity) * RESUME_BLEND;
    } else {
      velocity *= DAMPING;
    }

    offset += velocity;

    for (const { el, baseZ } of cardData) {
      // Normalize to [-HALF, +HALF) so we can wrap symmetrically
      const z = wrap(baseZ + offset + HALF, TOTAL) - HALF;
      el.style.setProperty('--z', `${z}px`);

      // Soft fade by distance from camera plane (z=0).
      // Close to 0 = strongest. Edges = transparent.
      const dist = Math.abs(z);
      const fade = Math.max(0, 1 - dist / HALF);
      // Lift the curve so cards stay readable across most of the corridor
      const eased = Math.pow(fade, 0.7);
      el.style.setProperty('--fade', eased.toFixed(3));
    }

    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  // ----- Interaction -----

  const bumpInteract = () => {
    lastInteract = performance.now();
    if (hint) hint.classList.add('is-hidden');
  };

  // Hide the hint after a couple of seconds even without interaction
  setTimeout(() => hint?.classList.add('is-hidden'), 4500);

  // Mouse wheel: positive deltaY (scrolling down) advances the corridor.
  window.addEventListener(
    'wheel',
    (e) => {
      velocity += e.deltaY * 0.04;
      // Clamp so a single hard scroll doesn't fling absurdly
      velocity = Math.max(-40, Math.min(40, velocity));
      bumpInteract();
    },
    { passive: true }
  );

  // Touch / pointer drag: vertical drag scrubs the corridor.
  let dragActive = false;
  let lastY = 0;

  const onDown = (clientY: number) => {
    dragActive = true;
    lastY = clientY;
    velocity = 0;
    bumpInteract();
  };
  const onMove = (clientY: number) => {
    if (!dragActive) return;
    const dy = lastY - clientY;
    velocity = dy * 0.9;
    offset += dy * 0.4; // immediate response on top of velocity
    lastY = clientY;
    bumpInteract();
  };
  const onUp = () => {
    dragActive = false;
  };

  // Pointer events cover mouse + pen + touch on modern browsers.
  window.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    onDown(e.clientY);
  });
  window.addEventListener('pointermove', (e) => onMove(e.clientY));
  window.addEventListener('pointerup', onUp);
  window.addEventListener('pointercancel', onUp);

  // Defensive: also respond to legacy touch events on iOS Safari.
  window.addEventListener(
    'touchstart',
    (e) => onDown(e.touches[0].clientY),
    { passive: true }
  );
  window.addEventListener(
    'touchmove',
    (e) => onMove(e.touches[0].clientY),
    { passive: true }
  );
  window.addEventListener('touchend', onUp);

  // Keyboard nudges (desktop convenience).
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      velocity += 18;
      bumpInteract();
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      velocity -= 18;
      bumpInteract();
    }
  });
}

export {};
