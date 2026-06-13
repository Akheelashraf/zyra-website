# Zyra Builds — Final A-to-Z Website Summary

**Document version:** Final  
**Last updated:** Post premium branding and hero refinement pass

---

## Part 1 — Summary of Final Premium Refinement Pass

The following refinements are **already implemented** in the codebase from the previous pass. No further structural or design changes were made in this step.

### What was changed (refinement pass)

1. **Header alignment** — The header uses a single `MaxWidthWrapper` wrapping the main row (logo, nav, CTA) and the divider line. Logo and hero text share the same grid; nav aligns with the rest of the site. No content sits outside the wrapper on large screens.

2. **Logo presence** — Header logo: 48px on small screens, **56px from `md` up** (`h-12 md:h-14`). Footer logo: 56px on small screens, **64px from `md` up** (`h-14 md:h-16`). Vertical padding in the header is `py-3 lg:py-3.5`. Logo containers use `shrink-0` so the logo never shrinks.

3. **Logo-based loader** — The progress bar was removed. The loader is logo-only: white screen, Zyra logo fades in and scales up (0.96 → 1), optional subtle Zyra blue glow pulse (when not reduced-motion), then after ~1.15s the loader fades and the logo moves up slightly (`y: -14`) before the site is revealed. Runs **once per session** via `sessionStorage`; respects `prefers-reduced-motion`.

4. **Hero experience** — `HeroCinematicImage` has three layers: (1) background image with scroll-driven scale 1.06→1 and y 0→12px; (2) top gradient light (opacity 0.45→0 with scroll); (3) static foreground light reflection at the bottom. Top edge highlight and inset shadow give a product-stage feel.

5. **Signature hero detail** — A thin Zyra blue accent line at the bottom of the hero frame grows with scroll (`scaleX` 0→0.5→1). Disabled when reduced-motion is preferred.

6. **Responsive refinement** — Hero copy has `min-w-0` and `break-words`; hero image has responsive `sizes` and `object-position` (center 38% / 40%). Logo scales by breakpoint; layout stays centered and premium on ultra-wide.

---

## Part 2 — A-to-Z Final Website Summary

### 1. WEBSITE OVERVIEW

