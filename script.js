/* =====================================================
   PKm — پوشش کیان ماکان (Pooshesh Kian Makan)
   script.js
   Vanilla JS only. No build step, no dependencies.
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initScrollReveal();
  initAccordion();
  initHudCounters();
  initParticles();
});

/* ---------- Sticky header shrink/blur on scroll ---------- */
function initHeaderScroll(){
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 12){
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Mobile navigation toggle ---------- */
function initMobileNav(){
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  const cta = document.querySelector('.nav-cta');
  if (!toggle || !links) return;

  const closeMenu = () => {
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('open');
    if (cta) cta.classList.remove('open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (cta) cta.classList.toggle('open', isOpen);
  });

  links.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ---------- Scroll-triggered fade/slide-up reveals ---------- */
function initScrollReveal(){
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)){
    targets.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(el => observer.observe(el));
}

/* ---------- FAQ accordion ---------- */
function initAccordion(){
  const triggers = document.querySelectorAll('.accordion-trigger');
  if (!triggers.length) return;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const panel = trigger.nextElementSibling;
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      // Close all other panels for a clean single-open accordion
      triggers.forEach(other => {
        if (other !== trigger){
          other.setAttribute('aria-expanded', 'false');
          const otherPanel = other.nextElementSibling;
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      trigger.setAttribute('aria-expanded', String(!isOpen));
      if (panel){
        panel.style.maxHeight = isOpen ? null : `${panel.scrollHeight}px`;
      }
    });
  });
}

/* ---------- Animated stat readout counters (e.g. PRODUCTION / UPTIME / QUALITY) ---------- */
function initHudCounters(){
  const values = document.querySelectorAll('.hud-value[data-count]');
  if (!values.length) return;

  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)){
    values.forEach(animateCount);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  values.forEach(el => observer.observe(el));
}

/* ---------- Lightweight ambient particle background ---------- */
/* Amber/steel spark motif — evokes metal fabrication and protective
   coating work rather than a generic tech/gaming aesthetic. */
function initParticles(){
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height, particles;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const PARTICLE_COUNT = 46;
  const PARTICLE_COLOR = '212, 149, 66'; // warm steel-spark amber (PKm brand accent)

  function resize(){
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticles(){
    particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      speedY: Math.random() * 0.25 + 0.05,
      speedX: (Math.random() - 0.5) * 0.15,
      alpha: Math.random() * 0.5 + 0.15
    }));
  }

  function draw(){
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${PARTICLE_COLOR}, ${p.alpha})`;
      ctx.fill();

      p.y -= p.speedY;
      p.x += p.speedX;

      if (p.y < -10){
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
    });

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  // Respect reduced-motion preference: render a single static frame only.
  if (prefersReducedMotion){
    draw_static();
    return;
  }

  requestAnimationFrame(draw);

  function draw_static(){
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${PARTICLE_COLOR}, ${p.alpha})`;
      ctx.fill();
    });
  }
}
