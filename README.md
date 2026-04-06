# Easy Waste Disposal

Marketing website for Easy Waste Disposal, a licensed waste removal company serving North and Central London.

## Tech Stack

- **Framework:** Astro 6 (static site generation)
- **Components:** React 19 (interactive elements only)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Hosting:** Vercel
- **Sitemap:** @astrojs/sitemap

## Setup

```bash
npm install
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

```
src/
  components/     # Reusable components (Header, QuoteForm, Breadcrumbs, etc.)
  data/           # Business data, service definitions, area content
  layouts/        # Layout.astro (global layout with header, footer, meta tags)
  pages/          # All page routes
    services/     # Service hub + 9 individual service pages
    locations/    # Location hub + 15 area pages + 135 area+service combo pages
  styles/         # Global CSS (Tailwind config)
public/
  images/         # Optimised WebP images
  favicon files   # Various favicon formats
  manifest.json   # PWA manifest
  robots.txt      # Crawler directives
```

## Pages Generated

- 1 homepage
- 1 about, 1 contact, 1 privacy, 1 terms, 1 404
- 10 service pages (hub + 9 services)
- 16 location pages (hub + 15 areas)
- 135 location+service combination pages
- **Total: ~167 pages**

## Key Notes

- `robots.txt` and meta robots are set to block indexing until launch
- Quote form frontend is complete but needs a backend endpoint for submissions
- All images are optimised WebP, 1200x800 at 3:2 aspect ratio
- Environment Agency licence: CBDU429337
