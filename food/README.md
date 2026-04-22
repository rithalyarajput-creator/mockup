# Daddy of Tastes — Food Ordering Mockup

A fully responsive, multi-page food ordering website mockup built with pure HTML, CSS, and JavaScript. Light orange + white theme, Indian food menu, complete order flow.

**Live Preview:** https://rithalyarajput-creator.github.io/mockup/food/index.html

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, categories, popular items, offers, testimonials |
| Menu | `menu.html` | All items with category filter + search |
| Product Detail | `product.html` | Full detail page with tabs, nutrition, related items |
| Cart | `cart.html` | Cart with coupons, delivery options, GST |
| Checkout | `checkout.html` | Address form, payment methods, order summary |
| Order Success | `order-success.html` | Confirmation with order ID and ETA |
| Order Tracking | `tracking.html` | Live progress steps, rider info, ETA countdown |
| About | `about.html` | Story, team, values |
| Contact | `contact.html` | Form, map, FAQ |

---

## Features

- **Light white + orange theme** — CSS custom properties throughout
- **20+ Indian food items** — Samosa, Paneer Tikka, Masala Dosa, Dal Makhani, Gulab Jamun, Mango Lassi, and more
- **6 categories** — Starters, Main Course, Dosa & South Indian, Sweets & Desserts, Beverages, Chaat & Street Food
- **Prices in INR (₹)** — realistic Indian restaurant pricing
- **Cart with localStorage** — persists across pages
- **Coupon codes** — DADDY10, FIRST20, TASTE15
- **Free delivery** on orders ≥ ₹499
- **GST 5%** auto-calculated
- **SVG icons only** — no emoji, no icon library CDN
- **Fully mobile responsive** — breakpoints at 1024px, 768px, 480px

---

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- CSS Grid + Flexbox layout
- Intersection Observer API (scroll animations)
- localStorage for cart state
- Unsplash images for food photography

---

## Folder Structure

```
food/
├── index.html
├── menu.html
├── product.html
├── cart.html
├── checkout.html
├── order-success.html
├── tracking.html
├── about.html
├── contact.html
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        ├── products.js   ← all product data
        └── main.js       ← cart logic, toast, animations
```

---

## Coupon Codes

| Code | Discount |
|------|----------|
| `DADDY10` | 10% off |
| `FIRST20` | 20% off |
| `TASTE15` | 15% off |

---

© 2025 Daddy of Tastes. Mockup only — not a real service.
