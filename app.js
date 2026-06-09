/* ─────────────────────────────────────────────────────
   CAFÉ CENTRAL — App JavaScript
   Cart, Menu, Animations, Testimonials, Form
───────────────────────────────────────────────────── */

"use strict";

// ── PAGE LOADING ──────────────────────────────────────
(function initLoader() {
  const loader = document.createElement('div');
  loader.className = 'page-loading';
  loader.innerHTML = `
    <span class="loader-text">Café Central</span>
    <div class="loader-bar"></div>
  `;
  document.body.prepend(loader);
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 600);
  });
})();

// ── MENU DATA ─────────────────────────────────────────
const menuData = {
  cafes: [
    {
      name: 'Espresso Clásico',
      desc: 'Concentrado intenso con crema dorada. Single shot perfecto.',
      price: 850,
      badge: 'Bestseller',
      img: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80',
    },
    {
      name: 'Flat White',
      desc: 'Doble ristretto con leche texturizada al estilo australiano.',
      price: 1100,
      img: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&q=80',
    },
    {
      name: 'Cappuccino Artesanal',
      desc: 'Espresso, leche cremosa y espuma densa. Clásico inigualable.',
      price: 980,
      img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80',
    },
    {
      name: 'Latte con Arte',
      desc: 'Espresso con leche sedosa y latte art hecho a mano.',
      price: 1050,
      badge: 'Popular',
      img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
    },
    {
      name: 'Café de Origen',
      desc: 'Etiopía Yirgacheffe, notas a jazmín, bergamota y frutos rojos.',
      price: 1400,
      badge: 'Especial',
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
    },
    {
      name: 'Cortado',
      desc: 'Espresso cortado con leche caliente en partes iguales.',
      price: 900,
      img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
    },
  ],
  frios: [
    {
      name: 'Cold Brew 24h',
      desc: 'Infusión en frío durante 24 horas. Suave, sin acidez, refrescante.',
      price: 1200,
      badge: 'Nuevo',
      img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
    },
    {
      name: 'Iced Latte',
      desc: 'Espresso doble sobre hielo con leche de tu elección.',
      price: 1100,
      img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
    },
    {
      name: 'Frappe de Caramelo',
      desc: 'Blend helado de café, caramelo artesanal y crema.',
      price: 1350,
      badge: 'Bestseller',
      img: 'https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?w=400&q=80',
    },
    {
      name: 'Matcha Latte Frío',
      desc: 'Matcha japonés de primera calidad con leche de avena.',
      price: 1280,
      img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
    },
  ],
  pasteles: [
    {
      name: 'Croissant de Manteca',
      desc: 'Hojaldre francés, 72 capas. Crujiente afuera, suave adentro.',
      price: 780,
      badge: 'Artesanal',
      img: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400&q=80',
    },
    {
      name: 'Tarta de Limón',
      desc: 'Crema de limón fresca, merengue tostado y masa sablé.',
      price: 920,
      img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&q=80',
    },
    {
      name: 'Brownie Intenso',
      desc: 'Chocolate 70% cacao con nueces tostadas. Tibio, irresistible.',
      price: 850,
      badge: 'Popular',
      img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',
    },
    {
      name: 'Muffin de Arándanos',
      desc: 'Esponjoso y húmedo con arándanos frescos y azúcar crunch.',
      price: 680,
      img: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80',
    },
  ],
  sandwiches: [
    {
      name: 'Sándwich Club',
      desc: 'Pollo grillado, palta, tomate y mayonesa de hierbas en pan de campo.',
      price: 1450,
      badge: 'Bestseller',
      img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80',
    },
    {
      name: 'Veggie Gourmet',
      desc: 'Mozzarella, tomate confitado, rúcula y pesto en ciabatta.',
      price: 1280,
      badge: 'Veggie',
      img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80',
    },
    {
      name: 'Tostado de Jamón Crudo',
      desc: 'Jamón crudo, queso brie, higos y rúcula en pan de masa madre.',
      price: 1550,
      img: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&q=80',
    },
  ],
  desayunos: [
    {
      name: 'Desayuno Central',
      desc: 'Café a elección + tostadas de masa madre + mermelada + jugo natural.',
      price: 2200,
      badge: 'Completo',
      img: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=400&q=80',
    },
    {
      name: 'Bowl de Granola',
      desc: 'Granola artesanal, yogurt griego, frutas frescas y miel.',
      price: 1350,
      badge: 'Saludable',
      img: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&q=80',
    },
    {
      name: 'Avocado Toast',
      desc: 'Pan artesanal, palta batida, huevo pochado y semillas.',
      price: 1600,
      img: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&q=80',
    },
  ],
};