- **Visual direction:** Apple-inspired, cinematic, restrained. White and light grey backgrounds, dark grey (slate) text, restrained Zyra blue (#3F51D9) for accents and CTAs. No dark full-page backgrounds; emphasis on clarity and space.
- **Brand positioning:** Zyra Builds is positioned as a structured commercial interior execution partner for growing businesses in Saudi Arabia (offices, restaurants, retail, clinics, showrooms, exhibition booths), with a typical project range of 30K–200K+ SAR.
- **Design style:** Editorial typography, generous spacing, rounded cards and image frames, subtle shadows and borders. Section reveals on scroll, full-bleed cinematic sections with overlaid type, and a scroll-driven “Structured Process” (IDEA → DESIGN → BUILT SPACE) block on the homepage. High-end architecture studio feel with product-page polish.

---

### 2. ROUTES / PAGES

| Route       | Purpose | Major sections | Special features |
|------------|---------|----------------|-------------------|
| **/**      | Home    | Hero, Services, Cinematic, Structured Process, Process, Projects, Why Zyra, Statement, Final CTA | Hero product-stage (layers, scroll response, blue accent); full-bleed cinematic; sticky scroll process (IDEA/DESIGN/BUILT SPACE); reveal-on-scroll on sections. |
| **/services** | Services offering | Hero, Core Services, Delivery Approach, Cinematic, Scope Examples, Why Clients Choose, Statement, CTA | Inner-page hero; full-bleed cinematic “Execution begins with clarity”; statement; CTA. |
| **/projects**  | Project showcase | Hero, Featured Projects, Project Types, Execution Perspective, Why Work Matters, Cinematic, Statement, CTA | Featured project cards (images + copy); cinematic; statement; CTA. |
| **/about**     | Company story    | Hero, Who Zyra Is, Zyra Approach, Built For, Why Trust Zyra, Cinematic, Statement, CTA | Cinematic “Structure creates confidence”; statement; CTA. |
| **/contact**   | Contact & inquiry | Hero, Contact Options, Map, Inquiry Guidance, Project Fit, Form, Cinematic, Statement, CTA | Email/phone/location; map embed; project fit (30K–200K+ SAR); contact form (UI only); cinematic; CTA. |

All pages use the same shell: `SiteHeader`, `<main>`, `SiteFooter`, with `MaxWidthWrapper` and shared typography/spacing.

---

### 3. HEADER / NAVIGATION

- **Logo asset:** `/branding/zyra%20logo%20blue%2001%20Artboard%201.svg` (Zyra logo blue).
- **Logo sizes:** Header: intrinsic 210×56; displayed at **48px height** on small screens (`h-12`), **56px from `md`** (`md:h-14`). Footer: intrinsic 229×64; displayed at **56px** then **64px** (`h-14 md:h-16`).
- **Nav destinations:** Services (`/services`), Projects (`/projects`), About (`/about`), Contact (`/contact`). Header CTA: “Request Quote” → `/contact`.
- **Mobile menu:** Toggle “Menu” / “Close”; nav links + “Request Quote” in a dropdown; links close the menu on click. Uses same `MaxWidthWrapper` for alignment.
- **Alignment:** Header content (logo, nav, CTA, divider) is inside one `MaxWidthWrapper` with `max-w-7xl` and `px-6 sm:px-7 md:px-8 lg:px-12`, so it aligns with hero and all other sections at every width.

---

### 4. FOOTER

- **Branding:** Same logo as header; tagline: “Structured commercial interior execution for growing businesses in Saudi Arabia.” Location: “Al Khobar / Dammam, Eastern Province, Saudi Arabia.”
- **Contact:** Email `info@zyrabuilds.com`, phone `+966 566 32 5017` (displayed with spaces; `tel:+966566325017`).
- **Links:** Navigate: Services, Projects, About, Contact. All use `Link` to the same routes. Focus-visible rings and hover styles are applied for consistency with the header.

---

### 5. HOMEPAGE

Sections in order:

1. **Hero** — Two-column (copy + visual). Headline “Commercial Interiors. Structured.”; supporting line; CTAs “Request Quote” (→ `/contact`) and “View Projects” (→ `/projects`). Hero image in a rounded product-stage frame with layered depth, scroll-driven scale/y, fading top light, and a thin Zyra blue accent that grows with scroll.
2. **Services** — Intro + four service cards (Commercial Fit-Out, Interior Design Coordination, Renovation & Upgrade, Custom Joinery).
3. **Cinematic** — Full-bleed image with overlaid headline “Structure in every stage.” and supporting text; parallax on scroll.
4. **Structured Process** — Scroll-driven block: intro “Structured delivery, stage by stage.”; central visual stage transitioning IDEA → DESIGN → BUILT SPACE with proxy visuals; phase labels and supporting text that update with scroll. Sticky container, tall scroll height; reduced-motion shows a single combined state.
5. **Process** — Four steps: Discover, Design, Build, Handover.
6. **Projects** — Three project cards (office, restaurant, retail) with images and copy.
7. **Why Zyra** — Value propositions.
8. **Statement** — Large centred line: “Commercial interiors built with clarity.”
9. **Final CTA** — “Next steps” card with “Request Quote” and “View Projects.”

Premium feel: strong logo, branded loader, hero product-stage, scroll-driven process, consistent spacing and typography, no clutter.

---

### 6. SERVICES PAGE

- **Structure:** ServicesPageHero (title + supporting text + Request Quote / View Projects) → CoreServicesSection (four services with bullets) → DeliveryApproachSection → InnerPageCinematicSection (“Execution begins with clarity.”) → ScopeExamplesSection → WhyClientsChooseSection → InnerPageStatementSection (“Built for projects that need more than finishing work.”) → ServicesCTASection.
- **Visual system:** Same as site: MaxWidthWrapper, section spacing, CTA card style, cinematic with gradient overlay and text shadow, statement with leading and tracking.

---

### 7. PROJECTS PAGE

- **Structure:** ProjectsPageHero → FeaturedProjectsSection (three featured projects with large images and copy) → ProjectTypesSection → ExecutionPerspectiveSection → WhyWorkMattersSection → InnerPageCinematicSection (“Execution shapes how the space is experienced.”) → InnerPageStatementSection (“Spaces should support the business behind them.”) → ProjectsCTASection.
- **Visual system:** Featured cards with rounded images and text; cinematic; statement; CTA. Image paths for featured/project cards use `/images/projects/` with proxy fallbacks.

---

### 8. ABOUT PAGE

- **Structure:** AboutPageHero → WhoZyraIsSection → ZyraApproachSection → BuiltForSection → WhyTrustZyraSection → InnerPageCinematicSection (“Structure creates confidence.”) → InnerPageStatementSection (“Trust is built through how the work is managed.”) → AboutCTASection.
- **Visual system:** Same editorial and cinematic system; “What Zyra is built for” and client-type content.

---

### 9. CONTACT PAGE

- **Structure:** ContactPageHero → ContactOptionsSection (email, phone, location) → ContactMapSection (embed) → InquiryGuidanceSection → ProjectFitSection (fit types + “Zyra Builds”, 30K–200K+ SAR) → ContactFormSection (form UI) → InnerPageCinematicSection (“A clear project starts with a clear first conversation.”) → InnerPageStatementSection → ContactCTASection.
- **Visual system:** Contact cards, map, form with placeholders; cinematic and statement. Form is UI-only (no backend submission yet).

---

### 10. IMAGES / ASSETS

- **Logo:** `/branding/zyra%20logo%20blue%2001%20Artboard%201.svg` — header, footer, loader.
- **Homepage:** `/images/home-hero.jpg` (hero), `/images/home-cinematic.jpg` (cinematic). Fallbacks: HeroProxyVisual, CinematicProxyBackground (home).
- **Services:** `/images/services-cinematic.jpg`; proxy variant “services”.
- **Projects:** `/images/projects/project-office.jpg`, `project-restaurant.jpg`, `project-retail.jpg` (cards + featured); `/images/projects-cinematic.jpg`; proxy variants office/restaurant/retail, “projects”.
- **About:** `/images/about-cinematic.jpg`; proxy variant “about”.
- **Contact:** `/images/contact-cinematic.jpg`; proxy variant “contact”.

All image components use `onError` fallbacks to proxy visuals when files are missing. For production, place final assets under `public/images/` (and `public/images/projects/` as needed).

---

### 11. MOTION SYSTEM

- **Hero:** Scroll-driven scale (1.06→1), y (0→12px), top-light opacity (0.45→0), bottom accent line width (scaleX 0→1). Disabled when `prefers-reduced-motion`.
- **Reveal:** Sections wrapped in `RevealOnScroll`: opacity 0→1, translateY 40→0, 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94). Uses Intersection Observer; respects reduced-motion (elements show without animation).
- **Cinematic:** Parallax y on full-bleed images; text uses cinematic-heading/cinematic-supporting for legibility. Gradient overlays static or scroll-linked where specified.
- **Structured Process:** Scroll progress drives phase (IDEA / DESIGN / BUILT SPACE), visual crossfades, and text opacity. Reduced-motion: single Built state + combined copy.
- **Loader:** Logo fades in and scales from 0.96→1; optional glow pulse; exit fade + logo y: -14. ~1.15s total (shorter with reduced-motion). Session-only.
- **Hover:** Buttons (translate-y, shadow); nav and footer links (underline, color); cards (border, shadow). `motion-reduce` where relevant.
- **Mobile menu:** Grid rows transition (0fr ↔ 1fr), 300ms ease-out.

