export type FeatureDetail = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  included: string[];
  whoFor: string[];
  process: { n: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const featureDetails: FeatureDetail[] = [
  {
    slug: "use-your-own-number",
    eyebrow: "USE YOUR OWN NUMBER",
    title: "The first call shouldn’t require a compliance project.",
    subtitle:
      "DailyDialz helps you launch calls using your existing compatible mobile calling setup—without purchasing a separate DailyDialz-provided phone number for the standard workflow.",
    included: [
      "Calls via your device’s normal mobile path",
      "No DailyDialz-provided business number required for the standard workflow",
      "No separate telecom account to open just to start calling",
      "Works with the SIM / calling account your phone already uses",
      "Clear product positioning: workflow software, not a carrier",
      "Legal clarification: you still follow laws and carrier rules",
    ],
    whoFor: [
      "Solo founders tired of business-number onboarding before the first dial",
      "Operators who already have a working mobile number",
      "Anyone who doesn’t need call-center infrastructure to sell",
      "People who want less setup friction, not more accounts",
    ],
    process: [
      { n: "01", title: "Install", body: "Install on a compatible Android device and grant calling permissions." },
      { n: "02", title: "Import", body: "Load your CSV lead list through the system file picker." },
      { n: "03", title: "Call", body: "Review each lead and launch the call from your existing number path." },
      { n: "04", title: "Continue", body: "Record outcomes and move through the queue without retyping numbers." },
    ],
    faqs: [
      {
        q: "Does DailyDialz give me a phone number?",
        a: "No. DailyDialz is designed to work with your existing compatible mobile calling setup.",
      },
      {
        q: "Is this VoIP?",
        a: "No. DailyDialz is calling-workflow software, not a telecom or VoIP provider.",
      },
      {
        q: "Do I still need to follow regulations?",
        a: "Yes. DailyDialz does not bypass laws, carrier requirements, or calling regulations.",
      },
      {
        q: "Will prospects see my number?",
        a: "Typically they see the number associated with the SIM or calling account your phone uses for that call.",
      },
      {
        q: "Do I need an LLC to buy DailyDialz?",
        a: "DailyDialz itself does not require you to form an LLC merely to purchase the software. You remain responsible for rules that apply to your activity.",
      },
    ],
  },
  {
    slug: "list-import",
    eyebrow: "LIST IMPORT",
    title: "Spreadsheet in. Calling queue ready.",
    subtitle:
      "Import a CSV lead list, detect the phone column, keep extra fields for context, and stop hopping between apps to find the next number.",
    included: [
      "CSV import via system document picker",
      "Phone column auto-detection (phone, mobile, telephone, and similar)",
      "Preserve unknown columns for context and export",
      "Local persistence of imported lists",
      "No broad storage permission required",
      "Sample list available for first-run practice",
    ],
    whoFor: [
      "Anyone whose leads arrive as CSV exports",
      "Recruiters juggling candidate lists from multiple sources",
      "Agents and brokers with portal or event lead downloads",
      "Solo sellers who refuse to retype every number",
    ],
    process: [
      { n: "01", title: "Export", body: "Export or save your prospects as a CSV with a phone column." },
      { n: "02", title: "Import", body: "Pick the file in DailyDialz. The app looks for a phone header automatically." },
      { n: "03", title: "Review", body: "Confirm the queue looks right before you start a session." },
      { n: "04", title: "Dial", body: "Work the list with tap-to-call and dispositions—not spreadsheet gymnastics." },
    ],
    faqs: [
      {
        q: "What formats are supported?",
        a: "Version one focuses on CSV. A phone number column is required.",
      },
      {
        q: "Are other columns kept?",
        a: "Yes. Unknown columns are preserved so you keep context and can export results without losing fields.",
      },
      {
        q: "Do I need to upload lists to a web panel first?",
        a: "No. Import happens on the device through the system document picker.",
      },
      {
        q: "What if my phone numbers have formatting?",
        a: "Use clean, dialable numbers in the phone column. Formatting edge cases vary by device and carrier.",
      },
      {
        q: "Does import require cloud login?",
        a: "DailyDialz v1 is local-first: no account login is required to import a list on device.",
      },
    ],
  },
  {
    slug: "call-session",
    eyebrow: "CALL SESSION",
    title: "Stay in the zone between conversations.",
    subtitle:
      "Review the lead, launch the call, hang up, record the result, and continue—without retyping numbers or losing your place after an interruption.",
    included: [
      "Call Current action for intentional launches",
      "CALL NEXT between calls",
      "Session notification (Open Dialer / Stop Session)",
      "Queue position preserved across app kill and reboot",
      "Call-state monitoring before treating a call as complete",
      "Optional call-immediately-after-disposition setting (still requires your tap)",
    ],
    whoFor: [
      "Solo operators who lose momentum mid-list",
      "Anyone who has abandoned a call block after too much app-switching",
      "People who need pause/stop controls they can trust",
      "Sellers building a daily calling habit",
    ],
    process: [
      { n: "01", title: "Start session", body: "Open your list and begin with the current lead." },
      { n: "02", title: "Call", body: "Tap to place the call through your mobile path." },
      { n: "03", title: "Return", body: "Use the session notification if Android doesn’t bring the app forward." },
      { n: "04", title: "Advance", body: "Disposition, then CALL NEXT—your place stays known." },
    ],
    faqs: [
      {
        q: "Is this unattended predictive dialing?",
        a: "No. You intentionally launch each call. Version one does not place the next call without your action.",
      },
      {
        q: "Can I stop a session?",
        a: "Yes. Use Stop Session from the notification or in-app controls.",
      },
      {
        q: "What if the app is backgrounded after a call?",
        a: "Android may not return a non-default dialer to the foreground automatically. A persistent session notification lets you open the dialer and record the disposition.",
      },
      {
        q: "Does progress survive a reboot?",
        a: "Yes. Local persistence keeps list and session state so you can resume.",
      },
      {
        q: "Multi-SIM phones?",
        a: "When multiple SIMs are present, Android may show its own SIM picker. DailyDialz does not silently pick a SIM for you.",
      },
    ],
  },
  {
    slug: "outcomes-and-export",
    eyebrow: "OUTCOMES & EXPORT",
    title: "Know what happened. Export without wrecking the source.",
    subtitle:
      "Record dispositions and notes, protect DNC rows, track attempts, and export results as a new file when the session is done.",
    included: [
      "Disposition screen (No Answer, Voicemail, Interested, DNC, Callback, and more)",
      "Optional notes per call",
      "Do-not-call protection for marked numbers",
      "Attempt tracking",
      "Export results CSV without overwriting the original",
      "Session history for review",
    ],
    whoFor: [
      "Sellers who need a clean record of outcomes",
      "Anyone who has corrupted a master spreadsheet by editing mid-session",
      "Operators who must honor internal DNC marks",
      "Teams that later want a results file for CRM import",
    ],
    process: [
      { n: "01", title: "Hang up", body: "Finish the conversation or attempt." },
      { n: "02", title: "Disposition", body: "Choose the outcome that matches what happened." },
      { n: "03", title: "Note", body: "Add context you’ll need for the follow-up." },
      { n: "04", title: "Export", body: "When done, export results without overwriting your source list." },
    ],
    faqs: [
      {
        q: "Does export overwrite my original CSV?",
        a: "No. Results export is designed so you keep the source file intact.",
      },
      {
        q: "What dispositions are available?",
        a: "Common outcomes such as No Answer, Voicemail, Interested, DNC, and Callback—plus notes when you need more detail.",
      },
      {
        q: "How does DNC work?",
        a: "Mark a number as do-not-call to protect it in your queue. You remain responsible for legal suppression obligations.",
      },
      {
        q: "Can I resume later?",
        a: "Yes. History and queue state help you continue where you left off.",
      },
      {
        q: "Is call duration exact billable time?",
        a: "Duration is approximate based on device call-state signals and may include ring time depending on the device.",
      },
    ],
  },
];

export function getFeature(slug: string) {
  return featureDetails.find((f) => f.slug === slug);
}

export function relatedFeatures(slug: string) {
  return featureDetails.filter((f) => f.slug !== slug);
}
