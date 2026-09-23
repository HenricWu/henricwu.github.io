// Run before styles load so the first paint already uses the chosen appearance.
(() => {
  const key = 'haoyang-appearance';
  const root = document.documentElement;
  const valid = value => ['auto', 'light', 'dark'].includes(value);
  let mode = 'auto', select, transitionTimer;
  try { const saved = localStorage.getItem(key); if (valid(saved)) mode = saved; } catch { /* A session-only choice still works. */ }
  const apply = (animate = false) => {
    const hour = new Date().getHours();
    const theme = mode === 'auto' ? (hour >= 7 && hour < 19 ? 'light' : 'dark') : mode;
    if (animate && root.dataset.theme !== theme) {
      clearTimeout(transitionTimer);
      root.classList.add('theme-transitioning');
      transitionTimer = setTimeout(() => root.classList.remove('theme-transitioning'), 500);
    }
    root.dataset.theme = theme;
    root.dataset.appearance = mode;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#11151d' : '#f8f9fb');
    if (select) select.value = mode;
  };
  apply();
  document.addEventListener('DOMContentLoaded', () => {
    select = document.getElementById('theme-select');
    if (!select) return;
    select.value = mode;
    select.closest('.theme-control').hidden = false;
    select.addEventListener('change', () => {
      if (!valid(select.value)) return;
      mode = select.value;
      try { localStorage.setItem(key, mode); } catch { /* Keep the selection for this page. */ }
      apply(true);
    });
  });
  // Recheck both time boundaries and timezone changes without needing a reload.
  setInterval(() => { if (!document.hidden && mode === 'auto') apply(true); }, 60000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) apply(true); });
  addEventListener('pageshow', () => apply());
  addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    mode = valid(event.newValue) ? event.newValue : 'auto';
    apply(true);
  });
})();
