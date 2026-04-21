# Alessandro / Fonta Portfolio

Premium personal portfolio for Alessandro / Fonta, a freelance full stack developer in Italy specializing in web development, custom business systems, WordPress, e-commerce, and AI Engineering.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Three.js
- Vercel-ready configuration

## Project Structure

```txt
fonta-portfolio/
  public/
    assets/
      alessandro-fonta.jpg
  src/
    app/
      work/[slug]/page.tsx
      globals.css
      layout.tsx
      not-found.tsx
      opengraph-image.tsx
      page.tsx
      robots.ts
      sitemap.ts
    components/
      ContactForm.tsx
      HomePage.tsx
      MagneticButton.tsx
      ProjectDetailClient.tsx
      ProjectVisual.tsx
      Reveal.tsx
      ScrollProgress.tsx
      SiteHeader.tsx
      StructuredData.tsx
      ThreeSignalScene.tsx
    lib/
      site-data.ts
      use-experience-settings.ts
  vercel.json
```

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production build:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

## Deployment

Deploy the `fonta-portfolio` folder to Vercel. The project is standard Next.js, so Vercel will detect the framework automatically.

The included `vercel.json` adds basic security headers. No environment variables are required for the current static portfolio.

## Content Editing

Most copy, projects, services, capabilities, contact details, and SEO schema content live in:

```txt
src/lib/site-data.ts
```

Update `siteConfig.url` before production launch with the real domain. The current value is a placeholder:

```ts
url: "https://fonta.dev"
```

## Placeholder / Replacement Notes

- Replace `public/assets/alessandro-fonta.jpg` with a sharper final portrait when ready. Keep the same file name to avoid code changes.
- Replace the stock mood images in `public/assets/stock-*.jpg` with real project screenshots when case studies are ready.
- Add real project screenshots later by extending `projects` in `src/lib/site-data.ts` and replacing `ProjectVisual` with `next/image` assets where useful.
- The contact form opens the visitor email client with a prefilled brief. For a hosted backend form, replace `ContactForm.tsx` with a Server Action or a service such as Resend.
- Project detail pages are generated from the project entries in `site-data.ts`. Add a new project object and it automatically appears in the homepage, sitemap, and `/work/[slug]`.

## Interaction Notes

- The site defaults to Italian and dark mode, then stores language/theme choices in `localStorage`.
- The header includes language and theme toggles.
- The hero uses a lightweight Three.js canvas scene. It respects reduced-motion preferences.
- Section reveals use CSS scroll-linked animations with a safe fallback for browsers that do not support `animation-timeline`.
- The hydration warning caused by `cz-shortcut-listen="true"` is from a browser extension mutating `<body>` before React hydrates. The layout uses `suppressHydrationWarning` on `html` and `body` to avoid false-positive dev noise.

## SEO / AEO Included

- Metadata, Open Graph, and Twitter card configuration
- Dynamic OG image route
- `robots.ts` and `sitemap.ts`
- JSON-LD for Person, ProfessionalService, WebSite, ItemList, FAQPage, and project pages
- Semantic headings and indexable project pages
- FAQ content for answer-engine visibility
