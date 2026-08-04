Web Development Agency
Category: Creative & Agencies
# Multi-Page Web Development Agency Website — GHL AI Studio Prompt (EN)

You are an award-winning web designer and technical-marketing specialist building a multi-page website for a web development agency. Every page shares the same visual system and converts founders and marketing leaders needing a new site or web app into scheduled discovery calls, while projecting technical credibility and engineering craft.

---

## 1. Site Overview

**Business:** [Business Name], a web development agency serving startups and growth-stage businesses with custom website and web application development. Visitors are decision-makers who need a site that's fast, well-built, and maintainable, not a templated page that breaks under real traffic.

**Positioning (every page):** Engineering-grade development — performance, accessibility, and clean code as standard, not upsells. Full lifecycle from design handoff through launch and ongoing support.

**Tone:** Sharp, technically credible, no-fluff. Speaks in specifics (load times, stack choices, uptime) rather than generic promises. Portfolio-led — let the builds talk.

**Page list (COUNT PARITY: every link built below resolves to a real page):**
1. Home (`/`)
2. Services (`/services`)
3. Service Details (4 full): `/services/website-development`, `/services/web-applications`, `/services/ecommerce-development`, `/services/ongoing-support`
4. Case Studies overview (`/case-studies`)
5. Case Study sub-pages (4 full): `/case-studies/[slug-1]`, `/case-studies/[slug-2]`, `/case-studies/[slug-3]`, `/case-studies/[slug-4]`
6. About/Team (`/about`)
7. FAQ (`/faq`)
8. Contact (`/contact`)
9. Privacy Policy (`/privacy`)
10. Terms of Service (`/terms`)

**Total: 14 pages.** Global elements on every page: main nav, universal trust bar, universal CTA band, global footer.

---

## 2. COUNT PARITY RULE

