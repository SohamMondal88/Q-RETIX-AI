# Q-RETIX AI

## Overview

Q-RETIX AI is a polished SaaS-style website built with modern React and Next.js for showcasing AI-powered pharmaceutical research, drug discovery, clinical trial intelligence, and healthcare innovation.

This repository contains the full frontend landing experience, including:
- Hero marketing experience with immersive motion and animated layouts
- Blog and research hub pages with content previews and category filters
- Product and solution showcase sections for pharmaceutical intelligence
- Waitlist and community CTA sections for lead capture and customer engagement
- Legal, support, press, careers, and documentation pages

The site is designed with a premium, data-driven brand voice and is optimized for modern web deployment.

## Key Features

- **Next.js 16 App Router** with server-rendered routes and fast page loads
- **React 19** with client components for interactive sections
- **Tailwind CSS v4** for responsive utility-first styling
- **Framer Motion** animations for smooth page transitions and hero interactions
- **Lucide Icons** for modern UI iconography
- **Dynamic blog routes** using `src/app/blog/[slug]/page.tsx`
- **Fully responsive design** with mobile-first navigation and adaptive layout
- **Custom sections** including research timeline, feature cards, blog showcase, and waitlist community

## Project Structure

- `src/app/`
  - `page.tsx` — landing page entry
  - `layout.tsx` — global layout, metadata, and app wrapper
  - `about`, `blog`, `careers`, `community`, `contact`, `delivery`, `docs`, `press`, `support`, `legal/` — application routes
- `src/components/`
  - `Navbar.tsx` — top navigation and mobile menu
  - `Footer.tsx` — footer with link groups and social badges
  - `sections/` — reusable page sections like `HeroSection`, `FeatureCards`, `ResearchTimeline`, `BlogPage`, `BlogPost`, `ContactPage`, and more
  - `ui/` — shared UI primitives for buttons and inputs
- `src/hooks/` — custom hooks such as `useBlogStats.ts`
- `src/lib/` — static data and utility helpers
- `public/` — static assets and images used by the site

## Pages Included

- `/` — Landing page with hero, feature highlights, timeline, and community waitlist
- `/blog` — blog overview with featured post and article categories
- `/blog/[slug]` — individual blog post page pattern
- `/about` — company overview page
- `/careers` — careers page for hiring and team growth
- `/community` — community engagement page
- `/contact` — contact and inquiry page
- `/delivery` — delivery solutions page
- `/docs` — documentation page
- `/press` — press and media page
- `/support` — customer support page
- `/legal/privacy`, `/legal/terms`, `/legal/cookies`, `/legal/gdpr` — legal policies

## Tech Stack

- `next` — framework for server-rendered React apps
- `react` / `react-dom` — UI library
- `typescript` — static typing for safer development
- `tailwindcss` — utility-first styling
- `framer-motion` — animation and motion UI
- `lucide-react` — SVG icon library
- `react-hook-form` — form handling utilities
- `zod` — runtime schema validation
- `@prisma/client`, `prisma` — included in dependencies for future backend/data modeling use
- `@base-ui/react` — UI component support and design system utilities
- `resend` — email sending integration dependency

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Build

```bash
npm run build
```

## Production Preview

```bash
npm run start
```

## Deployment

This app is optimized for deployment on Vercel, but it can also run on any platform that supports Next.js.

### Recommended

```bash
vercel deploy
```

### Environment

- `NODE_ENV=production`
- `NEXT_PUBLIC_...` environment variables if you add API keys or integration configs

## Customization

### Update Branding

- Site title and metadata: `src/app/layout.tsx`
- Hero content: `src/components/sections/HeroSection.tsx`
- Navigation links: `src/components/Navbar.tsx`
- Footer links and social profiles: `src/components/Footer.tsx`

### Add New Pages

Create new folders inside `src/app/` and add `page.tsx` files.

### Add Blog Content

Update the blog data source or create new pages under `src/app/blog`.

## Contributor Notes

- Keep styles consistent with Tailwind utilities and component-driven sections
- Follow the file conventions in `src/components/sections/`
- Use `use client` only on components that require browser-only interactivity or state
- Keep page metadata updated in `src/app/layout.tsx`

## Known Notes

- The repository uses both `origin` and `upstream` remotes for source control management; the primary remote has been aligned to `https://github.com/Ahsan-Dogar/Q-RETIX-AI`
- The site includes placeholder data for blog posts and team members that can be replaced with real product content

## Contributing

Contributions are welcome. To contribute safely and in the standard Git workflow:

1. Create a feature branch from the latest main branch.
2. Make focused changes with clear commit messages.
3. Push the branch to the remote repository and share the branch name with the maintainer.

Example:

```bash
git checkout -b feature/your-change
git add .
git commit -m "Describe your change"
git push -u origin feature/your-change
```

## License

This repository includes a `LICENSE` file. Review the license before using or distributing the code.

---

For questions or help, open an issue on the GitHub repository or contact the project maintainer.
