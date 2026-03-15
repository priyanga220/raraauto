# RARA Auto – React App

This is the React (Vite) version of the RARA Auto car repair website. It fixes all issues from the static site and keeps the same design and color palette with a more modern, sleek UX.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in `dist/`. Serve with any static host (e.g. `npx serve dist` or Netlify/Vercel).

## Assets (images)

- **Development:** Place images in `public/imgs/` so they are served at `/imgs/`.
- **Copy from legacy site:** Copy the contents of the existing `imgs/` folder (banners, logo, gallery, etc.) into `public/imgs/`.
- **Gallery:** Edit `src/data/galleryImages.js` and add paths like `'/imgs/gallery/your-image.jpg'` for each image in `public/imgs/gallery/`.
- **Logo:** Expects `public/imgs/raraautologo.png`.
- **Page headers / fact / booking / footer backgrounds:** Optional `public/imgs/carousel-bg-1.jpg` and `public/imgs/carousel-bg-2.jpg`. If missing, those sections use a solid dark background.

## Forms (contact & booking)

By default, form submit shows a “Thank you” message without sending data. To send submissions to a backend:

1. Open `src/data/siteConfig.js`.
2. Set `contactFormEndpoint` and/or `bookingFormEndpoint` to your API or form service URL (e.g. Formspree: `https://formspree.io/f/your-id`).
3. Your endpoint should accept POST with JSON body (contact: `name`, `email`, `subject`, `message`; booking: `name`, `email`, `division`, `date`, `description`).

## Tech stack

- React 18, Vite, React Router v6, react-bootstrap (Bootstrap 5), react-datepicker, Font Awesome (CDN in `index.html`).

## Routes

| Path       | Page     |
|-----------|----------|
| `/`       | Home     |
| `/about`  | About    |
| `/services` | Services |
| `/booking`  | Booking  |
| `/contact`  | Contact  |
| `/gallery`  | Gallery  |
| `/readmore` | Read More |
| `*`       | 404      |

## Legacy static site

The original HTML/CSS/JS files (e.g. `index.html` was replaced by the Vite entry; other files like `about.html`, `menubar.html`, `css/style.css`) remain in the repo for reference. To run the old site you would need to restore `index.html` from git history and serve the project with a static server.
