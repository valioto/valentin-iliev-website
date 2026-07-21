Text-only copy edits across the site. No layout, styling, or interaction changes.

## 1. index.html
- Update `<title>` to: `27x | Growth for Funded Consumer Startups (Amazon DSP, Meta, TikTok)`
- Update `<meta name="description">`, plus matching `og:title`, `og:description`, `twitter:title`, `twitter:description` to the new copy provided.

## 2. src/pages/Index.tsx
- Hero subline: replace with the new "Founder of 27x…" paragraph.
- "Get started" intro paragraph: replace with the new "My deepest experience…" paragraph.
- Amazon DSP `expandedContent`:
  - Change the "Full-funnel audience strategy" bullet to remove "Automotive".
  - Add the new "Works for brands that don't sell on Amazon…" sentence just before the closing `→ Your campaigns reach the right audience - wherever they are.` line.
- Amazon Marketing Cloud `expandedContent`: replace the first sentence with the new AMC opener (keep all bullets as-is).
- About blurb (image + text section): replace the final sentence with "Today, I bring that same performance mindset to funded consumer startups, from seed to Series B."

## 3. src/pages/About.tsx
- Append a new closing `<p>` after the existing paragraphs: "Why startups? Early-stage budgets have no room for waste…" (matches existing paragraph styling).

## 4. src/pages/CaseStudies.tsx
- Intro line: replace with the new "Results from 12 years at Amazon Ads…" copy.
- Delete case study id 2 ("Turning Brand Study Insights into Creative Impact").
- Prepend a new case study as the first array entry:
  - Title: "Hyundai Brand Space: Amazon's First Automotive Showroom in Europe"
  - Industry (category label): "Automotive Industry · Public Case Study"
  - keyMetric: "First of its kind in Europe"
  - Challenge / Approach / Impact / Why it matters: exact copy provided.
  - Add a link at the end of the modal content (opens new tab) below the Why-it-matters block: "Read Hyundai's official announcement" → https://www.hyundai.news/eu/articles/press-releases/hyundai-launches-its-first-european-brand-space-on-amazon.html. Style: same muted small link treatment used elsewhere (e.g. `text-sm underline hover:text-foreground`). To keep this minimally invasive, add an optional `externalLink?: { label; url }` field on the `CaseStudy` interface and render it conditionally at the bottom of the modal — no visual change for other cards.
- Day-Part case study: change `keyMetric` from "61% CPI Uplift" to "61% CPI Reduction"; replace `impact` with the new "CPI fell from €14.95 to €5.86…" text.
- Attribution case study (£72→£2): replace `impact` and `whyItMatters` with new copy.
- Incrementality (4× ROAS): replace `impact` with new copy.
- Seasonal case study: change `keyMetric` to "CTRs 58% Above Benchmark"; replace `impact` with new device-activation copy.
- Brand Study Turnaround: replace `whyItMatters` with new copy.
- Reorder array to: Hyundai Brand Space, Day-Part, £72→£2 CPI, 4× ROAS, Seasonal (CTRs 58%), Brand Study Turnaround.

## 5. src/pages/ReachOut.tsx
- Directly under the "Request a consultation" submit button, add a small muted line: "Currently taking on two founding clients at reduced rates in exchange for a public case study." (styled `text-xs text-muted-foreground mt-2`).

No other files touched. No design tokens, layout, or component behaviour changes.
