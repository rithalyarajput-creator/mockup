/* =============================================
   DADDY OF TASTES - Main JS
   ============================================= */

// ---- Navbar scroll effect ----
window.addEventListener('scroll', () => {
  document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 20);
});

// ---- Mobile menu ----
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  hamburger.classList.toggle('active');
});

// ---- Cart state ----
let cart = JSON.parse(localStorage.getItem('dot_cart') || '[]');

function saveCart() { localStorage.setItem('dot_cart', JSON.stringify(cart)); }

function getCartCount() { return cart.reduce((sum, i) => sum + i.qty, 0); }

function updateCartBadge() {
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = getCartCount();
  });
}

// ---- Add to cart ----
function addToCart(id, name, price, img) {
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ id, name, price, img, qty: 1 }); }
  saveCart();
  updateCartBadge();
  showToast(`${name}`, 'Added to cart!', '🛒');
}

// ---- Show toast ----
function showToast(title, msg, icon = '✅') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-msg"><h4>${title}</h4><p>${msg}</p></div>
    <div class="toast-progress"></div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3200);
}

// ---- Wishlist toggle ----
function toggleWishlist(btn) {
  btn.classList.toggle('active');
  btn.textContent = btn.classList.contains('active') ? '❤️' : '🤍';
  showToast('Wishlist', btn.classList.contains('active') ? 'Added to wishlist' : 'Removed from wishlist', btn.classList.contains('active') ? '❤️' : '💔');
}

// ---- Category filter ----
document.querySelectorAll('.filter-cat-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-cat-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const cat = this.dataset.cat;
    document.querySelectorAll('.food-card[data-cat]').forEach(card => {
      card.closest('.food-card-wrap') && (card.closest('.food-card-wrap').style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none');
      if (!card.closest('.food-card-wrap')) {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
      }
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

// ---- Cart page qty controls ----
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartBadge();
  renderCartPage();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartBadge();
  renderCartPage();
}

function renderCartPage() {
  const wrap = document.getElementById('cart-items');
  if (!wrap) return;
  if (cart.length === 0) {
    wrap.innerHTML = `<div style="text-align:center;padding:60px 0;color:var(--text-muted)"><div style="font-size:64px;margin-bottom:16px">🛒</div><h3>Your cart is empty</h3><p>Add some delicious items!</p><a href="menu.html" class="btn btn-primary" style="margin-top:20px;display:inline-flex">Browse Menu</a></div>`;
    updateSummary();
    return;
  }
  wrap.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80/1C1C1C/FF4500?text=Food'">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>Regular</p>
        <div class="qty-control">
          <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
        </div>
      </div>
      <div>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        <span class="remove-btn" onclick="removeItem('${item.id}')">Remove</span>
      </div>
    </div>
  `).join('');
  updateSummary();
}

function updateSummary() {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const delivery = subtotal > 0 ? 2.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + delivery + tax;
  const el = id => document.getElementById(id);
  if (el('subtotal')) el('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  if (el('delivery')) el('delivery').textContent = delivery > 0 ? `$${delivery.toFixed(2)}` : 'FREE';
  if (el('tax')) el('tax').textContent = `$${tax.toFixed(2)}`;
  if (el('total')) el('total').textContent = `$${total.toFixed(2)}`;
}

// ---- Coupon code ----
window.applyCoupon = function () {
  const val = document.getElementById('coupon-input')?.value.trim().toUpperCase();
  const codes = { 'DADDY10': 10, 'FIRST20': 20, 'TASTE15': 15 };
  if (codes[val]) {
    showToast('Coupon Applied!', `${codes[val]}% discount applied`, '🎉');
  } else {
    showToast('Invalid Coupon', 'Please enter a valid code', '❌');
  }
};

// ---- Payment option selector ----
document.querySelectorAll('.payment-option').forEach(opt => {
  opt.addEventListener('click', function () {
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
    this.classList.add('selected');
    this.querySelector('input[type="radio"]').checked = true;
  });
});

// ---- Copy offer code ----
document.querySelectorAll('.offer-code').forEach(code => {
  code.addEventListener('click', function () {
    const text = this.querySelector('strong')?.textContent || this.textContent.trim();
    navigator.clipboard?.writeText(text);
    showToast('Copied!', `Code "${text}" copied to clipboard`, '📋');
  });
});

// ---- Scroll animations ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.1 });

document.querySelectorAll('.food-card, .category-card, .step-card, .testimonial-card, .value-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ---- Init on load ----
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderCartPage();
});
updateCartBadge();
