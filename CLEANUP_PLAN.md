# Cleanup Plan: Legacy Files to Remove

After migrating to the React (Vite) app, these files and folders are **no longer used**. The React app uses only: `index.html`, `src/`, `public/`, `vite.config.js`, `package.json`, and assets under `public/imgs/`.

---

## Summary

| Category | Action | Item count |
|----------|--------|------------|
| Legacy HTML pages & includes | **DELETE** | 14 files |
| Legacy JavaScript | **DELETE** | 3 files + entire `js/` folder |
| Legacy CSS | **DELETE** | 3 files + entire `css/` folder |
| Legacy libraries (jQuery, Owl, etc.) | **DELETE** | Entire `lib/` folder |
| Legacy SCSS (Bootstrap source) | **DELETE** | Entire `scss/` folder |
| Legacy `img/` assets | **DELETE** after copy | 1 folder (see note) |
| Build output | **Optional** | Add `dist/` to `.gitignore` if desired |
| **KEEP** | — | `imgs/` (see Assets note below) |

---

## 1. Legacy HTML – DELETE (14 files)

Used only by the old static site (with `data-include` and `fetch`). The React app has its own pages and layout.

| File | Purpose (legacy) |
|------|-------------------|
| `about.html` | About page |
| `aboutinclude.html` | About section fragment |
| `booking.html` | Booking page |
| `bookinginclude.html` | Booking section fragment |
| `contact.html` | Contact page |
| `divisionsinclude.html` | Divisions section fragment |
| `footer.html` | Footer fragment |
| `gallery.html` | Gallery page |
| `menubar.html` | Navbar fragment |
| `readmore.html` | Read More page |
| `services.html` | Services page |
| `servicesinclude.html` | Services tabs fragment |
| `topbar.html` | Topbar fragment |
| `404.html` | 404 page |

**Keep:** `index.html` — this is the **Vite entry** for the React app (do not delete).

---

## 2. Legacy JavaScript – DELETE (entire `js/` folder)

The old site used jQuery, `includeHTML()`, Owl Carousel, date picker, etc. The React app uses no jQuery and has its own components.

| File | Purpose (legacy) |
|------|-------------------|
| `js/common.js` | includeHTML(), setActiveMenu(), gallery AJAX, viewImage() |
| `js/main.js` | Spinner, WOW.js, sticky nav, counter, date picker, Owl carousel |
| `js/jquery.popup.lightbox.min.js` | Lightbox plugin |

After deleting these three files, the `js/` folder will be empty → **delete the `js/` folder** as well.

---

## 3. Legacy CSS – DELETE (entire `css/` folder)

The React app uses `src/index.css` and Bootstrap from npm. The old template CSS is no longer loaded.

| File | Purpose (legacy) |
|------|-------------------|
| `css/style.css` | Template styles (navbar, carousel, footer, etc.) – replaced by `src/index.css` |
| `css/bootstrap.min.css` | Old Bootstrap build – replaced by `node_modules/bootstrap` |
| `css/popup-lightbox.min.css` | Lightbox – React has its own lightbox styles in `src/index.css` |

After deleting these three files → **delete the `css/` folder** as well.

---

## 4. Legacy libraries – DELETE (entire `lib/` folder)

All of these were used by the old HTML/JS stack. The React app uses npm packages and React components instead.

| Contents | Purpose (legacy) |
|----------|-------------------|
| `lib/animate/` | animate.min.css – CSS animations |
| `lib/counterup/` | counterup.min.js – number count-up |
| `lib/easing/` | easing.js / easing.min.js – jQuery easing |
| `lib/owlcarousel/` | Owl Carousel (JS + CSS + assets) |
| `lib/tempusdominus/` | Date/time picker (moment + tempusdominus) |
| `lib/waypoints/` | waypoints.min.js – scroll triggers |
| `lib/wow/` | wow.js / wow.min.js – scroll animations |

**Action:** Delete the entire **`lib/`** folder.

---

## 5. Legacy SCSS – DELETE (entire `scss/` folder)

Used to build the old custom Bootstrap CSS. The React app uses Bootstrap from npm and overrides in `src/index.css`.

| Contents | Purpose (legacy) |
|----------|-------------------|
| `scss/bootstrap.scss` | Bootstrap entry |
| `scss/bootstrap/scss/` | Full Bootstrap SCSS source |

**Action:** Delete the entire **`scss/`** folder.

---

## 6. Legacy `img/` folder – DELETE after optional copy

The **React app uses only `/imgs/`** (i.e. files under `public/imgs/`). It does not reference the old `img/` folder.

