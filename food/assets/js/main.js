/* =============================================
   DADDY OF TASTES — Main JS
   ============================================= */

// ---- Navbar scroll ----
window.addEventListener('scroll', () => {
  document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 20);
});

// ---- Mobile menu ----
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('open');
});
document.addEventListener('click', e => {
  if (mobileMenu?.classList.contains('open') && !mobileMenu.contains(e.target) && !hamburger?.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ---- CART ----
let cart = JSON.parse(localStorage.getItem('dot_cart') || '[]');
function saveCart() { localStorage.setItem('dot_cart', JSON.stringify(cart)); }
function getCartCount() { return cart.reduce((s, i) => s + i.qty, 0); }
function getCartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }

function updateCartBadge() {
  const n = getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = n);
}

function addToCart(id, name, price, img) {
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, name, price: Number(price), img, qty: 1 });
  saveCart();
  updateCartBadge();
  showToast(name, 'Added to cart', 'check-circle');
}

window.addToCart = addToCart;

// ---- Wishlist ----
window.toggleWishlist = function (btn) {
  btn.classList.toggle('active');
  // swap icon
  const icon = btn.querySelector('[data-lucide]');
  if (icon) {
    icon.setAttribute('data-lucide', btn.classList.contains('active') ? 'heart' : 'heart');
    icon.style.fill = btn.classList.contains('active') ? 'currentColor' : 'none';
  }
  showToast('Wishlist', btn.classList.contains('active') ? 'Saved to wishlist' : 'Removed from wishlist', 'heart');
};

// ---- Toast ----
function showToast(title, msg, iconName = 'check-circle') {
  document.querySelector('.toast')?.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `
    <span class="toast-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--primary)"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg></span>
    <div class="toast-msg"><h4>${title}</h4><p>${msg}</p></div>
    <div class="toast-progress"></div>`;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 350); }, 3200);
}
window.showToast = showToast;

// ---- Category filter on menu page ----
document.querySelectorAll('.filter-cat-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-cat-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const cat = this.dataset.cat;
    document.querySelectorAll('.food-card[data-cat]').forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
    document.querySelectorAll('.menu-section').forEach(sec => {
      const visible = sec.querySelectorAll('.food-card[style=""],.food-card:not([style])');
      sec.style.display = (cat === 'all' || sec.dataset.sec === cat) ? '' : 'none';
    });
  });
});

// ---- Search ----
document.querySelector('.search-box input')?.addEventListener('input', function () {
  const q = this.value.toLowerCase();
  document.querySelectorAll('.food-card').forEach(card => {
    const name = card.querySelector('h3')?.textContent.toLowerCase() || '';
    card.style.display = name.includes(q) ? '' : 'none';
  });
});

// ---- Cart page ----
function renderCartPage() {
  const wrap = document.getElementById('cart-items');
  if (!wrap) return;
  if (!cart.length) {
    wrap.innerHTML = `
      <div style="text-align:center;padding:60px 0;color:var(--text-muted)">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto 16px;display:block;color:var(--border-dark)"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <h3 style="font-size:18px;font-weight:700;margin-bottom:6px;color:var(--text-dark)">Your cart is empty</h3>
        <p style="font-size:14px;margin-bottom:20px">Add some delicious Indian food!</p>
        <a href="menu.html" class="btn btn-primary">Browse Menu</a>
      </div>`;
    updateSummary();
    return;
  }
  wrap.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80/FFF5EC/F97316?text=Food'">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>Regular serving</p>
        <div class="qty-control">
          <button class="qty-btn-sm" onclick="changeQty('${item.id}', -1)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/></svg>
          </button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn-sm" onclick="changeQty('${item.id}', 1)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-price">${(item.price * item.qty).toFixed(0)}</div>
        <span class="remove-btn" onclick="removeItem('${item.id}')">Remove</span>
      </div>
    </div>`).join('');
  updateSummary();
}

function changeQty(id, d) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartBadge(); renderCartPage();
}
window.changeQty = changeQty;

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartBadge(); renderCartPage();
}
window.removeItem = removeItem;

function updateSummary() {
  const sub = getCartTotal();
  const delivery = sub > 0 ? (sub >= 499 ? 0 : 40) : 0;
  const tax = Math.round(sub * 0.05);
  const total = sub + delivery + tax;
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('subtotal', sub.toFixed(0));
  set('delivery', delivery === 0 && sub > 0 ? 'FREE' : delivery.toFixed(0));
  set('tax', tax.toFixed(0));
  set('total', total.toFixed(0));
}

window.applyCoupon = function () {
  const val = document.getElementById('coupon-input')?.value.trim().toUpperCase();
  const codes = { 'DADDY10': 10, 'FIRST20': 20, 'TASTE15': 15 };
  if (codes[val]) showToast('Coupon Applied!', `${codes[val]}% discount applied`);
  else showToast('Invalid Code', 'Please enter a valid coupon code');
};

// ---- Payment selector ----
document.querySelectorAll('.payment-option').forEach(opt => {
  opt.addEventListener('click', function () {
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
    this.classList.add('selected');
    this.querySelector('input[type="radio"]')?.click();
    const cf = document.getElementById('card-fields');
    if (cf) cf.style.display = this.querySelector('h4')?.textContent.includes('Card') ? '' : 'none';
  });
});

// ---- Scroll animations ----
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.food-card, .category-card, .step-card, .testimonial-card, .value-card, .cat-pill').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.25s, box-shadow 0.25s';
  observer.observe(el);
});

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderCartPage();
  if (typeof lucide !== 'undefined') lucide.createIcons();
});
updateCartBadge();