---

### 12. RESPONSIVE SYSTEM

- **Layout container:** `MaxWidthWrapper`: `max-w-7xl`, `px-6 sm:px-7 md:px-8 lg:px-12`. All main content uses this.
- **Mobile:** Single column; hero stacks (copy then image); nav in hamburger menu; logos at 48px (header) and 56px (footer); buttons stack; structured process height 220vh; reveal and motion tuned for small screens.
- **Tablet:** Same wrapper; hero can stay stacked or go two-column depending on breakpoint; projects grid 2 columns (md); services/content grids adapt.
- **Desktop:** Two-column hero (lg), full nav, 56px/64px logos; projects 3 columns; structured process 300vh; full cinematic and process experience.
- **Ultra-wide:** Content stays within max-w-7xl; hero and sections remain centered and balanced; no full-bleed content drift.

---

### 13. REAL BUSINESS INFORMATION

- **Company name:** Zyra Builds.
- **Email:** info@zyrabuilds.com (mailto + display in footer and contact).
- **Phone:** +966 566 32 5017 (tel link + display with spaces).
- **Location:** Al Khobar / Dammam, Eastern Province, Saudi Arabia (footer, contact, map title).
- **Positioning line:** “Structured commercial interior execution for growing businesses in Saudi Arabia.” (footer, hero subtext, metadata).
- **Client types:** Offices, Restaurants, Retail, Clinics, Showrooms, Exhibition Booths (reflected in copy and metadata).
- **Budget reference:** 30K – 200K+ SAR (ProjectFitSection on contact page).

---

### 14. FINAL QA / LAUNCH STATUS

- **Design:** The site is **final** from a design standpoint: consistent visual system, premium hero and loader, clear hierarchy, no placeholder sections.
- **Routes:** All five routes (/, /services, /projects, /about, /contact) render the correct, fully styled pages with header, main, and footer.
- **CTAs:** All “Request Quote” and “View Projects” / “View Services” links point to the correct destinations; no # or broken links.
- **Placeholder content:** No remaining dummy or “placeholder” user-facing copy. Form is intentionally UI-only (backend not implemented).
- **Remaining small items:** None that block design sign-off. Optional: custom 404 page; contact page CTA could later link to form anchor if desired.

---

### 15. REMAINING TECHNICAL TASKS BEFORE DEPLOYMENT

- **Contact form:** Connect to backend or email service for submission (form currently uses `preventDefault()`).
- **Favicon:** Add `public/favicon.ico` when asset is ready; layout already references `/favicon.ico`.
- **Images:** Ensure `public/images/` (and `public/images/projects/`) contain the final hero, cinematic, and project images; fallbacks will show until then.
- **Map (optional):** Replace generic map embed in ContactMapSection with a specific Google Maps embed URL if a precise pin is desired.
- **Analytics / domain / deployment:** Configure per your hosting and analytics requirements (no design dependency).

---

## Part 3 — Launch Readiness Statement

**The Zyra Builds website is ready for launch from a design and content perspective.**

- All routes are correct and fully styled.
- Branding (logo, loader, hero product-stage) is premium and consistent.
- Real business information is used throughout.
- Motion is restrained and respects reduced-motion preferences.
- Responsive behavior is intentional across mobile, tablet, desktop, and ultra-wide.

Completing the contact form backend, adding the favicon and final images, and any deployment/analytics setup will make the site fully production-ready.
