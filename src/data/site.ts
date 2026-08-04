export const site = {
  name: "DailyDialz",
  tagline: "Use the phone you already have. Make the calls you keep postponing.",
  description:
    "DailyDialz turns your spreadsheet into a simple mobile calling workflow—without forcing you to buy and verify another business number. One-time founder pricing.",
  url: "https://dailydialz.com",
  email: "support@dailydialz.com",
  price: 99,
  priceLabel: "$99",
  pricePeriod: "one time",
  updatesMonths: 12,
  refundDays: 14,
  platform: "Android",
  minAndroid: "Android 12+",
  year: new Date().getFullYear(),
  checkoutUrl: "#buy",
  demoUrl: "#demo",
} as const;

export const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/features", label: "Features" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
] as const;

export const trustItems = [
  "USE YOUR EXISTING NUMBER",
  "CSV LIST → CALL QUEUE",
  "ONE-TIME FOUNDER LICENSE",
  "BUILT FOR SOLO OUTBOUND",
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
    q: "Does DailyDialz require KYC or a separate business number?",
    a: "DailyDialz does not require you to purchase a separate DailyDialz-provided phone number for the standard mobile calling workflow. You use your existing compatible mobile phone and calling service. Your carrier, OS, country, or calling activity may still have their own requirements.",
  },
  {
    q: "Is DailyDialz a VoIP provider?",
    a: "No. DailyDialz is calling-workflow software, not a replacement mobile carrier or telecom provider.",
  },
  {
    q: "Does it auto-dial people without my involvement?",
    a: "No. You review the lead and intentionally launch each call through the supported mobile workflow.",
  },
  {
    q: "What file types can I import?",
    a: "Version one focuses on CSV lead lists via the system file picker. A phone number column is required; other columns are preserved for context and export.",
  },
  {
    q: "Is there a monthly fee?",
    a: "No. The founder license is $99 one time. Your purchase includes 12 months of updates. The purchased version remains usable under the license terms after that period.",
  },
  {
    q: "What platforms are supported?",
    a: "DailyDialz v1 is built for Android (Android 12+). It places cellular calls through your device SIM using your existing compatible mobile setup.",
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
  "1 user on a compatible Android device",
  "Use with your existing mobile calling setup",
  "CSV lead-list import",
  "Tap-to-call workflow",
  "Call outcomes and notes",
  "Queue progression and session history",
  "DNC protection on marked rows",
  "Results export (does not overwrite your source file)",
  "12 months of updates",
  "14-day refund window under stated terms",
] as const;
