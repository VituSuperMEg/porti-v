/* ===== CUSTOM CURSOR ===== */
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

const hoverTargets = document.querySelectorAll('a, button, .project-card, .skill-card, .filter-btn, .social-link, .tag');
hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hovering');
    follower.classList.add('hovering');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovering');
    follower.classList.remove('hovering');
  });
});

/* ===== NAV SCROLL ===== */
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

/* ===== MOBILE NAV TOGGLE ===== */
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
  const spans = navToggle.querySelectorAll('span');
  if (navLinksEl.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

/* ===== TYPING EFFECT ===== */
const words = ['DEV.', 'FRONTEND.', 'FULL STACK.', 'MOBILE DEV.'];
const typingEl = document.getElementById('typingText');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 120;

function type() {
  const current = words[wordIndex];

  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 60;
  } else {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 120;
  }

  if (!isDeleting && charIndex === current.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 400;
  }

  setTimeout(type, typingSpeed);
}

setTimeout(type, 600);

/* ===== SCROLL REVEAL ===== */
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => observer.observe(el));

/* ===== COUNTER ANIMATION ===== */
const counters = document.querySelectorAll('.about__stat-num');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'));
      let current = 0;
      const increment = target / 40;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, 40);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

/* ===== PORTFOLIO FILTERS ===== */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach((card, i) => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 60);
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ===== PARTICLE CANVAS ===== */
const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 60;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.4 + 0.1;
    this.opacityDir = (Math.random() - 0.5) * 0.005;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.opacity += this.opacityDir;

    if (this.opacity < 0.05 || this.opacity > 0.5) this.opacityDir *= -1;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(61, 220, 132, ${this.opacity})`;
    ctx.fill();
  }
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(61, 220, 132, ${0.06 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  connectParticles();
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ===== CONTACT FORM ===== */
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = form.querySelector('.btn');
  btn.innerHTML = '<span>Enviando...</span><i class="fas fa-spinner fa-spin"></i>';
  btn.disabled = true;

  setTimeout(() => {
    form.reset();
    formSuccess.classList.add('show');
    btn.innerHTML = '<span>Enviar mensagem</span><i class="fas fa-paper-plane"></i>';
    btn.disabled = false;

    setTimeout(() => formSuccess.classList.remove('show'), 4000);
  }, 1500);
});

/* ===== PARALLAX HERO LETTER ===== */
const bgLetter = document.querySelector('.hero__bg-letter');
document.addEventListener('mousemove', (e) => {
  if (!bgLetter) return;
  const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.015;
  bgLetter.style.transform = `translateY(-50%) translate(${moveX}px, ${moveY}px)`;
});

/* ===== SMOOTH HASH LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ===== EASTER EGG: Cobrinha pixel (WASD, só desktop) ===== */
(function () {
  const canvas = document.getElementById('snakeCanvas');
  const wrap = document.getElementById('snakeEgg');
  if (!canvas || !wrap) return;

  const isDesktop = () => window.innerWidth >= 1024 && !('ontouchstart' in window);
  if (!isDesktop()) {
    wrap.style.display = 'none';
    return;
  }

  const COLS = 32;
  const ROWS = 24;
  const CELL = 5;
  const ctx = canvas.getContext('2d');

  let snake = [{ x: 4, y: 12 }, { x: 3, y: 12 }, { x: 2, y: 12 }];
  let dir = { x: 1, y: 0 };
  let nextDir = { x: 1, y: 0 };
  let food = { x: 16, y: 12 };
  let running = false;
  let lastMove = 0;
  const MOVE_INTERVAL = 120;

  function randCell() {
    return { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
  }

  function placeFood() {
    let f = randCell();
    while (snake.some(s => s.x === f.x && s.y === f.y)) f = randCell();
    food = f;
  }

  function draw() {
    ctx.fillStyle = 'rgba(17, 17, 19, 0.92)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(61, 220, 132, 0.85)';
    snake.forEach((seg, i) => {
      const alpha = 1 - (snake.length - 1 - i) * 0.08;
      ctx.fillStyle = `rgba(61, 220, 132, ${Math.max(0.4, alpha)})`;
      ctx.fillRect(seg.x * CELL, seg.y * CELL, CELL - 0.5, CELL - 0.5);
    });

    ctx.fillStyle = 'rgba(255, 180, 80, 0.9)';
    ctx.fillRect(food.x * CELL, food.y * CELL, CELL - 0.5, CELL - 0.5);
  }

  function tick(now) {
    if (!running) {
      requestAnimationFrame(tick);
      return;
    }
    if (now - lastMove < MOVE_INTERVAL) {
      requestAnimationFrame(tick);
      return;
    }
    lastMove = now;
    dir = { ...nextDir };

    const head = { x: (snake[0].x + dir.x + COLS) % COLS, y: (snake[0].y + dir.y + ROWS) % ROWS };
    if (snake.some(s => s.x === head.x && s.y === head.y)) {
      snake = [{ x: 4, y: 12 }, { x: 3, y: 12 }, { x: 2, y: 12 }];
      dir = nextDir = { x: 1, y: 0 };
      placeFood();
      draw();
      requestAnimationFrame(tick);
      return;
    }
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      placeFood();
    } else {
      snake.pop();
    }
    draw();
    requestAnimationFrame(tick);
  }

  const keys = { w: { x: 0, y: -1 }, a: { x: -1, y: 0 }, s: { x: 0, y: 1 }, d: { x: 1, y: 0 } };
  document.addEventListener('keydown', (e) => {
    if (!isDesktop()) return;
    const k = e.key.toLowerCase();
    if (!keys[k]) return;
    e.preventDefault();
    if (!running) {
      running = true;
      lastMove = performance.now();
    }
    const want = keys[k];
    if (want.x !== -dir.x || want.y !== -dir.y) nextDir = want;
  });

  draw();
  requestAnimationFrame(tick);
})();
