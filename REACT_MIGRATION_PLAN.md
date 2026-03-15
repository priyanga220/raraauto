# RA RA Auto → React Migration & Enhancement Plan

**Goal:** Convert the static HTML car repair site to a React app, fix all identified issues, keep the original design language and color palette, and enhance for a more modern, sleek look and better UX.

---

## 1. Preserved Design & Palette

**Color palette (unchanged):**
- **Primary:** `#D81324` (brand red)
- **Secondary:** `#0B2154` (dark blue)
- **Light:** `#F2F2F2`
- **Dark:** `#111111`

**Preserved:**
- Fonts: Barlow (headings), Ubuntu (body) — already in use
- Layout: topbar → navbar → content → footer
- Sections: divisions, about, services, booking CTA, testimonials/“Our Work”, footer columns
- Component behaviour: sticky nav, dropdown on hover (desktop), back-to-top, carousel, service tabs, fact counters, testimonial/owl-style carousel
- Logo: `imgs/raraautologo.png` (navbar brand)
- All copy and structure from current HTML (about, services, divisions, contact info, footer links)

**Enhancements (modern & sleek, same palette):**
- Subtle shadows and rounded corners for cards/buttons (e.g. `border-radius: 8px`, soft box-shadows)
- Smoother transitions (0.3s ease) on hover/focus
- Consistent spacing scale (e.g. 4/8/16/24/32/48px)
- Refined typography: slightly improved line-height and letter-spacing where it helps readability
- Page headers: same overlay style but with a light gradient for depth
- Forms: clear focus states, optional floating labels, consistent heights
- Gallery: grid with hover zoom and a proper lightbox (no Bootstrap 4/5 modal mismatch)
- No “flash of empty content” — layout is in React from first paint

---

## 2. Tech Stack

| Area | Choice | Reason |
|------|--------|--------|
| Framework | **React 18** | Current standard, good ecosystem |
| Build | **Vite** | Fast dev, simple config, good for static→React |
| Routing | **React Router v6** | SPA with routes for Home, About, Services, Booking, Contact, Gallery, Read More, 404 |
| Styling | **CSS (no preprocessor)** | Keep existing `style.css` logic; one `App.css` + optional component CSS. Reuse your CSS variables and classes. |
| UI / components | **Bootstrap 5 (react-bootstrap)** | Keeps grid, navbar, carousel, tabs, modal, dropdown. Single Bootstrap version, no jQuery. |
| Carousel | **react-bootstrap Carousel** | Replaces Owl/jQuery carousel for hero and “Our Work”. |
| Date picker | **react-datepicker** or **input type="date"** | No Tempus Dominus/jQuery; works with React and Bootstrap 5. |
| Forms | Controlled components + **optional**: Formspree or Netlify Forms | Fix “no action” by wiring submit to a service or `fetch`. |
| Icons | **Font Awesome** (same as now) | Keep `fa`, `fab` classes. |
| Animations | **CSS transitions + optional AOS or Framer Motion** | Replace WOW.js with simple scroll/enter animations if desired. |

---

## 3. Project Structure (New React App)

