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

/* ===== IDIOMA PT / EN ===== */
const LANG_KEY = 'portfolio-lang';
const TRANSLATIONS = {
  pt: {
    'nav.home': 'Home',
    'nav.about': 'Sobre mim',
    'nav.skills': 'Habilidades',
    'nav.portfolio': 'Portfólio',
    'nav.contact': 'Contato',
    'nav.langLabel': 'Idioma',
    'hero.greeting': "Eu sou",
    'hero.subtitle': 'Transformando ideias em experiências digitais incríveis.',
    'hero.contactMe': 'Fale comigo',
    'hero.viewProjects': 'Ver Projetos',
    'stats.repos': 'repositórios',
    'stats.years': 'anos de experiência',
    'stats.projects': 'Projetos',
    'stats.realOnGitHub': 'reais no GitHub',
    'stats.content': 'Conteúdo',
    'stats.alwaysUpdated': 'sempre atualizado',
    'about.tag': '01. Sobre mim',
    'about.hello': 'Olá, eu sou ',
    'about.badgeText': 'Anos de<br/>experiência',
    'about.desc1': 'Desenvolvedor Web especializado em criar interfaces atraentes e responsivas. Trabalho com <strong>React.js, React Native e TypeScript</strong> para desenvolver aplicações web e mobile de alto desempenho.',
    'about.desc2': 'Com sólido conhecimento em <strong>PHP/Laravel e PostgreSQL</strong>, desenvolvo soluções completas para o setor público e privado — atualmente na <strong>Itarget Tecnologia</strong>, Ceará.',
    'about.statProjects': 'Projetos',
    'about.statClients': 'Clientes',
    'about.statYears': 'Anos exp.',
    'about.cta': 'Vamos conversar',
    'portfolio.tag': '03. Portfólio',
    'portfolio.title': 'Meus <span class="highlight">Projetos</span>',
    'portfolio.filterAll': 'Todos',
    'portfolio.filterApp': 'App / Mobile',
    'portfolio.cta': 'Ver todos os repositórios no GitHub',
    'portfolio.loading': 'Carregando repositórios públicos do GitHub...',
    'portfolio.error': 'Não foi possível carregar os repositórios.',
    'portfolio.errorLink': 'Ver no GitHub',
    'contact.tag': '05. Contato',
    'contact.text': 'Estou disponível para projetos freelance, oportunidades de emprego ou apenas uma conversa sobre tecnologia. Vamos criar experiências digitais excepcionais juntos!',
    'contact.email': 'Email',
    'contact.company': 'Empresa atual',
    'contact.location': 'Localização',
    'contact.formName': 'Seu nome',
    'contact.formEmail': 'Seu email',
    'contact.formSubject': 'Assunto',
    'contact.formMessage': 'Mensagem',
    'contact.send': 'Enviar mensagem',
    'footer.copy': '© 2026 Vitu. Feito com ♥ e muito café.',
    'footer.backTop': 'Voltar ao topo'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.langLabel': 'Language',
    'hero.greeting': "I'm a",
    'hero.subtitle': 'Turning ideas into great digital experiences.',
    'hero.contactMe': 'Contact Me',
    'hero.viewProjects': 'View Projects',
    'stats.repos': 'repositories',
    'stats.years': 'years of experience',
    'stats.projects': 'Projects',
    'stats.realOnGitHub': 'real on GitHub',
    'stats.content': 'Content',
    'stats.alwaysUpdated': 'always updated',
    'about.tag': '01. About me',
    'about.hello': "Hi, I'm ",
    'about.badgeText': 'Years of<br/>experience',
    'about.desc1': 'Web Developer focused on building attractive, responsive interfaces. I work with <strong>React.js, React Native and TypeScript</strong> to build high-performance web and mobile applications.',
    'about.desc2': 'With solid experience in <strong>PHP/Laravel and PostgreSQL</strong>, I deliver full solutions for public and private sector — currently at <strong>Itarget Tecnologia</strong>, Ceará.',
    'about.statProjects': 'Projects',
    'about.statClients': 'Clients',
    'about.statYears': 'Years exp.',
    'about.cta': "Let's talk",
    'portfolio.tag': '03. Portfolio',
    'portfolio.title': 'My <span class="highlight">Projects</span>',
    'portfolio.filterAll': 'All',
    'portfolio.filterApp': 'App / Mobile',
    'portfolio.cta': 'View all repositories on GitHub',
    'portfolio.loading': 'Loading public repositories from GitHub...',
    'portfolio.error': 'Could not load repositories.',
    'portfolio.errorLink': 'View on GitHub',
    'contact.tag': '05. Contact',
    'contact.text': "I'm available for freelance projects, job opportunities or just a chat about tech. Let's create exceptional digital experiences together!",
    'contact.email': 'Email',
    'contact.company': 'Current company',
    'contact.location': 'Location',
    'contact.formName': 'Your name',
    'contact.formEmail': 'Your email',
    'contact.formSubject': 'Subject',
    'contact.formMessage': 'Message',
    'contact.send': 'Send message',
    'footer.copy': '© 2026 Vitu. Made with ♥ and lots of coffee.',
    'footer.backTop': 'Back to top'
  }
};

