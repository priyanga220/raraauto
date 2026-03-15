# Responsive & Mobile-Friendly Plan

## Goal
Deliver an **adaptive responsive site** so that when a user loads the site, they get the best experience for their device (desktop, tablet, or mobile) without separate code paths—one codebase, CSS-driven responsiveness.

## Approach

1. **Single codebase, CSS-first**  
   Use Bootstrap’s grid and breakpoints plus custom CSS. No device detection for layout; media queries handle all adaptation.

2. **Breakpoints (Bootstrap 5)**  
   - `xs`: default (< 576px) – phones  
   - `sm`: 576px+  
   - `md`: 768px+  
   - `lg`: 992px+ – desktop nav, topbar visible  
   - `xl`: 1200px+  
   - `xxl`: 1400px+

3. **Images**  
   - All content images: `max-width: 100%`, `height: auto` or fixed height with `object-fit: cover`/`contain` so they scale and don’t overflow.  
   - Hero & page header: already use CSS vars for height and `object-fit: cover`.  
   - Gallery: responsive heights per breakpoint so thumbnails don’t dominate on small screens.  
   - No `srcset`/`picture` in this phase (can be added later for performance).

4. **Typography**  
   - Page title (PageHeader): smaller on mobile (e.g. `display-5` or custom size) so it doesn’t wrap awkwardly.  
   - Section headings: slightly smaller on small screens.  
   - Body text: already readable; avoid tiny font sizes (min ~16px for body).

5. **Touch & tap targets**  
   - Buttons and key links: at least 44px height/width on touch devices (we use Bootstrap + minor overrides).  
   - Carousel controls and indicators: large enough to tap.  
   - Footer and nav links: adequate padding.

6. **Spacing**  
   - Reduce section padding (e.g. `py-5` → `py-4` or `py-3`) on mobile where it improves density.  
   - Container padding: Bootstrap’s `Container` and `px-4 px-lg-5` already help.

7. **Components audited**
   - **HeroCarousel**: Height via CSS vars; mobile height already set.  
   - **PageHeader**: Background `cover`; add responsive title class.  
   - **Navbar**: Collapse at `lg`; logo + text; “Get A Quote” hidden on mobile (optional: show in collapse).  
   - **Topbar**: Hidden on mobile (`d-none d-lg-flex`).  
   - **Footer**: Cols stack (md/lg); reduce padding and font size on small screens.  
   - **GalleryGrid**: Responsive column counts (xs 2, md 3, lg 4); image height responsive.  
   - **AboutSection**: Image column min-height 400px → override on mobile so it doesn’t force tall layout.  
   - **ServicesSection / ServicesTabs**: Min-heights reduced on mobile; tabs stack.  
   - **OurWorkCarousel**: Card full width on mobile; avatar size ok.  
   - **ContactMap**: Responsive wrapper (aspect-ratio or min-height) so iframe scales.  
   - **BookingCTA**: Stack columns on mobile; form remains usable.  
   - **Back to top**: Position for thumb reach; size remains tappable.

8. **HTML head (index.html)**  
   - Viewport already present.  
   - Add `theme-color` for mobile browser chrome.  
   - Optional: ensure no horizontal overflow (e.g. `overflow-x: hidden` on body if needed).

## Implementation summary

- **index.css**: Responsive variables, page header title, gallery image heights, footer/copyright, back-to-top, carousel controls, section padding, min-height overrides for About/Services/Contact map.  
- **index.html**: `theme-color` meta.  
- **PageHeader.jsx**: Add class for title to allow responsive font size.  
- **GalleryGrid.jsx**: Use consistent class for gallery images (e.g. `gallery-grid-img`).  
- **AboutSection.jsx**: Replace inline minHeight with class or CSS variable.  
- **ServicesTabs.jsx**: Replace inline minHeight with class for tab image column.  
- **ContactMap.jsx**: Wrap iframe in responsive container.  
- **OurWorkCarousel.jsx**: Ensure card is full width on small screens (Bootstrap Col already does this; card `maxWidth` overridden in CSS on mobile if needed).

Result: one codebase that adapts to screen size so the site loads as a desktop-friendly version on large screens and a mobile-friendly version on small screens, with images and layout staying intact and appealing.