```
rr_ws/
  public/
    favicon.ico
    imgs/                    # Copy from current (banner*, logo, gallery, etc.)
      raraautologo.png
      banner10.png, banner11.png, img10.jpeg, img3.jpeg
      gallery/               # All gallery images (fixed list in code)
      truckrepair1.jpeg, truckrepair2.jpeg, carrepair1.jpeg
      (and any img/ assets you standardise into imgs/)
  src/
    index.css                # Global: CSS vars, reset, Bootstrap override (primary/secondary)
    App.jsx                  # Router, layout (Topbar, Navbar, Footer, BackToTop)
    main.jsx
    components/
      layout/
        Topbar.jsx
        Navbar.jsx
        Footer.jsx
        BackToTop.jsx
        PageHeader.jsx       # Breadcrumb + title (About, Services, etc.)
      home/
        HeroCarousel.jsx     # Single carousel, responsive images via CSS
        Divisions.jsx
        AboutSection.jsx
        ServicesSection.jsx
        BookingCTA.jsx       # “Book For A Service” block
        OurWorkCarousel.jsx  # “Jobs we delivered!”
      services/
        ServicesTabs.jsx    # Pills + tab content (same content as now)
      booking/
        BookingForm.jsx     # Form with date picker, division select, submit
        CallToAction.jsx    # “Have Any Pre Booking Question?”
      contact/
        ContactInfo.jsx     # Email, WhatsApp, Facebook
        ContactForm.jsx     # Name, email, subject, message + submit
        ContactMap.jsx      # Same iframe embed
      gallery/
        GalleryGrid.jsx     # Grid of images from a fixed list
        Lightbox.jsx        # Open image in overlay (no Bootstrap modal)
      shared/
        Spinner.jsx         # Optional; hide once app mounted
    pages/
      HomePage.jsx
      AboutPage.jsx
      ServicesPage.jsx
      BookingPage.jsx
      ContactPage.jsx
      GalleryPage.jsx
      ReadMorePage.jsx      # Replace “TO - DO” with real content or “Coming soon”
      NotFoundPage.jsx      # 404
    data/
      galleryImages.js      # Array of image paths (e.g. ['imgs/gallery/01.jpeg', ...])
      siteConfig.js         # Phone, email, WhatsApp, Facebook, address
    hooks/
      useScrollPosition.js  # Back-to-top, sticky nav
    utils/
      (form submit helpers if needed)
  package.json
  vite.config.js
```

Existing `css/style.css` will be migrated into `src/index.css` (and optionally `App.css`): variables, navbar, carousel, service tabs, booking/footer backgrounds, testimonial/carousel dots, gallery modal styles. Bootstrap theme colours will be overridden to use `--primary` and `--secondary` so the palette stays the same.

---

## 4. Issue-by-Issue Fixes in React

| # | Issue | How it’s fixed in React |
|---|--------|---------------------------|
| 1 | Async includes → empty nav/topbar/footer | All layout is React components; no `fetch` for HTML. No flash. |
| 2 | Gallery images + lightbox | Gallery uses a **fixed list** in `data/galleryImages.js` (or import from `public/imgs/gallery`). Lightbox is a simple React component (overlay + image + close), no Bootstrap modal. |
| 3 | Contact form does nothing | Form is controlled; onSubmit either posts to Formspree/Netlify or a backend URL (configurable). |
| 4 | Booking form does nothing | Same: controlled form + submit to Formspree/Netlify or API. |
| 5 | Date picker (Tempus Dominus) | Replaced with `react-datepicker` or native `type="date"`; no jQuery. |
| 6 | Duplicate jQuery/Bootstrap | No jQuery. Single Bootstrap 5 via `react-bootstrap`. |
| 7 | Duplicate carousel IDs | One `<HeroCarousel>` with responsive images (e.g. different `src` by media or single set). No duplicate IDs. |
| 8 | “Get A Quote” empty href | Navbar “Get A Quote” links to `/booking` (React Router `<Link>`). |
| 9 | Breadcrumbs `#` | “Home” → `/`, “Pages” → removed or → `/services`; current page text only. |
| 10 | Home active state at `/` | React Router `NavLink` with `end` for Home; active class applied by route. |
| 11 | 404 navbar in `<div>` | Same `<Navbar>` component as other pages; 404 is just another route. |
| 12 | img/ vs imgs/ | Single folder: `public/imgs/`. All references use `/imgs/...` (or process.env for build). |
| 13 | Logo missing src | Navbar uses `<img src="/imgs/raraautologo.png" alt="RARA Auto" />`. |
| 14 | Placeholder testimonials | “Our Work” keeps same structure; copy can stay or be replaced later. Images from `imgs/` or placeholders. |
| 15 | Read More stub | ReadMore page: either “More details” content (from commented block) or a short “Coming soon” + link to About/Services. |
| 16 | Footer `<t/>` | React: use `<br />` or `<ul>` list. |
| 17 | Broken HTML comments | Not applicable (JSX). |
| 18–22 | Spinner, phone, meta, etc. | Spinner optional; phone/WhatsApp from `siteConfig`; meta via React Helmet or similar. |

