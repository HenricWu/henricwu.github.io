(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const header = document.querySelector('.site-header');
  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.prepend(progress);
  let scrollFrame = 0;
  const updateScroll = () => {
    const extent = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${extent > 0 ? Math.max(0, Math.min(1, scrollY / extent)) : 0})`;
    header?.classList.toggle('is-scrolled', scrollY > 16);
    document.querySelectorAll('.primary-nav a[href*="#"]').forEach(link => {
      const target = document.getElementById(link.hash.slice(1));
      if (!target) return;
      const bounds = target.getBoundingClientRect();
      link.classList.toggle('is-active', bounds.top <= 160 && bounds.bottom > 160);
    });
    scrollFrame = 0;
  };
  const queueScroll = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); };
  addEventListener('scroll', queueScroll, {passive: true});
  addEventListener('resize', queueScroll, {passive: true});
  document.fonts?.ready.then(queueScroll);
  updateScroll();

  // Content stays readable without JavaScript, and each entrance runs only once.
  const revealTargets = [...document.querySelectorAll('.hero-copy > *, .portrait-block, .about-section > *, .research-heading, .research-item, .section-heading, .publication-row, .timeline-item, .industry-header, .industry-role, .industry-description, .project-list details, .teaching-preview > *, .contact-section > *, .teaching-row, .page-intro > *, .detail-page > h1, .detail-figure')];
  let revealObserver;
  if ('IntersectionObserver' in window && !reduced.matches) {
    revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    }), {threshold: .08, rootMargin: '0px 0px -15px 0px'});
    revealTargets.forEach((target, i) => {
      target.style.setProperty('--reveal-delay', `${(i % 3) * 75}ms`);
      target.classList.add('motion-reveal');
      revealObserver.observe(target);
    });
  }

  const tiltTargets = [...document.querySelectorAll('.portrait-frame, .publication-thumb')];
  tiltTargets.forEach(target => {
    target.classList.add('motion-tilt');
    let frame = 0, point;
    const reset = () => {
      cancelAnimationFrame(frame); frame = 0;
      target.style.setProperty('--tilt-x', '0deg');
      target.style.setProperty('--tilt-y', '0deg');
    };
    target.addEventListener('pointermove', event => {
      if (reduced.matches || !finePointer.matches) return;
      point = {x: event.clientX, y: event.clientY};
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (point.x - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (point.y - rect.top) / rect.height));
        target.style.setProperty('--tilt-x', `${(0.5 - y) * 5}deg`);
        target.style.setProperty('--tilt-y', `${(x - 0.5) * 7}deg`);
        target.style.setProperty('--pointer-x', `${x * 100}%`);
        target.style.setProperty('--pointer-y', `${y * 100}%`);
        frame = 0;
      });
    });
    target.addEventListener('pointerleave', reset);
    target.addEventListener('blur', reset, true);
    reduced.addEventListener('change', reset);
    finePointer.addEventListener('change', reset);
  });
  const gallery = document.querySelector('.photo-gallery');
  let slideTimer;
  gallery?.querySelector('.photo-track').addEventListener('scroll', () => {
    gallery.classList.add('is-shifting');
    clearTimeout(slideTimer);
    slideTimer = setTimeout(() => gallery.classList.remove('is-shifting'), 250);
  }, {passive: true});

  // Two bounded canvases share a 30 fps loop; no rendering while off screen.
  const scenes = [];
  const sceneObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const scene = scenes.find(item => item.host === entry.target);
      if (scene) scene.visible = entry.isIntersecting;
    });
    syncScenes();
  }, {threshold: 0}) : null;
  document.querySelectorAll('.hero, .research-section').forEach((host, sceneIndex) => {
    const layer = document.createElement('div');
    layer.className = 'motion-ambient'; layer.setAttribute('aria-hidden', 'true');
    const canvas = document.createElement('canvas'); layer.append(canvas); host.prepend(layer);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const scene = {host, layer, canvas, ctx, dark: sceneIndex === 1, visible: false, width: 0, height: 0, pointer: {x: .5, y: .5}};
    scene.nodes = Array.from({length: scene.dark ? 34 : 25}, (_, i) => ({
      x: ((i * 137.508 + 27) % 100) / 100,
      y: ((i * 73.17 + 13) % 100) / 100,
      phase: i * 1.618, radius: i % 5 === 0 ? 2.4 : 1.2
    }));
    const resize = () => {
      scene.width = host.clientWidth; scene.height = host.clientHeight;
      const ratio = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(scene.width * ratio); canvas.height = Math.round(scene.height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    resize();
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(host);
    else addEventListener('resize', resize, {passive: true});
    host.addEventListener('pointermove', event => {
      if (!finePointer.matches) return;
      const rect = host.getBoundingClientRect();
      scene.pointer.x = (event.clientX - rect.left) / rect.width;
      scene.pointer.y = (event.clientY - rect.top) / rect.height;
    }, {passive: true});
    host.addEventListener('pointerleave', () => { scene.pointer = {x: .5, y: .5}; });
    scenes.push(scene);
    sceneObserver?.observe(host);
  });
  let animationFrame = 0, previousFrame = 0;
  const drawScene = (scene, now) => {
    const {ctx, width, height, dark, pointer} = scene;
    ctx.clearRect(0, 0, width, height);
    const color = dark || document.documentElement.dataset.theme === 'dark' ? '139,174,255' : '62,101,209';
    const t = now * .00022;
    const nodes = scene.nodes.slice(0, width < 600 ? 16 : undefined).map(node => ({
      x: node.x * width + Math.sin(t + node.phase) * 22 + (pointer.x - .5) * 20,
      y: node.y * height + Math.cos(t * .85 + node.phase) * 18 + (pointer.y - .5) * 15,
      radius: node.radius
    }));
    const reach = width < 600 ? 115 : 175;
    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach(other => {
        const distance = Math.hypot(node.x - other.x, node.y - other.y);
        if (distance > reach) return;
        ctx.strokeStyle = `rgba(${color},${(1 - distance / reach) * (dark ? .28 : .18)})`;
        ctx.lineWidth = .7; ctx.beginPath(); ctx.moveTo(node.x, node.y); ctx.lineTo(other.x, other.y); ctx.stroke();
      });
      ctx.fillStyle = `rgba(${color},${dark ? .55 : .3})`;
      ctx.beginPath(); ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2); ctx.fill();
      if (node.radius > 2) {
        ctx.strokeStyle = `rgba(${color},${dark ? .16 : .12})`;
        ctx.beginPath(); ctx.arc(node.x, node.y, 6 + Math.sin(t * 3 + i) * 2, 0, Math.PI * 2); ctx.stroke();
      }
    });
  };
  const frame = now => {
    if (now - previousFrame >= 1000 / 30) {
      scenes.filter(scene => scene.visible).forEach(scene => drawScene(scene, now));
      previousFrame = now;
    }
    animationFrame = requestAnimationFrame(frame);
  };
  function syncScenes() {
    const active = !reduced.matches && !document.hidden;
    scenes.forEach(scene => scene.layer.classList.toggle('is-visible', active && scene.visible));
    if (active && scenes.some(scene => scene.visible)) {
      if (!animationFrame) animationFrame = requestAnimationFrame(frame);
    } else {
      cancelAnimationFrame(animationFrame); animationFrame = 0;
    }
  }
  reduced.addEventListener('change', () => {
    if (reduced.matches) {
      revealTargets.forEach(target => target.classList.add('is-revealed'));
      revealObserver?.disconnect();
    }
    syncScenes();
  });
  document.addEventListener('visibilitychange', syncScenes);
})();