// ── WHATSAPP NUMBER (edit this) ────────────────────────
const WA_NUMBER = '5491100000000';

// ── CART STATE ────────────────────────────────────────
let cart = {};

function getCart() { return cart; }

function addToCart(name, price) {
  if (cart[name]) {
    cart[name].qty += 1;
  } else {
    cart[name] = { price, qty: 1 };
  }
  updateCartUI();
  updateCartFloat();
}

function removeFromCart(name) {
  delete cart[name];
  updateCartUI();
  updateCartFloat();
}

function changeQty(name, delta) {
  if (!cart[name]) return;
  cart[name].qty += delta;
  if (cart[name].qty <= 0) {
    removeFromCart(name);
    return;
  }
  updateCartUI();
  updateCartFloat();
}

function clearCart() {
  cart = {};
  updateCartUI();
  updateCartFloat();
}

function getTotal() {
  return Object.values(cart).reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getItemCount() {
  return Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
}

// ── CART UI ────────────────────────────────────────────
function updateCartUI() {
  const cartSection = document.getElementById('cartSection');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  if (Object.keys(cart).length === 0) {
    cartSection.style.display = 'none';
    return;
  }

  cartSection.style.display = 'block';

  cartItems.innerHTML = Object.entries(cart).map(([name, { price, qty }]) => `
    <div class="cart-item">
      <span class="cart-item-name">${name} × ${qty}</span>
      <span class="cart-item-price">$${(price * qty).toLocaleString('es-AR')}</span>
      <div class="qty-control">
        <button class="qty-btn" onclick="changeQty('${name}', -1)">−</button>
        <span class="qty-num">${qty}</span>
        <button class="qty-btn" onclick="changeQty('${name}', 1)">+</button>
        <button class="cart-item-remove" onclick="removeFromCart('${name}')" title="Eliminar">✕</button>
      </div>
    </div>
  `).join('');

  cartTotal.textContent = `$${getTotal().toLocaleString('es-AR')}`;

  // Scroll to cart
  cartSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function updateCartFloat() {
  const btn = document.getElementById('cartFloat');
  const count = document.getElementById('cartCount');
  const n = getItemCount();

  if (n === 0) {
    btn.style.display = 'none';
  } else {
    btn.style.display = 'flex';
    count.textContent = n;
  }
}

// ── MENU RENDER ───────────────────────────────────────
function renderMenu(category) {
  const grid = document.getElementById('menuGrid');
  const items = menuData[category] || [];

  grid.innerHTML = items.map((item, i) => `
    <div class="menu-card reveal" style="animation-delay:${i * 0.07}s">
      <div class="menu-card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        ${item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : ''}
      </div>
      <div class="menu-card-body">
        <h3 class="menu-card-name">${item.name}</h3>
        <p class="menu-card-desc">${item.desc}</p>
        <div class="menu-card-footer">
          <span class="menu-card-price">$${item.price.toLocaleString('es-AR')}</span>
          <button class="add-btn" onclick="addToCart('${item.name}', ${item.price})">
            + Agregar
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Trigger reveal for newly added cards
  setTimeout(() => {
    grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }, 50);
}

// ── WHATSAPP ORDER ─────────────────────────────────────
function buildWhatsAppMessage() {
  if (Object.keys(cart).length === 0) return '';

  let msg = '🛒 *Pedido desde Café Central Web*\n\n';
  Object.entries(cart).forEach(([name, { price, qty }]) => {
    msg += `• ${name} × ${qty} — $${(price * qty).toLocaleString('es-AR')}\n`;
  });
  msg += `\n💰 *Total: $${getTotal().toLocaleString('es-AR')}*\n\n`;
  msg += '¡Hola! Me gustaría confirmar este pedido. 😊';
  return encodeURIComponent(msg);
}

// ── TABS ───────────────────────────────────────────────
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenu(tab.dataset.cat);
    });
  });
}

// ── TESTIMONIALS ──────────────────────────────────────
function initTestimonials() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.getElementById('testimonialDots');
  let current = 0;
  let autoTimer;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `t-dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Testimonio ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(idx) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5500);
  }

  document.getElementById('tPrev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('tNext').addEventListener('click', () => goTo(current + 1));

  resetTimer();
}

// ── NAVBAR SCROLL ─────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── REVEAL ON SCROLL ──────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── CONTACT FORM ──────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.className = 'form-status error';
      status.textContent = '⚠️ Por favor completá todos los campos obligatorios.';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      status.className = 'form-status error';
      status.textContent = '⚠️ Por favor ingresá un email válido.';
      return;
    }

    // Simulate form submission (replace with real endpoint)
    const btn = form.querySelector('.btn-primary');
    btn.textContent = 'Enviando...';
    btn.style.opacity = '.7';
    btn.disabled = true;

    setTimeout(() => {
      status.className = 'form-status success';
      status.textContent = '✅ ¡Mensaje enviado! Te responderemos dentro de las próximas 24 horas.';
      form.reset();
      btn.textContent = 'Enviar Mensaje ✉️';
      btn.style.opacity = '1';
      btn.disabled = false;
    }, 1400);
  });
}

