# DailyDialz Website

Marketing site for **DailyDialz** — cold calling for solo operators.

## Stack

- [Astro](https://astro.build) (static)
- [Tailwind CSS v4](https://tailwindcss.com)
- Deploy target: Cloudflare Pages

## Requirements

- Node.js **22.12+**

```bash
# if you use nvm
nvm use 22
```

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Project layout

```
src/
  components/   # Nav, Footer, TrustBar, CtaBand, FAQ, etc.
  data/         # site copy, features, use cases
  layouts/      # BaseLayout
  pages/        # routes (file-based)
  styles/       # global.css + design tokens
public/         # favicon, OG image
```

## Config you should update before launch

Edit `src/data/site.ts`:

- `url` — production domain
- `email` — support address
- `checkoutUrl` — payment link
- `price` / refund / updates months if needed

## Docs used for copy

- `build_instructions_for_dailydialz_site.md` — visual system & structure
- `DailyDialz Sales Page.docx` — sales narrative
- `deep-research-report-dailydialz.md` — competitive / claim guardrails
- `chat_about_dd.md` — brand positioning

## Pages

| Path | Purpose |
|---|---|
| `/` | Home |
| `/how-it-works` | Workflow |
| `/features` + 4 detail pages | Features |
| `/use-cases` + 4 persona pages | Use cases |
| `/pricing` | $99 founder license |
| `/faq` | FAQ |
| `/about` | Story |
| `/contact` | Contact |
| `/privacy` `/terms` `/refund` | Legal |
| `/compare/calley-alternative` | SEO comparison |
