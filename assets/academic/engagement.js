(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const published = location.hostname === 'henricwu.github.io';
  const homepage = 'https://henricwu.github.io/';
  const applause = 'https://applause.chabouis.fr';
  const likeKey = 'henricwu-homepage-liked-v1';
  const button = document.getElementById('homepage-like');
  const message = document.getElementById('like-message');
  const formatter = new Intl.NumberFormat('en');
  let total = null, liked = false, busy = false;
  const savedLike = () => {
    try { return localStorage.getItem(likeKey) === 'yes'; } catch { return liked; }
  };
  liked = savedLike();

  async function requestCount(path, options = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(`${applause}/${path}?url=${encodeURIComponent(homepage)}`, {
        ...options, signal: controller.signal, cache: 'no-store', credentials: 'omit'
      });
      if (!response.ok) throw new Error('Counter unavailable');
      const body = (await response.text()).trim();
      if (!/^\d+$/.test(body) || !Number.isSafeInteger(Number(body))) throw new Error('Invalid count');
      return Number(body);
    } finally { clearTimeout(timeout); }
  }

  function renderLike() {
    if (!button) return;
    button.querySelector('.like-count').textContent = total === null ? '—' : formatter.format(total);
    button.querySelector('.like-label').textContent = liked ? 'Liked' : total === null ? 'Retry' : 'Like';
    button.setAttribute('aria-pressed', String(liked));
    button.setAttribute('aria-busy', String(busy));
    button.setAttribute('aria-label', liked ? 'You liked this homepage' : total === null ? 'Retry loading likes' : 'Like this homepage');
    button.disabled = busy || liked || !published;
    button.title = !published ? 'Likes are enabled on the published homepage' : liked ? 'Thanks for your support!' : 'Leave a like';
  }

  async function readLikes() {
    try {
      total = await requestCount('get-claps');
      message.textContent = '';
    } catch { message.textContent = published ? 'Likes are temporarily unavailable. Tap Retry to check again.' : 'Likes are temporarily unavailable.'; }
    renderLike();
  }

  function celebrate() {
    if (reduced.matches) return;
    button.classList.add('is-celebrating');
    for (let i = 0; i < 10; i++) {
      const spark = document.createElement('span');
      const angle = i * Math.PI / 5;
      spark.className = 'like-spark'; spark.setAttribute('aria-hidden', 'true');
      spark.style.setProperty('--spark-x', `${Math.cos(angle) * 47}px`);
      spark.style.setProperty('--spark-y', `${Math.sin(angle) * 40}px`);
      spark.style.setProperty('--spark-color', ['#e8749b', '#a3b7f0', '#d9a5e6'][i % 3]);
      button.append(spark);
      setTimeout(() => spark.remove(), 850);
    }
    setTimeout(() => button.classList.remove('is-celebrating'), 850);
  }

  async function sendLike() {
    if (savedLike()) { liked = true; busy = false; await readLikes(); return; }
    try {
      const confirmed = await requestCount('update-claps', {
        method: 'POST', headers: {'Content-Type': 'text/plain'}, body: JSON.stringify('1,4.0.0')
      });
      const increased = total !== null && confirmed > total;
      total = confirmed;
      if (increased) {
        liked = true;
        try { localStorage.setItem(likeKey, 'yes'); } catch { /* Keep this page usable when storage is blocked. */ }
        message.textContent = 'Thank you for your support!';
        celebrate();
      } else {
        message.textContent = 'No new like was added. Please try again later.';
      }
      busy = false; renderLike();
      if (!increased) button.disabled = true;
    } catch {
      // A timed-out write might have arrived. Never automatically retry a like.
      busy = false; renderLike(); button.disabled = true;
      message.textContent = 'Could not confirm your like. Refresh to check the count before trying again.';
    }
  }

  if (button) {
    readLikes();
    button.addEventListener('click', async () => {
      if (busy || liked || !published) return;
      busy = true; renderLike();
      if (total === null) { await readLikes(); busy = false; renderLike(); return; }
      // Serialize clicks in tabs sharing this browser where Web Locks is supported.
      if (navigator.locks) await navigator.locks.request(likeKey, sendLike);
      else await sendLike();
    });
    addEventListener('storage', event => {
      if (event.key === likeKey && event.newValue === 'yes') { liked = true; renderLike(); readLikes(); }
    });
  }

  const views = document.getElementById('homepage-views');
  if (views) {
    const note = document.getElementById('visitor-note');
    const container = views.closest('.visitor-counter');
    if (published) {
      // Load once, on the homepage only. site_pv groups query/hash variations.
      const source = document.createElement('span');
      source.id = 'busuanzi_value_site_pv'; source.hidden = true; source.setAttribute('aria-hidden', 'true');
      container.append(source);
      let timer;
      const observer = new MutationObserver(() => {
        const count = source.textContent.trim();
        if (!/^\d+$/.test(count) || !Number.isSafeInteger(Number(count))) return;
        clearTimeout(timer); observer.disconnect();
        views.textContent = formatter.format(Number(count));
        views.classList.add('counter-arrived'); container.classList.remove('is-unavailable');
        note.textContent = 'Since Sep 24, 2026';
      });
      observer.observe(source, {childList: true, characterData: true, subtree: true});
      const unavailable = () => {
        clearTimeout(timer); container.classList.add('is-unavailable');
        note.textContent = 'Temporarily unavailable';
      };
      timer = setTimeout(unavailable, 15000);
      const script = document.createElement('script');
      script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
      script.async = true; script.referrerPolicy = 'no-referrer-when-downgrade'; script.onerror = unavailable;
      document.head.append(script);
    } else {
      container.classList.add('is-unavailable');
      note.textContent = 'Live on the published homepage';
    }
  }

  const frame = document.querySelector('.portrait-frame');
  let frameVisible = false;
  const syncFrame = () => frame?.classList.toggle('frame-visible', frameVisible && !document.hidden && !reduced.matches);
  if (frame && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => { frameVisible = entries[0].isIntersecting; syncFrame(); }).observe(frame);
  }
  reduced.addEventListener('change', syncFrame);
  document.addEventListener('visibilitychange', syncFrame);
  document.addEventListener('click', event => {
    if (reduced.matches || !(event.target instanceof Element)) return;
    const target = event.target.closest('.button,.nav-contact,.photo-controls button');
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ui-ripple'; ripple.setAttribute('aria-hidden', 'true');
    ripple.style.left = `${event.detail ? event.clientX - rect.left : rect.width / 2}px`;
    ripple.style.top = `${event.detail ? event.clientY - rect.top : rect.height / 2}px`;
    target.append(ripple); setTimeout(() => ripple.remove(), 700);
  });
})();
