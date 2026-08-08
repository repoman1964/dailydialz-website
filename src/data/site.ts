export const site = {
  name: "DailyDialz",
  tagline: "Use the phone you already have. Make the calls you keep postponing.",
  description:
    "DailyDialz turns your spreadsheet into a focused call session on your existing Android phone—no new business number, no CRM maze, no monthly subscription. One-time founder pricing.",
  url: "https://dailydialz.com",
  email: "support@dailydialz.com",
  price: 99,
  /** Fixed two-decimal string for payment APIs (Stripe / PayPal). */
  priceAmount: "99.00",
  priceLabel: "$99",
  priceCurrency: "USD",
  pricePeriod: "one time",
  productName: "DailyDialz Solo",
  productSku: "dailydialz-solo",
  updatesMonths: 12,
  refundDays: 14,
  platform: "Android",
  minAndroid: "Android 12+",
  year: new Date().getFullYear(),
  /**
   * Primary purchase CTA destination — on-site buy page (Stripe + PayPal live there).
   */
  checkoutUrl: "/buy",
  demoUrl: "#demonstration",
  /** YouTube/Vimeo embed URL for the founder sales video (empty = show placeholder) */
  founderVideoEmbedUrl: "",
  /** YouTube/Vimeo embed URL for the product demo screen recording (empty = show placeholder) */
  productDemoEmbedUrl: "",
  /**
   * Stripe Payment Link for DailyDialz Solo ($99 one-time).
   * Used on `/buy` when the buyer chooses card checkout.
   * Override at build time with PUBLIC_STRIPE_PAYMENT_LINK if needed.
   */
  stripePaymentLink:
    (import.meta.env.PUBLIC_STRIPE_PAYMENT_LINK as string | undefined) ||
    "https://buy.stripe.com/6oUcN6ad598r06Z33NgrS08",
  /**
   * PayPal payment link for DailyDialz Solo ($99 one-time).
   * Used on `/buy` when the buyer chooses PayPal.
   * Override at build time with PUBLIC_PAYPAL_PAYMENT_LINK if needed.
   */
  paypalPaymentLink:
    (import.meta.env.PUBLIC_PAYPAL_PAYMENT_LINK as string | undefined) ||
    "https://www.paypal.com/ncp/payment/VQJ3SVLCJ6JZ2",
} as const;