---

## 5. Routing Map

| Route | Page | Content |
|-------|------|--------|
| `/` | HomePage | Hero carousel, Divisions, About, Services, Booking CTA, Our Work carousel |
| `/about` | AboutPage | PageHeader “About Us”, Divisions, About section, Footer |
| `/services` | ServicesPage | PageHeader “Services”, Services tabs, Our Work carousel, Footer |
| `/booking` | BookingPage | PageHeader “Booking”, Divisions, Booking form, CallToAction, Footer |
| `/contact` | ContactPage | PageHeader “Contact”, Contact info, Map, Contact form, Footer |
| `/gallery` | GalleryPage | PageHeader “Gallery”, Gallery grid + lightbox, Footer |
| `/readmore` | ReadMorePage | PageHeader “More Info”, Content or “Coming soon”, Footer |
| `*` | NotFoundPage | 404 message, link to Home |

---

## 6. Data & Config

- **siteConfig.js:** `address`, `phone`, `whatsappNumber`, `whatsappMessage`, `email`, `facebookUrl`, `openingHours`, `companyName`.
- **galleryImages.js:** List of paths, e.g. `['/imgs/gallery/011b06e6-dbce-47ae-9a42-eb6cb0c9434b.jpeg', ...]`. You can add more filenames as you add images to `public/imgs/gallery/`.

---

## 7. Modern UX Enhancements (Same Palette)

- **Navigation:** Sticky navbar with subtle shadow on scroll; active route clearly highlighted; mobile menu smooth open/close.
- **Buttons:** Slightly larger tap targets; clear hover/focus states (e.g. primary red with a bit darker on hover).
- **Cards / sections:** Soft shadow, 8px radius; sections have consistent vertical rhythm.
- **Forms:** Labels and placeholders aligned with current design; focus ring in primary colour; optional “Sending…” state on submit.
- **Gallery:** Uniform grid (e.g. 3 cols desktop, 2 tablet, 1 mobile); hover slight zoom; lightbox with close button and optional prev/next.
- **Carousels:** Same content; smoother transition; optional autoplay with pause on hover.
- **Footer:** Same columns and links; fix “Delivery from Japan” list (br or list); social icons with hover state.
- **Loading:** No full-page spinner unless you want it; optional small loader only for form submit.

---

## 8. Implementation Order

1. **Scaffold:** Vite + React, React Router, react-bootstrap, add `index.css` with your CSS variables and Bootstrap overrides.
2. **Layout:** Topbar, Navbar, Footer, BackToTop, PageHeader; wire Router and routes (placeholder pages).
3. **Home:** HeroCarousel (single), Divisions, AboutSection, ServicesSection, BookingCTA, OurWorkCarousel.
4. **About:** Reuse Divisions + AboutSection.
5. **Services:** ServicesTabs (same content as current tabs).
6. **Booking:** BookingForm (with date picker), CallToAction.
7. **Contact:** ContactInfo, ContactMap, ContactForm (with submit handler).
8. **Gallery:** GalleryGrid from list + Lightbox.
9. **Read More & 404:** Content and copy.
10. **Polish:** Responsive images (e.g. `picture` or same image for all), meta tags, favicon, form success/error messages.
11. **Copy assets:** Ensure `public/imgs/` has all images (logo, banners, gallery, services, etc.).

---

## 9. What Stays in the Old Repo

- Current HTML/CSS/JS can stay in a subfolder (e.g. `legacy/` or `old-site/`) or a separate branch for reference. The React app will be the main entry (e.g. `index.html` at root built by Vite).

---

## 10. Deliverables

- Single React app (Vite) that builds to `dist/`.
- All existing pages as routes; no duplicate scripts, no broken forms, no broken gallery or lightbox.
- Same color theme and overall design, with the enhancements above for a more modern, sleek look and better UX.
- README with: `npm install`, `npm run dev`, `npm run build`, and how to set form endpoints (Formspree/Netlify) if used.

If you confirm this plan, next step is **execute**: create the Vite React app in the repo and implement the structure and pages as above, then wire forms and gallery to the fixed data/config..