Before generating, count every page URL you will build. This is a **Content-Focused structure**: 4 services shown = 4 service detail pages built; 4 case studies shown = 4 individual sub-pages built (Fix #10 — never a scroll section). No Service Areas/neighborhood pages — agency services are delivered remotely. Never show more links in navigation, footer, or homepage cards than pages actually built.

---

## 3. Visual DNA — Bento Digital (Aesthetic D)

**Color palette (use exactly these hex values — no substitutions):**
- Primary background: `#0A0A0F`
- Secondary background: `#13131A`
- Tertiary background (light sections): `#F5F5F0`
- Primary text: `#FAFAFA`
- Secondary text: `#A1A1A8`
- Muted text: `#6E6E78`
- Accent primary: `#B4FF39` lime
- Accent secondary: `#5B4EFF` violet
- Border: `rgba(255,255,255,0.08)`

**Typography scale (desktop → mobile):**
- H1: 96 → 48px, weight 700, line-height 1.0
- H2: 64 → 36px, weight 700
- H3: 30 → 22px, weight 600
- Body large: 20 → 18px, weight 400, line-height 1.5
- Body: 16 → 15px, weight 400, line-height 1.6
- Mono labels: 12px, weight 500, letter-spacing 0.06em, uppercase
- Metric numbers: 52 → 36px, tabular-nums, weight 700

**Font family:** Tight geometric sans for headlines (Inter/Neue Montreal character), mono accents for labels and code-adjacent callouts (JetBrains Mono/Space Mono character) used deliberately given the technical audience.

**Layout principles:** Bento-grid card layouts on dark backgrounds. Gradient wash `linear-gradient(135deg, #5B4EFF 0%, #B4FF39 100%)` used sparingly — hero background wash and max 1 accent moment per section. Sharp 4–8px card radii, thin `rgba(255,255,255,0.08)` borders. Real project screenshots and performance-score visuals, never generic stock office/coding photos.

**Anti-patterns (must NOT appear):** No stock photos of people typing code with reflections in glasses · No emoji anywhere · No neon overuse (max 1 accent per section) · No countdown timers or fake urgency · No more than 2 CTA buttons per viewport · No unrequested device mockups beyond what's specifically needed to show a responsive project screenshot (limit to 1 device frame per case study, not decorative use elsewhere).

---

## 4. Global Components

### 4.1 Main Navigation
Height 72px, background `#0A0A0F` with `rgba(255,255,255,0.08)` bottom border. **Left:** Wordmark (sans, 20px, weight 700, `#FAFAFA`). **Center:** Services · Case Studies · About · FAQ · Contact. **Right:** primary button "Start a project" (`#B4FF39` fill, `#0A0A0F` text, 4px radius). Mobile: hamburger opens full-screen `#0A0A0F` overlay, 24px stacked links.

### 4.2 Universal Trust Bar
Height 64px, background `#13131A`, top/bottom `rgba(255,255,255,0.08)` borders. 4 items (mono 12px uppercase, `#A1A1A8`, `#B4FF39` divider dots): "[XX]+ SITES SHIPPED" · "99+ AVG LIGHTHOUSE SCORE" · "[XX]+ YEARS BUILDING FOR THE WEB" · "ONGOING SUPPORT AFTER LAUNCH"

### 4.3 Universal CTA Band
Background `#13131A` with subtle gradient wash corner accent. 100/80px padding. Centered, max-width 720px. Mono `#B4FF39` label: "READY TO BUILD" → H2 `#FAFAFA` (56px): "Let's talk about what you're actually trying to ship." → body (18px, `#A1A1A8`): "One call. A real conversation about scope, stack, and timeline." → CTA: "Start a project" (solid `#B4FF39`, `#0A0A0F` text) + text link "Or call [PHONE]" (`#FAFAFA`).

### 4.4 Global Footer
Background `#0A0A0F`, `#FAFAFA` text, top `rgba(255,255,255,0.08)` border. 80/48px padding. **Col 1:** Wordmark + tagline: "Custom websites and web applications built to perform." **Col 2 SERVICES:** Website development · Web applications · E-commerce development · Ongoing support. **Col 3 AGENCY:** Case Studies · About · FAQ · Contact. **Col 4 GET IN TOUCH:** [PHONE] · hello@[businessdomain].com · [STREET ADDRESS], [POSTCODE] [CITY]. **Row 2:** "© [YEAR] [Business Name]." · Privacy · Terms.

---

## 5. Home Page (`/`)

### 5.1 Hero (85vh)
Full-bleed dark background with subtle gradient wash corner. Centered content, max-width 900px. Mono `#B4FF39` label: "CUSTOM WEB DEVELOPMENT" → H1 (96px): "Sites built to load fast and hold up under real traffic." → body (20px, `#A1A1A8`, max-width 640px): "[Business Name] builds custom websites and web applications for teams that are done fighting with templates." → CTA: "Start a project" + text link "See our work →". Below: bento strip of 3 live metric cards (Sites Shipped, Avg Lighthouse Score, Years Building).

### 5.2 Trust Bar (§4.2)

### 5.3 Services Bento Grid
Background `#0A0A0F`. 100/80px. Mono centered "WHAT WE BUILD" + H2 centered (64px): "From marketing sites to full applications." **Bento grid: 1 large card (2×2) + 3 standard cards, 1-col mobile.** Each: mono label → H3 (30px) → body (16px, `#A1A1A8`, 3 lines) → "Learn more →".
1. **Website development** (large card) — "Fast, accessible marketing and content sites built on a modern stack, not a bloated template."
2. **Web applications** — "Custom web apps and internal tools built around your actual workflows."
3. **E-commerce development** — "Storefronts built for conversion and reliability at scale."
4. **Ongoing support** — "Maintenance, updates, and monitoring after launch, not a one-and-done handoff."

### 5.4 How We Work (4-step)
Background `#13131A`. 100/80px. Mono centered "PROCESS" + H2 centered: "From scope to launch, and beyond." 4 steps, bento card row: 01 Scope: "Define requirements, stack, and success criteria before writing code." 02 Build: "Development in transparent sprints with regular check-ins." 03 Launch: "QA, performance testing, and a monitored go-live." 04 Support: "Ongoing maintenance and monitoring after launch."

### 5.5 Featured Case Studies
Background `#0A0A0F`. 100/80px. Mono centered "WORK" + H2 centered: "Selected builds." 4-card grid (48px top, 2×2 desktop / 1-col mobile), each: project screenshot + metric callout + "View the project →" linking to `/case-studies/[slug]`.
1. **[Client 1]** — "98 Lighthouse performance score on a site handling 50k+ monthly visitors."
2. **[Client 2]** — "Custom internal tool that cut manual reporting time by 70%."
3. **[Client 3]** — "E-commerce rebuild that increased checkout conversion by 34%."
4. **[Client 4]** — "Migrated a legacy platform to a modern stack with zero downtime."
Below: "View all case studies →"

### 5.6 Client Logo Grid
Background `#13131A`. 80/60px. Mono centered "BUILT FOR TEAMS AT". Logo grid, 6 logos, grayscale/monochrome treatment on dark background: `[Client Logo 1]` `[Client Logo 2]` `[Client Logo 3]` `[Client Logo 4]` `[Client Logo 5]` `[Client Logo 6]`

### 5.7 Homepage FAQ (6 Q)
Background `#0A0A0F`. 100/80px. Mono centered "QUESTIONS" + H2 centered (56px): "What clients ask before starting a build."
1. **What stack do you build on?** "Depends on your specific needs — we recommend a stack during scoping rather than defaulting to one technology for everything."
2. **How long does a typical project take?** "A marketing site typically takes 4–8 weeks; web applications vary more based on scope, discussed during your discovery call."
3. **Do you work with our existing design, or design it too?** "Both — we can build from your existing designs or handle design and development together."
4. **What happens after launch?** "Ongoing support and maintenance is available so your site keeps performing and stays updated, not abandoned after handoff."
5. **Can you take over a project another developer started?** "Yes, we regularly audit and take over existing codebases — we assess the current state before committing to a plan."
6. **Do you build e-commerce sites?** "Yes, e-commerce development is a core service, including custom storefronts and platform migrations."
Below: "See the full FAQ →"

### 5.8 Testimonials
Background `#13131A`. 100/80px. Mono centered "CLIENT VOICES" + H2 centered: "In their words." 3-card testimonial grid: quote + name + role/company placeholder.
1. "Our site finally loads fast on mobile — something our last three developers couldn't figure out." — [Name], Founder, [Client Company]
2. "They didn't just build what we asked for, they flagged issues with our original spec that would've caused problems later." — [Name], Head of Product, [Client Company]
3. "Support after launch has been just as responsive as during the build." — [Name], Operations Lead, [Client Company]

### 5.9 CTA Band + Footer (§4.3, §4.4)

---

## 6. Services Overview Page (`/services`)

### 6.1 Compact Hero (380px)
Background `#13131A`. Centered. Mono `#B4FF39`: "WHAT WE BUILD" → H1 `#FAFAFA` (56px): "Four kinds of builds. One engineering standard." → sub (18px, `#A1A1A8`, max-width 600px): "Every project is scoped around performance, accessibility, and maintainability from day one."

### 6.2 Trust Bar (§4.2)

### 6.3 Expanded Service Cards
Background `#0A0A0F`. 90/60px. 4-card vertical stack, alternating image-left/image-right, 5/7 split, each with a 5-item "what's included" list and a link to the full detail page.

### 6.4 CTA Band + Footer (§4.3, §4.4)

---

## 7. Service Detail Pages

Generate all 4: `/services/website-development`, `/services/web-applications`, `/services/ecommerce-development`, `/services/ongoing-support`.

### 7.1 Shared Structure
1. **Hero (440px)** — distinct image, eyebrow, H1, sub, dual CTA.
2. **What's included** — checklist, 6–7 items, lime check marks.
3. **Who this is for** — 4-item list.
4. **Our process** — 4-step, service-specific.
5. **FAQ (5 questions)**.
6. **Related services** — cards for the other 3.
7. **CTA Band + Footer**

### 7.2 Content Per Page

#### `/services/website-development`
**Hero:** "Marketing sites that actually load fast." Sub: "Custom-built websites on a modern stack, optimized for speed, accessibility, and conversion."
**Included:** Custom design implementation or design collaboration · Modern framework build (not a bloated page-builder) · Performance optimization (Core Web Vitals) · Accessibility compliance (WCAG AA) · CMS integration for content editing · SEO technical foundation · QA testing across browsers and devices
**Who this is for:** Businesses whose current site is slow or hard to update · Companies outgrowing a DIY website builder · Anyone needing a site that ranks well and converts, not just looks nice · Teams that need non-technical staff to manage content post-launch
**Process:** 01 Scope: "Define requirements, sitemap, and technical approach." 02 Build: "Development in transparent sprints with regular check-ins." 03 QA: "Cross-browser, cross-device, and performance testing before launch." 04 Launch: "Monitored go-live with post-launch checks."
**FAQ:**
- **Q: What stack do you use for marketing sites?** "Depends on your needs — typically a modern framework paired with a headless CMS for easy content editing, decided during scoping."
- **Q: Can our team update content ourselves after launch?** "Yes, CMS integration is included specifically so your team can manage content without needing a developer."
- **Q: Will the site be fast on mobile?** "Performance optimization for Core Web Vitals is a standard part of every build, not an add-on."
- **Q: Do you handle SEO too?** "Technical SEO foundation is included; ongoing SEO strategy and content can be scoped as a separate engagement."
- **Q: How long does a typical marketing site take?** "Typically 4–8 weeks depending on page count and complexity."
**Related:** Web applications, E-commerce development, Ongoing support

#### `/services/web-applications`
**Hero:** "Custom tools built around how your team actually works." Sub: "Web applications and internal tools designed for your specific workflows, not a generic off-the-shelf fit."
**Included:** Requirements and workflow discovery · Custom UI/UX design for the application · Frontend and backend development · Database architecture and API integration · Authentication and permissions setup · QA and user acceptance testing · Deployment and documentation
**Who this is for:** Teams relying on spreadsheets or manual processes that need automation · Businesses needing a customer-facing portal or dashboard · Companies whose off-the-shelf software doesn't fit their actual workflow · Anyone building a new digital product from scratch
**Process:** 01 Discover: "Map current workflows and define application requirements." 02 Design: "Design the UI/UX around actual user tasks." 03 Build: "Develop frontend, backend, and integrations in transparent sprints." 04 Launch: "User acceptance testing, deployment, and documentation handoff."
**FAQ:**
- **Q: How is a web application different from a website?** "Applications involve dynamic functionality, data, and user accounts — websites are primarily content-focused. We assess which you actually need during scoping."
- **Q: How long does a custom application take to build?** "Varies significantly by scope — a focused tool might take 8–12 weeks, larger applications longer, estimated after discovery."
- **Q: Do you handle hosting and infrastructure?** "Yes, we can set up and manage hosting and infrastructure, or work within your existing environment."
- **Q: Can you integrate with our existing software (CRM, ERP, etc.)?** "Yes, API integration with existing systems is a standard part of application development."
- **Q: What if our requirements change mid-project?** "We build in checkpoints specifically to accommodate reasonable scope adjustments without derailing the timeline."
**Related:** Website development, E-commerce development, Ongoing support

#### `/services/ecommerce-development`
**Hero:** "Storefronts built for conversion and built to hold up." Sub: "Custom e-commerce development and platform migrations designed to perform at scale."
**Included:** Platform selection or custom storefront architecture · Product catalog and checkout flow design · Payment gateway and shipping integration · Performance optimization for high-traffic periods · Mobile-optimized shopping experience · Migration from legacy platforms with zero data loss · Post-launch monitoring during peak periods
**Who this is for:** Businesses outgrowing a template-based storefront · Companies migrating off a legacy or unsupported e-commerce platform · Anyone with high cart-abandonment or slow checkout issues · Retailers needing custom functionality standard platforms can't support
**Process:** 01 Scope: "Define catalog structure, checkout flow, and integration needs." 02 Build: "Develop the storefront with performance and conversion in mind." 03 Migrate: "Transfer product, customer, and order data with zero loss where migrating." 04 Launch: "Monitored go-live with extra attention during peak traffic periods."
**FAQ:**
- **Q: What e-commerce platform do you recommend?** "Depends on your catalog size, customization needs, and budget — we recommend during scoping rather than defaulting to one platform."
- **Q: Can you migrate our existing store without losing data?** "Yes, careful migration planning is standard practice to prevent data loss during platform transitions."
- **Q: Will the site handle high-traffic sales events?** "Performance optimization specifically accounts for traffic spikes during sales events and peak seasons."
- **Q: Do you integrate with our existing inventory or fulfillment system?** "Yes, integration with existing inventory, fulfillment, and payment systems is standard."
- **Q: How do you handle checkout conversion optimization?** "Checkout flow design is built with conversion best practices from the start, and can be further tested post-launch."
**Related:** Website development, Web applications, Ongoing support

#### `/services/ongoing-support`
**Hero:** "Launch day isn't the finish line." Sub: "Maintenance, monitoring, and updates that keep your site or application running well long after handoff."
**Included:** Uptime and performance monitoring · Security patches and dependency updates · Bug fixes and small feature requests · Monthly performance and health reports · Backup management · Priority support response times · Optional ongoing feature development
**Who this is for:** Businesses whose site was launched but has no maintenance plan · Companies that have been burned by an unresponsive previous developer · Anyone running a site or app that needs to stay current with security updates · Teams wanting a dedicated point of contact for ongoing changes
**Process:** 01 Onboard: "Audit current site or application health and set up monitoring." 02 Maintain: "Apply security patches, updates, and routine maintenance on a schedule." 03 Support: "Respond to bug reports and small feature requests within agreed response times." 04 Report: "Monthly health and performance reporting."
**FAQ:**
- **Q: Do we need an ongoing support plan if our site is already live?** "It's strongly recommended — security patches and monitoring prevent small issues from becoming major problems."
- **Q: What's included in monthly reporting?** "Uptime, performance metrics, completed maintenance tasks, and any issues addressed during the period."
- **Q: How fast is your support response time?** "Response times are defined in your specific support agreement based on priority level."
- **Q: Can you take over support for a site another agency built?** "Yes, we start with an audit of the existing codebase before taking over ongoing support."
- **Q: Can we add new features under a support plan, or does that need a new project?** "Small feature requests are typically included; larger features are scoped as a separate project."
**Related:** Website development, Web applications, E-commerce development

---

## 8. Case Studies Overview (`/case-studies`)

### 8.1 Hero (380px)
Background `#13131A`. Mono `#B4FF39`: "WORK" → H1 `#FAFAFA` (56px): "Selected builds." → sub (18px, `#A1A1A8`): "A look at the problems and the engineering behind each project."

### 8.2 Case Studies Grid
Background `#0A0A0F`. 90/60px. **4-card grid (2×2 desktop / 1-col mobile).** Each card: project screenshot + industry tag + metric callout + "View the project →" linking to the sub-page. **This grid must show exactly 4 cards, matching the 4 sub-pages built below — count parity enforced.**

### 8.3 Client Logo Grid (§5.6 pattern, repeated)

### 8.4 CTA Band + Footer (§4.3, §4.4)

---

## 9. Case Study Sub-Pages (Fix #10 — individual pages, never a scroll section)

Generate all 4 full sub-pages: `/case-studies/[client-1-slug]`, `/case-studies/[client-2-slug]`, `/case-studies/[client-3-slug]`, `/case-studies/[client-4-slug]`. Each has: hero image, project story (3–5 paragraphs), 6+ additional images (project screenshots across breakpoints, before/after performance scores), key facts panel, results panel, and a related-work strip.

### 9.1 `/case-studies/high-traffic-performance-rebuild`
**Hero:** Project screenshot, eyebrow "CASE STUDY · WEBSITE DEVELOPMENT" → H1 (56px): "98 Lighthouse performance score on a site handling 50k+ monthly visitors."
**Key facts panel:** Client: [Client 1], media publisher · Service: Website development · Timeline: 6 weeks · Outcome: 98 Lighthouse score, 50k+ monthly visitors
**Story:** Paragraph 1 — situation: the client's existing site was built on a legacy CMS that loaded slowly and scored poorly on Core Web Vitals. Paragraph 2 — audit: performance testing identified unoptimized images, render-blocking scripts, and an oversized theme as the main culprits. Paragraph 3 — rebuild: the site was rebuilt on a modern framework with an optimized image pipeline and minimal JavaScript footprint. Paragraph 4 — migration: content was migrated without disrupting existing SEO rankings or URL structure. Paragraph 5 — outcome: the rebuilt site achieved a 98 Lighthouse performance score while handling over 50,000 monthly visitors.
**Results panel:** "98 Lighthouse score" (metric styling) · "50k+ monthly visitors" · "6 weeks timeline"
**Related work:** links to the other 3 case studies.

### 9.2 `/case-studies/internal-tool-reporting-automation`
**Hero:** Project screenshot, eyebrow "CASE STUDY · WEB APPLICATIONS" → H1: "Custom internal tool that cut manual reporting time by 70%."
**Key facts panel:** Client: [Client 2], logistics company · Service: Web applications · Timeline: 10 weeks · Outcome: 70% reduction in manual reporting time
**Story:** Paragraph 1 — situation: the client's operations team spent hours each week manually compiling reports from disconnected spreadsheets. Paragraph 2 — discovery: workflow mapping revealed the reporting process could be almost entirely automated with the right data integrations. Paragraph 3 — build: a custom internal dashboard was built to pull data automatically from existing systems and generate reports on demand. Paragraph 4 — rollout: the team was trained on the new tool with documentation provided for future reference. Paragraph 5 — outcome: manual reporting time dropped by 70%, freeing the operations team for higher-value work.
**Results panel:** "70% less manual reporting time" (metric styling) · "10 weeks timeline" · "Automated data integration from 3 existing systems"
**Related work:** links to the other 3 case studies.

### 9.3 `/case-studies/ecommerce-checkout-conversion-rebuild`
**Hero:** Project screenshot, eyebrow "CASE STUDY · E-COMMERCE DEVELOPMENT" → H1: "E-commerce rebuild that increased checkout conversion by 34%."
**Key facts panel:** Client: [Client 3], DTC retail brand · Service: E-commerce development · Timeline: 8 weeks · Outcome: 34% checkout conversion increase
**Story:** Paragraph 1 — situation: the client's existing storefront had a high cart-abandonment rate concentrated at the checkout step. Paragraph 2 — audit: analysis identified a slow, multi-page checkout flow as the primary friction point. Paragraph 3 — rebuild: a streamlined single-page checkout was built with optimized payment and shipping integration. Paragraph 4 — testing: the new flow was tested across devices before a phased rollout to production traffic. Paragraph 5 — outcome: checkout conversion increased by 34% following the rebuild.
**Results panel:** "34% higher checkout conversion" (metric styling) · "8 weeks timeline" · "Single-page checkout flow"
**Related work:** links to the other 3 case studies.

### 9.4 `/case-studies/zero-downtime-legacy-migration`
**Hero:** Project screenshot, eyebrow "CASE STUDY · WEB APPLICATIONS" → H1: "Migrated a legacy platform to a modern stack with zero downtime."
**Key facts panel:** Client: [Client 4], B2B services platform · Service: Web applications · Timeline: 12 weeks · Outcome: Zero downtime migration
**Story:** Paragraph 1 — situation: the client's platform ran on an aging, unsupported framework that was becoming increasingly risky to maintain. Paragraph 2 — planning: a phased migration plan was designed to move functionality to a modern stack without disrupting active users. Paragraph 3 — build: core features were rebuilt and tested in parallel with the legacy system remaining live. Paragraph 4 — cutover: a carefully sequenced cutover moved traffic to the new system with rollback safeguards in place. Paragraph 5 — outcome: the migration completed with zero downtime and no disruption to active users.
**Results panel:** "Zero downtime" (metric styling) · "12 weeks timeline" · "Full feature parity at cutover"
**Related work:** links to the other 3 case studies.

---

## 10. About/Team Page (`/about`)

### 10.1 Hero (440px)
Background `#13131A`. Two-col 5/7. Left: mono "ABOUT [BUSINESS NAME]" → H1 (56px): "Engineers first. Marketers second." → sub (18px, `#A1A1A8`): "Founded in [YEAR], building sites and applications that hold up under real traffic." Right: single large team/office visual.

### 10.2 Our Story
Background `#0A0A0F`. 90/60px. Two-col 4/8. 4 paragraphs covering: founding frustration with agencies that ship slow, fragile sites; the decision to build an engineering-first culture; growth through referral and portfolio; current focus areas and team composition.

### 10.3 Meet the Team
Background `#13131A`. 90/60px. Team grid strictly 2×2 desktop / 1×N mobile — 4 people. Each: portrait + name + role + one-line credential. Placeholders: [Name 1] · Founder & Lead Engineer · [X] years / [Name 2] · Frontend Lead · [X] years / [Name 3] · Backend Engineer · [X] years / [Name 4] · Project Manager · [X] years

### 10.4 Client Logo Grid (§5.6 pattern, repeated)

### 10.5 CTA Band + Footer (§4.3, §4.4)

---

## 11. FAQ Page (`/faq`)

### 11.1 Hero (360px)
Background `#13131A`. Mono `#B4FF39`: "QUESTIONS" → H1 `#FAFAFA` (48px): "Everything you're wondering, grouped by topic."

### 11.2 FAQ Content (13 questions grouped, background `#0A0A0F`)

**Scope & Timeline**
1. "How long does a typical project take?" — "A marketing site typically takes 4–8 weeks; web applications and e-commerce builds vary more based on scope."
2. "What stack do you build on?" — "Depends on your specific needs — recommended during scoping rather than defaulting to one technology."
3. "Can you take over a project another developer started?" — "Yes, we audit the existing codebase before committing to a plan and timeline."

**Design & Development**
4. "Do you handle design, or just development?" — "Both — we can build from your existing designs or handle design and development together."
5. "Will the site or app be mobile-friendly?" — "Yes, responsive and performance-optimized builds are standard, not an add-on."
6. "Do you build accessible sites?" — "Yes, WCAG AA accessibility compliance is a standard part of every build."

**Support & Maintenance**
7. "What happens after launch?" — "Ongoing support and maintenance plans are available to keep your site updated and monitored."
8. "What if something breaks after launch?" — "Support response times are defined in your maintenance agreement based on priority level."
9. "Can we add features later without starting a whole new project?" — "Small feature requests are typically handled under a support plan; larger features are scoped separately."

**E-commerce Specific**
10. "What e-commerce platform do you recommend?" — "Depends on catalog size, customization needs, and budget — discussed during scoping."
11. "Can you migrate our store without losing data?" — "Yes, careful migration planning is standard practice to prevent data loss."

**Working Together**
12. "How is pricing structured?" — "Project-based pricing scoped to your specific requirements, discussed transparently during your discovery call."
13. "What happens on the first call?" — "A conversation about your goals, current site or systems, and a realistic scope and timeline — no pressure to commit."

### 11.3 CTA Band + Footer (§4.3, §4.4)

---

## 12. Contact Page (`/contact`)

### 12.1 Hero (360px)
Background `#0A0A0F`. Centered. Mono `#B4FF39`: "GET IN TOUCH" → H1 `#FAFAFA` (48px): "Start a project." → sub (16px, `#A1A1A8`): "Tell us what you're building — we'll follow up within 1 business day."

### 12.2 Contact Form
Background `#13131A`. 90/60px. Two-col 5/7. **Left:** contact detail block — [PHONE] · hello@[businessdomain].com · [STREET ADDRESS], [POSTCODE] [CITY] · Office hours: [Mon–Fri, 9am–6pm]. **Right (form):** NAME (required) · EMAIL (required) · COMPANY (required) · PROJECT TYPE (select: Website / Web application / E-commerce / Ongoing support / Not sure yet) · ESTIMATED BUDGET (select: Under $10k / $10k–$30k / $30k–$75k / $75k+) · TELL US ABOUT YOUR PROJECT (textarea). Submit: "Start a project →". Booking-calendar embed shown prominently below the form.

### 12.3 CTA Band + Footer (§4.3, §4.4)

---

## 13. Privacy Policy Page (`/privacy`)

Background `#0A0A0F`, `#FAFAFA` text. Max-width 760px. 6 subsections: Information We Collect · How We Use It · Data Storage & Security · Third-Party Sharing (hosting/analytics providers) · Cookies · Contact Us. CTA Band + Footer.

---

## 14. Terms of Service Page (`/terms`)

Background `#0A0A0F`, `#FAFAFA` text. Max-width 760px. 6 subsections: Development Agreement Summary · Intellectual Property & Source Code Ownership Upon Final Payment · Support & Maintenance Terms · Client Responsibilities · Limitation of Liability · Governing Law. CTA Band + Footer.

---

## 15. Technical & Accessibility (All Pages)

**HTML:** Semantic HTML5, one `<h1>` per page, hierarchical headings. Alt text on every image, labels on every input, `aria-label` on icon-only buttons.

**Accessibility (WCAG AA):** 4.5:1 minimum contrast (restrict lime/violet accents to large text or non-text UI elements where contrast is borderline against dark backgrounds). Focus: 2px `#B4FF39` outline, 2px offset. Full keyboard nav, skip-to-content link, focus-trapped mobile nav. Respect `prefers-reduced-motion`. Touch targets 44×44px min. Form errors via `aria-live="polite"`.

**Responsive:** Mobile ≤640px · Tablet 641–1024px · Desktop ≥1025px · Large ≥1440px (max content 1280px centered).

**Performance:** Lazy-load images except hero. WebP + JPEG fallback. `font-display: swap`. Max 2 font families (sans + mono). LCP <2.5s, CLS <0.1. (The agency's own site should itself demonstrate the performance standard it sells.)

**SEO:** Unique `<title>` and `<meta description>` per page. Canonical tags. Open Graph + Twitter summary_large_image. JSON-LD `ProfessionalService` sitewide, `Service` per detail page, `FAQPage` on homepage FAQ / `/faq` / every service detail FAQ, `CreativeWork` per case study.

**URLs:** Lowercase kebab-case throughout, no trailing slashes: `/`, `/services`, `/services/[slug]`, `/case-studies`, `/case-studies/[slug]`, `/about`, `/faq`, `/contact`, `/privacy`, `/terms`.

---

## 16. Delivery Checklist

- [ ] All 14 pages generated in full — no stubs.
- [ ] Exact hex values from §3 used throughout; gradient wash used sparingly (max 1 per section).
- [ ] 4 services shown = 4 detail pages built; 4 case studies shown = 4 sub-pages built — count parity verified.
- [ ] FAQ in 3 places: homepage (6 Q), `/faq` (13 Q), each service detail page (5 Q).
- [ ] Case studies are individual sub-pages with hero, story, images, key facts, results, related work — never a single scroll page.
- [ ] Client logo grid present on homepage, case studies overview, and about page.
- [ ] Process visualization present on homepage and reflected on service detail pages.
- [ ] Team section present on about page.
- [ ] No section duplication; device mockups limited to 1 per case study for screenshot framing only, never decorative; distinct hero per page.
- [ ] Strict kebab-case URLs.
- [ ] `/privacy` and `/terms` fully built.
- [ ] Responsive; Lighthouse Accessibility ≥95, SEO ≥95, Performance ≥95 (the site itself must prove the pitch).

**End of prompt.**



3