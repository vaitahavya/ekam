# Decade Street Ekam — Hyderabad

A high-conversion investor-focused landing site for **Decade Street Ekam**, a structured hospitality investment in Hyderabad.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**
- **TypeScript**

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

- `app/page.tsx` — Single-page landing with all sections
- `app/layout.tsx` — Root layout, fonts, metadata
- `components/` — HeroSection, IdeaSection, ProcessFlow, ProjectSnapshot, RevenueChart, FeatureCards, ExitStrategy, FounderTrust, CTASection, Footer, Header, StickyCTA, WhatsAppButton
- `lib/utils.ts` — `cn()` helper
- `lib/images.ts` — Centralised image paths (uses existing assets in `public/images/`)
- `public/images/` — Static images (from original `assets/images/`)

## Design System

- **Primary:** #111111 (charcoal)
- **Accent:** #C6A15B (muted gold)
- **Background:** #F8F7F4
- **Text:** #1A1A1A
- **Typography:** Outfit (body), Cormorant Garamond (headings)

## Conversion Features

- Sticky CTA (bottom right) after 40% scroll
- WhatsApp floating button
- Multiple CTAs: Schedule Presentation, View Financial Model, Book Founder Unit, Schedule Site Visit, Get Financial Model

## SEO

Update canonical URL and `og:image` in `app/layout.tsx` and in `robots.txt` / `sitemap.xml` when deploying to your domain.

---

The original static brochure remains in `index.html`, `assets/css/style.css`, and `assets/js/main.js` (serve with `npx serve` if needed).
