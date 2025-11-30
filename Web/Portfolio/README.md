# Jefferson Nii Addo Quaye — Web Developer Portfolio

A modern, responsive, and accessible portfolio website built with HTML, CSS, and vanilla JavaScript.

## 🎯 Features

✅ **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
✅ **Dark Mode Toggle** — Click the 🌙 icon in the footer to switch themes (saved to localStorage)
✅ **Smooth Animations** — Fade-in effects, hover animations, and transitions
✅ **Accessibility First** — WCAG 2.1 AA compliant with keyboard navigation, ARIA labels, skip links
✅ **SEO Optimized** — Meta tags, Open Graph, semantic HTML, proper heading hierarchy
✅ **Contact Form** — mailto: fallback integration (ready for EmailJS/Formspree upgrade)
✅ **Mobile-Friendly Nav** — Hamburger menu for screens ≤ 640px
✅ **No Dependencies** — Pure HTML, CSS, JavaScript (fast & lightweight)

---

## 📂 Project Structure

```
Portfolio/
├── index.html          # Main HTML file (semantic structure, accessibility)
├── style.css           # Responsive styles, dark mode, animations
├── script.js           # Dark mode toggle, nav, smooth scroll, form handling
└── README.md           # This file
```

---

## 🚀 Quick Start

### Local Preview
```bash
# Navigate to the project folder
cd "C:\Users\Gol.D.Jeff\Documents\My Coding Practice\Web\Portfolio"

# Option 1: Use any HTTP server (if available)
python -m http.server 8000          # Python 3
npx http-server                      # Node.js

# Option 2: Open directly in browser
# Double-click index.html or drag it into your browser
```

Then open: `http://localhost:8000` (or your browser's file URL)

---

## 🎨 Customization Guide

### 1. **Update Hero Section**
Edit `index.html` lines 44–52:
```html
<h1 class="heading-xl">Hi, I'm Jefferson — a Web Developer.</h1>
<p class="lead">Your bio here...</p>
```

### 2. **Update About Section**
Edit `index.html` lines 58–75:
```html
<p>Hello — I'm a front-end developer...</p>
<li>Your Skills Here</li>
```

### 3. **Add Your Projects**
Edit `index.html` lines 85–120 to replace placeholders:
```html
<article class="project-card">
  <img src="your-project-image.jpg" alt="Project title">
  <div class="project-card-body">
    <h3>Your Project Title</h3>
    <p>Description</p>
    <p class="card-actions">
      <a class="btn small" href="https://live-demo.com">Live</a>
      <a class="btn ghost small" href="https://github.com/your-repo">Source</a>
    </p>
  </div>
</article>
```

### 4. **Update Contact Email**
Edit `script.js` line 70:
```javascript
const mailto = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
```

### 5. **Add Social Links**
Edit `index.html` line 149:
```html
<a href="https://github.com/your-username" aria-label="GitHub profile">GitHub</a>
<a href="https://linkedin.com/in/your-profile" aria-label="LinkedIn profile">LinkedIn</a>
```

### 6. **Change Colors**
Edit `style.css` lines 1–20 (CSS variables):
```css
:root {
  --bg: #f7f9fc;                    /* Light background */
  --card: #ffffff;                  /* Card background */
  --text: #0f1724;                  /* Text color */
  --muted: #6b7280;                 /* Muted text */
  --accent: #ff6b6b;                /* Accent color (unused) */
  --accent-2: #0f4c81;              /* Primary button/link color */
}
```

---

## 🌙 Dark Mode

Dark mode is built-in and automatically switches based on system preference. Users can override by clicking the 🌙 button in the footer. Preference is saved to `localStorage`.

**CSS Variables Switch:**
- Light: `:root` variables apply
- Dark: `[data-theme="dark"]` or `@media (prefers-color-scheme: dark)` override

---

## ♿ Accessibility Features

- ✅ **Skip to Main Content** link (visible on Tab focus)
- ✅ **Semantic HTML** — `<header>`, `<main>`, `<section>`, `<footer>`
- ✅ **ARIA Labels** — `role`, `aria-label`, `aria-expanded`, `aria-live`
- ✅ **Keyboard Navigation** — Full keyboard support (Tab, Enter, Space)
- ✅ **Color Contrast** — WCAG AA compliant
- ✅ **Focus Indicators** — Visible on all interactive elements
- ✅ **Alt Text** — All images have descriptive alt attributes
- ✅ **Responsive Images** — Adapts to different screen sizes

---

## 🚀 Deployment

### GitHub Pages (Automatic)
1. Enable GitHub Pages in repo settings (Settings → Pages)
2. Choose branch: **main**
3. Site deploys automatically on every push
4. Live at: `https://Gol-DJeff.github.io/My-Coding-Practice/Web/Portfolio`

See `DEPLOYMENT.md` for detailed instructions.

---

## 📧 Contact Form Integration

Currently uses `mailto:` fallback. To upgrade:

### Option A: EmailJS (Recommended)
```javascript
// Add EmailJS CDN to index.html <head>
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>

// Update script.js with EmailJS config
emailjs.init("YOUR_PUBLIC_KEY");
// Replace mailto logic with emailjs.send()
```

### Option B: Formspree
```html
<!-- Update form action in index.html -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 📱 Responsive Breakpoints

```css
Desktop:  ≥ 1024px  (3-column project grid)
Tablet:   640–1024px (2-column project grid)
Mobile:   < 640px   (1-column, hamburger nav)
```

---

## 🎬 Animations

- **Fade-in** — Hero & projects sections load with smooth fade
- **Slide-in** — Profile image slides in from left
- **Hover Effects** — Project cards lift on hover
- **Button Interactions** — Smooth color & scale transitions
- **Theme Toggle** — Instant dark mode with smooth color transitions

All animations respect `prefers-reduced-motion` preference.

---

## 🔍 SEO

- ✅ Meta description updated
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Mobile-friendly viewport
- ✅ Fast load time (no external dependencies)

---

## 🛠 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

---

## 📝 License

Free to use and modify for your personal portfolio.

---

## 💡 Next Steps

1. ✏️ **Customize Content** — Update bio, projects, skills, email
2. 🖼️ **Add Images** — Replace placeholder images with real project screenshots & profile photo
3. 📄 **Add Resume** — Link to PDF resume download
4. 📧 **Upgrade Contact Form** — Integrate EmailJS or Formspree
5. 🚀 **Deploy** — Push to GitHub and enable Pages
6. 📊 **Analytics** — Optional: Add Google Analytics or Plausible

---

## ❓ Questions or Issues?

Review the code comments in `index.html`, `style.css`, and `script.js` for inline guidance.

---

**Happy coding!** 🚀