// ── CART FLOAT BUTTON ─────────────────────────────────
function initCartFloat() {
  document.getElementById('cartFloat').addEventListener('click', () => {
    const cartSection = document.getElementById('cartSection');
    if (cartSection.style.display !== 'none') {
      cartSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

// ── WHATSAPP SEND ─────────────────────────────────────
function initWhatsApp() {
  document.getElementById('sendWhatsApp').addEventListener('click', () => {
    if (Object.keys(cart).length === 0) {
      alert('Tu carrito está vacío. ¡Agrega algunos productos primero!');
      return;
    }
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  });

  document.getElementById('clearCart').addEventListener('click', () => {
    if (confirm('¿Limpiar el carrito?')) clearCart();
  });
}

// ── GALLERY LIGHTBOX (simple) ─────────────────────────
function initGallery() {
  const items = document.querySelectorAll('.gal-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position:fixed;inset:0;z-index:9000;
        background:rgba(0,0,0,.92);display:flex;
        align-items:center;justify-content:center;
        cursor:zoom-out;animation:fadeIn .25s;
      `;
      const style = document.createElement('style');
      style.textContent = '@keyframes fadeIn{from{opacity:0}to{opacity:1}}';
      document.head.appendChild(style);

      const bigImg = document.createElement('img');
      bigImg.src = img.src.replace('w=500', 'w=1200').replace('w=900', 'w=1800');
      bigImg.style.cssText = 'max-width:92vw;max-height:90vh;object-fit:contain;border-radius:2px;';
      overlay.appendChild(bigImg);
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';

      overlay.addEventListener('click', () => {
        overlay.remove();
        document.body.style.overflow = '';
      });
    });
  });
}

// ── SMOOTH ACTIVE NAV LINK ────────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}

// ── INIT ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTabs();
  renderMenu('cafes');
  initReveal();
  initTestimonials();
  initContactForm();
  initCartFloat();
  initWhatsApp();
  initGallery();
  initActiveNav();

  // Hero reveals on load
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 180);
    });
  }, 700);
});
