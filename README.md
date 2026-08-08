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
- `price` / refund / updates months if needed

### Payments (Stripe + PayPal)

Checkout lives at **`/buy`**. Set these env vars at build time (Cloudflare Pages → Settings → Environment variables):

| Variable | Purpose |
|---|---|
| `PUBLIC_STRIPE_PAYMENT_LINK` | Optional override for the Stripe Payment Link (default is set in `site.ts`) |
| `PUBLIC_PAYPAL_PAYMENT_LINK` | Optional override for the PayPal payment link (default is set in `site.ts`) |

**Stripe**

Purchase CTAs use `site.checkoutUrl` → **`/buy`**. Card checkout on that page uses the Stripe Payment Link (default in `site.ts`):

`https://buy.stripe.com/6oUcN6ad598r06Z33NgrS08`

In the Stripe Dashboard, set the Payment Link success URL to `https://dailydialz.com/buy/success` and cancel URL to `https://dailydialz.com/buy?canceled=1`.

The buy page appends `prefilled_email` and `client_reference_id` when starting Stripe checkout from the form.

**PayPal**

**Pay with PayPal** on `/buy` uses the PayPal No Code payment link (default in `site.ts`):

`https://www.paypal.com/ncp/payment/VQJ3SVLCJ6JZ2`

In PayPal, set the post-payment return URL to `https://dailydialz.com/buy/success` if available.

Optional local file: copy `.env.example` → `.env` (not committed).

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
| `/buy` | Checkout (Stripe + PayPal) |
| `/buy/success` | Post-purchase confirmation |
| `/faq` | FAQ |
| `/about` | Story |
| `/contact` | Contact |
| `/privacy` `/terms` `/refund` | Legal |
| `/compare/calley-alternative` | SEO comparison |