function getLang() {
  const stored = localStorage.getItem(LANG_KEY);
  return stored === 'en' || stored === 'pt' ? stored : 'pt';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.pt;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] != null) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] != null) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] != null) el.setAttribute('aria-label', t[key]);
  });
  document.querySelectorAll('.nav__lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
  });
}

(function initLang() {
  const lang = getLang();
  setLang(lang);
  applyTranslations(lang);
  document.querySelectorAll('.nav__lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const l = btn.getAttribute('data-lang');
      if (l === 'pt' || l === 'en') {
        setLang(l);
        applyTranslations(l);
      }
    });
  });
})();

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
const portfolioGrid = document.getElementById('portfolioGrid');

function applyPortfolioFilter() {
  const filter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
  const projectCards = document.querySelectorAll('.project-card');
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
}

if (portfolioGrid) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyPortfolioFilter();
    });
  });
}

/* ===== GITHUB API — repositórios públicos ===== */
const GITHUB_USER = 'VituSuperMEg';
const REPOS_API = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`;
const USER_API = `https://api.github.com/users/${GITHUB_USER}`;

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function getCategory(repo) {
  const lang = (repo.language || '').toLowerCase();
  const desc = (repo.description || '').toLowerCase();
  const name = (repo.name || '').toLowerCase();
  if (['kotlin', 'java', 'swift', 'dart', 'objective-c'].includes(lang)) return 'app';
  if (desc.includes('mobile') || desc.includes('app ') || name.includes('app') || name.includes('-apk')) return 'app';
  if (['go', 'python', 'php', 'ruby', 'c#', 'rust'].includes(lang)) return 'api';
  if (desc.includes('api') || desc.includes('backend')) return 'api';
  return 'web';
}

function getPlaceholderStyle(category, language) {
  const styles = {
    app: 'background: linear-gradient(135deg, #0d1b2a, #1b2838); color: #3ddc84;',
    api: 'background: linear-gradient(135deg, #0d1f1a, #00acd7 100%); color: #00acd7;',
    web: 'background: linear-gradient(135deg, #1a0d2e, #2d1458); color: #a855f7;'
  };
  return styles[category] || styles.web;
}

function getPlaceholderIcon(category, language) {
  const lang = (language || '').toLowerCase();
  if (['kotlin', 'java'].includes(lang)) return 'fab fa-android';
  if (lang === 'swift') return 'fab fa-apple';
  if (['go', 'rust', 'php', 'python'].includes(lang)) return 'fas fa-server';
  if (['typescript', 'javascript', 'vue', 'react'].includes(lang)) return 'fab fa-js';
  if (category === 'app') return 'fas fa-mobile-alt';
  if (category === 'api') return 'fas fa-plug';
  return 'fas fa-code';
}

