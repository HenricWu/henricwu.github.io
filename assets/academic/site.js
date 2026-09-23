(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (!toggle || !nav) return;
  document.documentElement.classList.add('js');
  const close = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { close(); toggle.focus(); }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.header-inner')) close(); });
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) close(); });
})();

(() => {
  const diagrams = [...document.querySelectorAll('.research-diagram')];
  if (!diagrams.length || !('IntersectionObserver' in window)) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const visible = new Set();
  const sync = () => diagrams.forEach(diagram => diagram.classList.toggle('is-animating', visible.has(diagram) && !reduced.matches && !document.hidden));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
    sync();
  }, {threshold: .25});
  diagrams.forEach(diagram => observer.observe(diagram));
  reduced.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
})();

(() => {
  const gallery = document.querySelector('.photo-gallery');
  if (!gallery) return;
  const track = gallery.querySelector('.photo-track');
  const dots = [...gallery.querySelectorAll('.photo-dots button')];
  const play = gallery.querySelector('.photo-play');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0, timer, scrollTimer, visible = false, hovered = false;
  let playing = !reduced.matches;
  const syncPlayback = () => {
    clearInterval(timer);
    play.textContent = playing ? 'Pause' : 'Play';
    play.setAttribute('aria-label', playing ? 'Pause photo slideshow' : 'Play photo slideshow');
    if (playing && visible && !hovered && !document.hidden) {
      timer = setInterval(() => go(index + 1), 5500);
    }
  };
  const go = next => {
    index = (next + dots.length) % dots.length;
    track.scrollTo({left: index * track.clientWidth, behavior: reduced.matches ? 'instant' : 'smooth'});
  };
  const pause = () => { playing = false; syncPlayback(); };
  const manual = next => { pause(); go(next); };
  gallery.querySelector('.photo-prev').addEventListener('click', () => manual(index - 1));
  gallery.querySelector('.photo-next').addEventListener('click', () => manual(index + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => manual(i)));
  play.addEventListener('click', () => { playing = !playing; syncPlayback(); });
  track.addEventListener('pointerdown', pause, {passive: true});
  track.addEventListener('wheel', pause, {passive: true});
  track.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault(); manual(index + (event.key === 'ArrowRight' ? 1 : -1));
  });
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      index = Math.round(track.scrollLeft / track.clientWidth);
      dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === index)));
    }, 100);
  }, {passive: true});
  gallery.addEventListener('mouseenter', () => { hovered = true; syncPlayback(); });
  gallery.addEventListener('mouseleave', () => { hovered = false; syncPlayback(); });
  gallery.addEventListener('focusin', pause);
  gallery.addEventListener('focusout', () => setTimeout(syncPlayback, 0));
  document.addEventListener('visibilitychange', syncPlayback);
  reduced.addEventListener('change', () => { if (reduced.matches) pause(); });
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; syncPlayback(); }, {threshold: .25}).observe(gallery);
  new ResizeObserver(() => track.scrollTo({left: index * track.clientWidth, behavior: 'instant'})).observe(track);
  gallery.classList.add('gallery-ready');
  syncPlayback();
})();