| In `img/` | Used by React? |
|-----------|-----------------|
| `favicon-16x16.png` | Yes – referenced in `index.html` as `/imgs/favicon-16x16.png` |
| `testimonial-1.jpg` … `testimonial-4.jpg` | No |
| `service-1.jpg` … `service-4.jpg` | No (React uses images from `imgs/`) |
| `carousel-bg-1.jpg` / `carousel-bg-2.jpg` | No (React expects them in `imgs/`) |

**Recommendation:**

1. **Copy** `img/favicon-16x16.png` → `public/imgs/favicon-16x16.png` (if not already there), so the React app has a favicon.
2. Optionally copy `img/carousel-bg-1.jpg` and `img/carousel-bg-2.jpg` to `public/imgs/` if you want the same header/background images (React CSS points to `/imgs/carousel-bg-1.jpg` and `/imgs/carousel-bg-2.jpg`).
3. **Then delete** the entire **`img/`** folder (or keep it only if you want a backup of testimonial/service images).

---

## 7. Assets to KEEP (do not delete)

| Item | Reason |
|------|--------|
| **`imgs/`** (at project root) | Contains current site images: banners, logo, gallery, service photos. The React app expects these at **`/imgs/`** when served. Either: (a) **copy** `imgs/*` into `public/imgs/` and then you can remove the root `imgs/` folder, or (b) **keep** root `imgs/` and configure the dev server to serve it (e.g. alias or copy script). Easiest: **copy contents of `imgs/` into `public/imgs/`** so `npm run dev` and `npm run build` both use `public/imgs/`. Then you can delete the root **`imgs/`** folder if you want a single source of truth. |
| **`public/imgs/`** | Must exist; React and Vite serve from here. Should contain all site images (copy from root `imgs/` and from `img/` as above). |
| **`index.html`** | Vite entry – required. |
| **`src/`** | React app – required. |
| **`public/`** | Vite public assets – required. |
| **`package.json`**, **`package-lock.json`**, **`vite.config.js`** | Project config – required. |
| **`.vscode/`** | Editor settings – optional but harmless. |
| **`README-REACT.md`**, **`REACT_MIGRATION_PLAN.md`**, **`UI_ANALYSIS_REPORT.md`** | Docs – optional but useful. |

---

## 8. Optional

- **`dist/`** – Build output. Add to `.gitignore` if you don’t want to commit it.
- **`.DS_Store`** – macOS metadata. Can add to `.gitignore` and delete any present.

---

## Execution order (recommended)

1. **Copy assets (so React app has everything):**
   - Copy `imgs/*` → `public/imgs/`
   - Copy `img/favicon-16x16.png` → `public/imgs/`
   - Optionally copy `img/carousel-bg-1.jpg`, `img/carousel-bg-2.jpg` → `public/imgs/`

2. **Delete legacy HTML** (14 files listed in §1).

3. **Delete legacy JS** (all files in `js/`, then remove empty `js/`).

4. **Delete legacy CSS** (all files in `css/`, then remove empty `css/`).

5. **Delete `lib/`** (entire folder).

6. **Delete `scss/`** (entire folder).

7. **Delete `img/`** (entire folder, after copy in step 1).

8. **Optionally delete root `imgs/`** if you copied its contents to `public/imgs/` and want a single source of truth.

9. **(Optional)** Add `dist/` and `.DS_Store` to `.gitignore`.

---

## After cleanup – what remains

- **React app:** `index.html`, `src/`, `public/`, `vite.config.js`, `package.json`, `package-lock.json`
- **Docs:** `README-REACT.md`, `REACT_MIGRATION_PLAN.md`, `UI_ANALYSIS_REPORT.md`, `CLEANUP_PLAN.md` (this file)
- **Editor:** `.vscode/` (optional)
- **Assets:** under `public/imgs/` (and optionally no root `imgs/` or `img/`)

---

## Execution log

**Completed:** Legacy cleanup executed.

- Copied `imgs/*` → `public/imgs/` (banners, logo, gallery, service images).
- Copied `img/favicon-16x16.png` → `public/imgs/`.
- Deleted 14 legacy HTML files.
- Deleted `js/` (common.js, main.js, jquery.popup.lightbox.min.js).
- Deleted `css/` (style.css, bootstrap.min.css, popup-lightbox.min.css).
- Deleted `lib/`, `scss/`, `img/`, and root `imgs/` folders.
- Updated `src/data/galleryImages.js` with all four gallery image paths.
- Added `.gitignore` (node_modules, dist, .DS_Store, etc.).

Assets now live in `public/imgs/` only. React app runs from `index.html` + `src/` + `public/`.