async function loadPortfolioFromGitHub() {
  const grid = document.getElementById('portfolioGrid');
  const loading = document.getElementById('portfolioLoading');
  const reposCountEl = document.getElementById('reposCount');
  if (!grid || !loading) return;

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(USER_API, { headers: { Accept: 'application/vnd.github.v3+json' } }),
      fetch(REPOS_API, { headers: { Accept: 'application/vnd.github.v3+json' } })
    ]);

    if (reposRes.ok && userRes.ok) {
      const [user, repos] = await Promise.all([userRes.json(), reposRes.json()]);
      const allRepos = Array.isArray(repos) ? repos.filter(r => !r.fork) : [];
      const byCategory = { web: [], app: [], api: [] };
      allRepos.forEach(r => {
        const cat = getCategory(r);
        if (byCategory[cat]) byCategory[cat].push(r);
      });
      const selected = [];
      ['web', 'app', 'api'].forEach(cat => {
        if (byCategory[cat].length) selected.push(byCategory[cat].shift());
      });
      while (selected.length < 5 && (byCategory.web.length || byCategory.app.length || byCategory.api.length)) {
        for (const cat of ['web', 'app', 'api']) {
          if (selected.length >= 5) break;
          if (byCategory[cat].length) selected.push(byCategory[cat].shift());
        }
      }
      const publicRepos = selected.slice(0, 5);

      if (reposCountEl && typeof user.public_repos === 'number') {
        reposCountEl.textContent = '+' + user.public_repos;
      }

      loading.remove();

      publicRepos.forEach((repo, i) => {
        const category = getCategory(repo);
        const name = escapeHtml(repo.name.replace(/-/g, ' '));
        const desc = escapeHtml(repo.description || 'Repositório no GitHub.');
        const url = escapeHtml(repo.html_url || '#');
        const lang = repo.language ? escapeHtml(repo.language) : '';
        const tags = [lang].filter(Boolean);
        const style = getPlaceholderStyle(category, repo.language);
        const icon = getPlaceholderIcon(category, repo.language);
        const homepage = repo.homepage ? escapeHtml(repo.homepage) : '';

        const card = document.createElement('div');
        card.className = 'project-card reveal-up';
        card.setAttribute('data-category', category);
        card.style.setProperty('--delay', (i % 6) * 0.1 + 's');
        card.innerHTML = `
          <div class="project-card__img">
            <div class="project-card__overlay">
              <div class="project-card__links">
                ${homepage ? `<a href="${homepage}" target="_blank" rel="noopener" class="project-card__link" aria-label="Live"><i class="fas fa-external-link-alt"></i></a>` : ''}
                <a href="${url}" target="_blank" rel="noopener" class="project-card__link" aria-label="GitHub"><i class="fab fa-github"></i></a>
              </div>
            </div>
            <div class="project-card__placeholder" style="${style}">
              <i class="${icon}" style="color: inherit;"></i>
            </div>
          </div>
          <div class="project-card__info">
            <div class="project-card__tags">${tags.map(t => `<span>${t}</span>`).join('')}</div>
            <h3 class="project-card__title">${name}</h3>
            <p class="project-card__desc">${desc}</p>
          </div>
        `;
        grid.appendChild(card);
      });

      grid.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          cursor.classList.add('hovering');
          follower.classList.add('hovering');
        });
        card.addEventListener('mouseleave', () => {
          cursor.classList.remove('hovering');
          follower.classList.remove('hovering');
        });
      });

      const revealElements = grid.querySelectorAll('.reveal-up');
      revealElements.forEach(el => {
        if (typeof observer !== 'undefined') observer.observe(el);
      });
      applyPortfolioFilter();
    } else {
      const t = TRANSLATIONS[getLang()] || TRANSLATIONS.pt;
      loading.innerHTML = '<span>' + (t['portfolio.error'] || 'Não foi possível carregar os repositórios.') + ' <a href="https://github.com/' + GITHUB_USER + '" target="_blank" rel="noopener">' + (t['portfolio.errorLink'] || 'Ver no GitHub') + '</a>.</span>';
    }
  } catch (e) {
    const t = TRANSLATIONS[getLang()] || TRANSLATIONS.pt;
    loading.innerHTML = '<span>' + (t['portfolio.error'] || 'Erro ao carregar repositórios.') + ' <a href="https://github.com/' + GITHUB_USER + '" target="_blank" rel="noopener">' + (t['portfolio.errorLink'] || 'Ver no GitHub') + '</a>.</span>';
  }
}

loadPortfolioFromGitHub();

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
