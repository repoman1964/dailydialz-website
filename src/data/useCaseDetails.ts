export type UseCaseDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  hero: string;
  trigger: string;
  fit: string[];
  workflow: string[];
  notExpect: string[];
};

export const useCaseDetails: UseCaseDetail[] = [
  {
    slug: "solo-founders",
    title: "Solo founders",
    eyebrow: "USE CASE · SOLO FOUNDERS",
    hero: "Cold calling for people who sell by themselves.",
    trigger:
      "You’re building pipeline alone. Every extra account, verification step, and manually typed number is another excuse to postpone the work that actually creates revenue.",
    fit: [
      "Leads live in a spreadsheet or CRM export",
      "You call from your own mobile phone",
      "You don’t need predictive dialing or ten phone numbers",
      "You want a one-time tool, not another permanent SaaS bill",
    ],
    workflow: [
      "Export today’s prospects to CSV",
      "Import into DailyDialz on your Android phone",
      "Block 30–60 minutes for calls",
      "Tap, talk, disposition, continue",
      "Export results when the block is done",
    ],
    notExpect: [
      "It won’t write your script or fix a weak offer",
      "It won’t auto-dial while you do something else",
      "It won’t replace legal/compliance judgment",
    ],
  },
  {
    slug: "real-estate-and-mortgage",
    title: "Real estate & mortgage",
    eyebrow: "USE CASE · REAL ESTATE & MORTGAGE",
    hero: "Turn today’s lead export into a clean calling queue.",
    trigger:
      "Portal, open-house, and event leads arrive as files. Speed matters—and business-number setup or spreadsheet thrash steals the window while leads are still warm.",
    fit: [
      "CSV or spreadsheet lead downloads from portals and events",
      "Mobile-first follow-up between showings and appointments",
      "Need to log outcomes for follow-up discipline",
      "Prefer not to buy another monthly dialer seat",
    ],
    workflow: [
      "Download the lead list after the event or portal sync",
      "Import the CSV and start with the highest-priority segment",
      "Call from your existing mobile number",
      "Mark interested, callback, or DNC as you go",
      "Export outcomes into your follow-up process",
    ],
    notExpect: [
      "Not a full CRM or transaction platform",
      "Not a replacement for required licensing or consent rules",
      "Not a multi-agent call-center suite",
    ],
  },
  {
    slug: "recruiters",
    title: "Recruiters",
    eyebrow: "USE CASE · RECRUITERS",
    hero: "Work candidate lists without losing your place.",
    trigger:
      "Candidate exports arrive with inconsistent fields. Manually dialing while tracking notes in another tab burns the focus you need for conversations.",
    fit: [
      "Lists from multiple job boards and ATS exports",
      "High volume of short outreach attempts",
      "Need notes and outcomes per candidate",
      "Solo or small-desk recruiting motion",
    ],
    workflow: [
      "Export candidates with phone numbers to CSV",
      "Import and review the next name before each call",
      "Tap to call; hang up; log the outcome",
      "Protect DNC or do-not-contact rows",
      "Export results for CRM or ATS update later",
    ],
    notExpect: [
      "Not an ATS replacement",
      "Not SMS blast infrastructure",
      "Not unattended high-speed predictive dialing",
    ],
  },
  {
    slug: "insurance-and-local-services",
    title: "Insurance & local services",
    eyebrow: "USE CASE · INSURANCE & LOCAL SERVICES",
    hero: "Follow up quotes and prospects without another monthly bill.",
    trigger:
      "Quote requests and local leads need consistent phone follow-up. Subscription dialers and telecom setup feel oversized when the job is simply: call the list.",
    fit: [
      "Independent producers and local business owners",
      "Quote and inquiry lists that need same-day follow-up",
      "Mobile calling as the primary channel",
      "Budget sensitivity to recurring software charges",
    ],
    workflow: [
      "Collect the day’s inquiries into a simple CSV",
      "Import and run a focused calling block",
      "Use dispositions to plan callbacks",
      "Keep DNC marks clean",
      "Resume tomorrow without re-finding your place",
    ],
    notExpect: [
      "Not a full agency management system",
      "Not a guarantee of booked policies or jobs",
      "Not a substitute for industry compliance requirements",
    ],
  },
];

export function getUseCase(slug: string) {
  return useCaseDetails.find((u) => u.slug === slug);
}
