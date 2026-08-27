# PixoraScreen

PixoraScreen is a fast, multilingual collection of browser-based fullscreen utilities. It includes solid-color screens, ambient scenes, animated screen savers, and harmless fake or prank screens for presentations, video production, display checks, and creative use.

Built with Astro, React, Tailwind CSS, and the Cloudflare adapter.

## Features

- Fullscreen color utilities, including custom, RGB, HEX, and gradient screens.
- Animated and ambient screens such as rain, snow, stars, galaxy, fireplace, aquarium, and matrix effects.
- Fake operating-system and prank screens, including update, crash, broken-screen, and hacker-typer simulations.
- Localized pages and alternate URLs for supported languages.
- SEO metadata, JSON-LD, `robots.txt`, and an auto-generated sitemap.
- Contact form email delivery through Resend.

## Getting started

Requirements: Node.js 22.12 or later and npm.

```sh
npm install
astro dev --background
```

The development server runs at `http://localhost:4321` by default.

Manage the background server with:

```sh
astro dev status
astro dev logs
astro dev stop
```

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Astro development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Build the site and serve it through Wrangler locally. |
| `npm run astro -- <command>` | Run Astro CLI commands. |
| `npm run generate-types` | Generate Cloudflare Worker types. |
| `npm run deploy` | Build and deploy to Cloudflare. |

## Project structure

```text
src/
  components/       Reusable layout and interactive screen components
  data/             Tool catalog, translations, locales, and SEO metadata
  layouts/          Shared base page layout
  pages/            Static pages, dynamic tool routes, and contact API
  styles/           Global styles
  utils/            Shared utility functions
public/
  assets/           Screen images, thumbnails, and audio
  boot/             Boot-screen assets
```

The central tool catalog is [`src/data/tools.ts`](src/data/tools.ts). Add or update tools there, then use the matching component selection in [`src/pages/[...slug].astro`](src/pages/[...slug].astro) when a tool needs custom behavior.

## Environment variables

The contact form endpoint requires a Resend API key in the deployment environment:

```text
RESEND_API_KEY=your_resend_api_key
```

Optional variables:

```text
CONTACT_TO_EMAIL=recipient@example.com
RESEND_FROM=hello@example.com
```

`CONTACT_TO_EMAIL` defaults to the project contact recipient if omitted. `RESEND_FROM` must be a Resend-verified sender address in production.

## Deployment

The app is configured for Cloudflare Workers through [`wrangler.jsonc`](wrangler.jsonc). The production domain is configured in [`astro.config.mjs`](astro.config.mjs).

```sh
npm run deploy
```

Before deploying, configure the Resend variables as Cloudflare Worker secrets or environment variables.