/** Main nav — anchors map to the 5-chapter sales structure on the homepage */
export const navLinks = [
  { href: "/#demonstration", label: "Demo" },
  { href: "/#qualification", label: "Who it's for" },
  { href: "/#plan", label: "How it works" },
  { href: "/#price", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const trustItems = [
  "1 SEAT",
  "$99 ONE TIME",
  "ANDROID",
  "YOUR EXISTING NUMBER",
  "NO MONTHLY FEE",
] as const;

/** Ch2 qualification — works well if / not for you */
export const worksWellIf = [
  "Your leads are already in a spreadsheet",
  "You’re the one making the calls",
  "You want to start calling without a setup project",
  "You want to call from your own phone",
  "You want a simple call queue, not another CRM",
] as const;

export const notForYou = [
  "You’re managing a large sales team",
  "You need multi-user pipelines and admin controls",
  "You want predictive or parallel dialing",
  "You need a full business phone system",
  "You want software to do the selling for you",
] as const;

/** Ch3 — the plan (4 steps; bulk of the sales page) */
export const planSteps = [
  {
    n: "01",
    label: "PREVIEW THE LEAD",
    title: "Preview the lead.",
    body: "See who you’re calling before you dial. Name, number, notes, source, whatever context matters.",
    ui: "lead" as const,
  },
  {
    n: "02",
    label: "MAKE THE CALL",
    title: "Make the call.",
    body: "Tap once. Your phone places the call using the number you already have.",
    ui: "call" as const,
  },
  {
    n: "03",
    label: "LOG THE RESULT",
    title: "Log the result.",
    body: "Mark what happened. Answered. No answer. Callback. Interested. Add a note if needed.",
    ui: "outcome" as const,
  },
  {
    n: "04",
    label: "MOVE TO THE NEXT ONE",
    title: "Move to the next one.",
    body: "The next lead is already waiting. No bouncing back to the spreadsheet. No hunting for your place.",
    ui: "next" as const,
  },
] as const;

/** Ch5 — how to get it */
export const getSteps = [
  { n: "01", title: "Buy it", body: "DailyDialz Solo. $99 once. No subscription." },
  { n: "02", title: "Install it", body: "Put DailyDialz on your phone." },
  { n: "03", title: "Make the first call", body: "Connect your leads. Preview the first one. Tap to call." },
] as const;

export const features = [
  {
    slug: "use-your-own-number",
    title: "Use your own number",
    eyebrow: "NO SEPARATE NUMBER SETUP",
    short:
      "Call from your existing compatible mobile setup—no DailyDialz-provided business number for the standard workflow.",
    description:
      "The first call shouldn't require a compliance project. DailyDialz is built around the phone workflow you already use.",
  },
  {
    slug: "list-import",
    title: "List import",
    eyebrow: "SPREADSHEET TO QUEUE",
    short:
      "Bring in your prospect list via CSV, map the phone column, and work a clean calling queue.",
    description:
      "Import a lead list, keep extra columns for context, and stop hopping between spreadsheet and dialer.",
  },
  {
    slug: "call-session",
    title: "Call session",
    eyebrow: "TAP TO CALL",
    short:
      "Review the lead, launch the call, then continue—without retyping numbers from a spreadsheet.",
    description:
      "Stay in the zone with call-current, call-next, session notification, and a queue that keeps your place.",
  },
  {
    slug: "outcomes-and-export",
    title: "Outcomes & export",
    eyebrow: "KNOW WHAT HAPPENED",
    short:
      "Record dispositions and notes, protect DNC rows, and export results without overwriting your source list.",
    description:
      "Every call gets an outcome. Export when you're done and keep a clear history of what you did.",
  },
] as const;

export const useCases = [
  {
    slug: "solo-founders",
    title: "Solo founders",
    short: "Build pipeline without buying call-center software or another telecom account.",
    trigger: "You sell by yourself and your leads live in a spreadsheet.",
  },
  {
    slug: "real-estate-and-mortgage",
    title: "Real estate & mortgage",
    short: "Turn portal and open-house lead exports into a daily calling queue.",
    trigger: "Time-sensitive leads arrive as CSVs and go cold while setup gets in the way.",
  },
  {
    slug: "recruiters",
    title: "Recruiters",
    short: "Work candidate lists from multiple exports without losing your place.",
    trigger: "Phone formats are messy and every manual dial steals focus from conversations.",
  },
  {
    slug: "insurance-and-local-services",
    title: "Insurance & local services",
    short: "Follow up quote requests and prospects without another monthly SaaS bill.",
    trigger: "You need consistent outbound—not predictive dialing infrastructure.",
  },
] as const;

export const homeFaqs = [
  {
    q: "How fast can I start calling?",
    a: "Fast. DailyDialz is built to get you from install to your first outbound call in about 60 seconds.",
  },
  {
    q: "What kind of lead list can I use?",
    a: "DailyDialz is built around the spreadsheet or lead list you already use. Connect it, choose your list, and start calling.",
  },
  {
    q: "Do I need a new phone number?",
    a: "No. DailyDialz uses the phone and number you already have.",
  },
  {
    q: "Do I need a CRM?",
    a: "No. That’s kind of the point. DailyDialz gives you a simple calling workflow without making you rebuild everything inside another CRM.",
  },
  {
    q: "Is there a monthly subscription?",
    a: "No. DailyDialz Solo is $99 one time.",
  },
  {
    q: "What if DailyDialz isn’t for me?",
    a: "Run a real call block. If it doesn’t make calling easier, you’re covered by the 14-day money-back guarantee.",
  },
  {
    q: "What happens after I buy?",
    a: "Install DailyDialz, connect your leads, preview the first one, and make the call.",
  },
] as const;

export const fullFaqs: { group: string; items: { q: string; a: string }[] }[] = [
  {
    group: "Setup & numbers",
    items: [
      {
        q: "Does DailyDialz require KYC verification?",
        a: "DailyDialz does not require you to purchase a separate DailyDialz-provided phone number for the standard mobile calling workflow. You use your existing compatible mobile phone and calling service. Your carrier, operating system, country, or calling activity may still be subject to separate identity, business, or regulatory requirements.",
      },
      {
        q: "Do I need an LLC?",
        a: "DailyDialz itself does not require you to form an LLC merely to purchase the software. You remain responsible for following any laws, carrier policies, and business requirements that apply to your activity.",
      },
      {
        q: "Does DailyDialz provide a phone number?",
        a: "No. DailyDialz is designed to work with your existing compatible mobile calling setup.",
      },
      {
        q: "Is DailyDialz a VoIP provider?",
        a: "No. DailyDialz is calling-workflow software, not a replacement mobile carrier or telecom provider.",
      },
      {
        q: "Will prospects see my existing number?",
        a: "Calls are placed through your device's normal mobile calling path. Prospects typically see the number associated with the SIM or calling account your phone uses for that call—not a separate DailyDialz-provided number.",
      },
    ],
  },
  {
    group: "Workflow",
    items: [
      {
        q: "What file types can I import?",
        a: "CSV lead lists via the system document picker. A phone column is required (headers like phone, mobile, or telephone are auto-detected). Other columns are kept for context and preserved on export.",
      },
      {
        q: "Does it automatically dial people without my involvement?",
        a: "No. You review the lead and intentionally launch each call. After you hang up, you record a disposition, then choose CALL NEXT when you're ready.",
      },
      {
        q: "What happens if I change phones?",
        a: "Install DailyDialz on the new compatible Android device, grant permissions, and import your list (or resume from a previously exported results file). License activation and transfer details are stated at checkout and in the Terms.",
      },
      {
        q: "What happens when a call ends?",
        a: "Record the outcome (for example No Answer, Voicemail, Interested, DNC, Callback), add an optional note, then continue. A session notification helps you return to the app when Android does not bring it forward automatically.",
      },
    ],
  },
  {
    group: "Pricing & license",
    items: [
      {
        q: "Is there a monthly fee?",
        a: "No. DailyDialz founder pricing is $99 once for the Solo license.",
      },
      {
        q: "Are updates included?",
        a: "Your purchase includes 12 months of updates and standard support. Your purchased version remains usable after that period under the license terms. Continuing feature updates beyond the included window may be offered as optional maintenance.",
      },
      {
        q: "What is the refund policy?",
        a: "DailyDialz includes a 14-day refund period, subject to the refund policy shown at checkout and on the Refund Policy page.",
      },
    ],
  },
  {
    group: "Compliance & responsibility",
    items: [
      {
        q: "Does DailyDialz bypass calling regulations?",
        a: "No. You are responsible for complying with applicable consent, do-not-call, telemarketing, recording, carrier, and data-protection rules.",
      },
      {
        q: "How does DNC work?",
        a: "You can mark numbers as do-not-call so they are protected in your queue. DailyDialz does not replace your legal obligation to honor national or internal suppression lists.",
      },
    ],
  },
  {
    group: "Platform",
    items: [
      {
        q: "What Android version do I need?",
        a: "Android 12 (API 31) or newer. A physical device with cellular calling is recommended; emulators often lack a real radio.",
      },
      {
        q: "Is DailyDialz affiliated with Calley or other dialers?",
        a: "No. DailyDialz is an independently developed product and is not affiliated with, endorsed by, or sponsored by Calley, Twilio, GoHighLevel, or other third-party platforms mentioned for comparison.",
      },
    ],
  },
];

export const soloIncludes = [
  "60 seconds to your first call",
  "Use with your existing mobile calling setup",
  "Spreadsheet / lead-list connection",
  "Tap-to-call workflow",
  "Call outcomes and notes",
  "Queue progression and session history",
  "DNC protection on marked rows",
  "Results written back so you keep your place",
  "12 months of updates",
  "14-day refund window under stated terms",
] as const;

/** Ch4 value framing — what $99 buys vs the friction it replaces */
export const priceValuePoints = [
  "Less setup before call #1",
  "Less switching around between calls",
  "Less chance to lose your place",
  "Less room to turn hesitation into procrastination",
  "A faster path from “I should call” to actually calling",
] as const;

export const priceIncludesShort = [
  "Your existing phone and number",
  "Spreadsheet to calling queue",
  "Preview each lead before you call",
  "Tap to call",
  "Outcomes and notes",
  "12 months of updates",
] as const;
