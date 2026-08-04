# PKM — پوشش کیان ماکان

Modern, responsive, RTL (Persian) corporate website for **PKM (پوشش کیان ماکان)** — a plastic parts painting & industrial surface coating company. Pure HTML5 / CSS3 / vanilla JavaScript, no frameworks, no backend.

## Structure

```
/
├── index.html          Home
├── about.html           About Us (history, mission, vision, values, team, factory)
├── services.html        Services (8 detailed service cards)
├── gallery.html         Masonry gallery with category filters
├── process.html         8-step production workflow
├── quality.html         ISO standards, QC, testing, FAQ
├── contact.html         Contact form, map placeholder, info
└── assets/
    ├── css/style.css    Full design system + responsive styles
    ├── js/main.js       Loader, nav, reveal animations, counters, accordion, gallery filter, form
    ├── images/          Local image assets (replace placeholders here)
    └── icons/           Local icon assets
```

## Deploying to GitHub Pages

1. Push this folder's contents to the root of a GitHub repository (or a `docs/` folder).
2. In the repository, go to **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, select the branch (e.g. `main`) and folder (`/root` or `/docs`).
4. Save — your site will be live at `https://<username>.github.io/<repo>/` within a few minutes.

No build step is required — the site is static HTML/CSS/JS.

## Replacing placeholders

- **Logo**: the `.logo-mark` element in every page header is a CSS/SVG placeholder built from the letters "PKM". Replace it with `<img src="assets/images/logo.svg" alt="PKM">` once you have the real logo.
- **Images**: all photos currently reference Unsplash placeholder URLs (industrial/painting/automotive themed). Replace `src` attributes with local files in `assets/images/` for production and offline reliability.
- **Google Map**: `contact.html` has a `.map-frame` placeholder — replace the inner `.map-fallback` div with a real `<iframe>` embed from Google Maps.
- **Contact form**: `contact.html`'s form is client-side only (no backend). Connect it to a form service (Formspree, Getform, EmailJS, etc.) or your own backend endpoint to receive real submissions.
- **Company details**: phone, email, and address appear in every page footer and on the contact page — update them once real values are available.

## Notes

- Fonts: Vazirmatn (Persian display/body) and JetBrains Mono (data/stats) loaded from Google Fonts.
- Fully responsive: desktop, tablet, and mobile breakpoints included.
- Respects `prefers-reduced-motion` and includes visible keyboard focus states.
- All images use `loading="lazy"`.
