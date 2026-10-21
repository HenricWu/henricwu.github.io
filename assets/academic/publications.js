(() => {
  const browser = document.querySelector('.publication-browser');
  if (!browser) return;
  const reel = browser.querySelector('.paper-reel');
  const track = browser.querySelector('.paper-reel-track');
  const group = browser.querySelector('.paper-reel-group');
  const disclosure = browser.querySelector('.publication-disclosure');
  const summary = disclosure.querySelector('summary');
  const play = browser.querySelector('.paper-reel-play');
  const collapse = browser.querySelector('.publication-collapse');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let playing = !reduced.matches, visible = false, hovered = false;
  let frame = 0, lastTime = 0, position = 0, groupWidth = 0;
  let selected = null;

  // One extra copy makes the rightward loop seamless. Only the original links
  // participate in keyboard navigation and the accessibility tree.
  const copy = group.cloneNode(true);
  copy.setAttribute('aria-hidden', 'true');
  copy.querySelectorAll('a').forEach(link => link.tabIndex = -1);
  track.append(copy);
  play.hidden = false;
  collapse.hidden = false;
  const canAnimate = () => playing && visible && !hovered && !document.hidden && !disclosure.open && groupWidth > 0;
  const tick = time => {
    if (!canAnimate()) { frame = 0; return; }
    if (lastTime) {
      position -= Math.min(time - lastTime, 50) * .026;
      if (position <= 0) position += groupWidth;
      reel.scrollLeft = position;
    }
    lastTime = time;
    frame = requestAnimationFrame(tick);
  };
  const sync = () => {
    cancelAnimationFrame(frame); frame = 0; lastTime = 0;
    play.textContent = playing ? 'Pause motion' : 'Play motion';
    play.setAttribute('aria-pressed', String(!playing));
    play.setAttribute('aria-label', playing ? 'Pause paper carousel' : 'Play paper carousel');
    if (canAnimate()) { position = reel.scrollLeft; frame = requestAnimationFrame(tick); }
  };
  const pause = () => { playing = false; sync(); };
  const measure = () => {
    const oldWidth = groupWidth;
    groupWidth = copy.offsetLeft - group.offsetLeft;
    if (!oldWidth) position = reduced.matches ? 0 : groupWidth;
    else position = reel.scrollLeft / oldWidth * groupWidth;
    reel.scrollLeft = position;
    sync();
  };
  play.addEventListener('click', () => { playing = !playing; sync(); });
  reel.addEventListener('mouseenter', () => { hovered = true; sync(); });
  reel.addEventListener('mouseleave', () => { hovered = false; sync(); });
  reel.addEventListener('pointerdown', pause, {passive: true});
  reel.addEventListener('wheel', pause, {passive: true});
  reel.addEventListener('focusin', pause);
  reel.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault(); pause();
    reel.scrollBy({left: (event.key === 'ArrowRight' ? 1 : -1) * 290, behavior: reduced.matches ? 'instant' : 'smooth'});
  });
  reel.addEventListener('click', event => {
    const card = event.target.closest('a[data-paper-target]');
    if (!card || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const target = document.getElementById(card.dataset.paperTarget);
    if (!target) return;
    event.preventDefault(); pause();
    selected?.classList.remove('is-selected');
    selected = target;
    selected.classList.add('is-selected', 'is-revealed');
    disclosure.open = true;
    requestAnimationFrame(() => {
      target.querySelector('h3 a')?.focus({preventScroll: true});
      target.scrollIntoView({behavior: reduced.matches ? 'instant' : 'smooth', block: 'center'});
    });
  });
  disclosure.addEventListener('toggle', sync);
  collapse.addEventListener('click', () => {
    disclosure.open = false;
    summary.focus({preventScroll: true});
    summary.scrollIntoView({behavior: reduced.matches ? 'instant' : 'smooth', block: 'center'});
  });
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', () => { if (reduced.matches) pause(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }, {threshold: .1}).observe(reel);
  } else { visible = true; }
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(group);
  else window.addEventListener('resize', measure);
  measure();
  // Printed copies include the full research list even when the screen is compact.
  let wasOpen = false;
  addEventListener('beforeprint', () => { wasOpen = disclosure.open; disclosure.open = true; sync(); });
  addEventListener('afterprint', () => { disclosure.open = wasOpen; sync(); });
})();
