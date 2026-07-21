import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CaseStudy {
  id: number;
  title: string;
  keyMetric: string;
  industry: string;
  challenge: string;
  approach: string;
  impact: string;
  whyItMatters: string;
  externalLink?: { label: string; url: string };
}

const caseStudies: CaseStudy[] = [
  {
    id: 7,
    title: "Hyundai Brand Space: Amazon's First Automotive Showroom in Europe",
    keyMetric: "First of its kind in Europe",
    industry: "Automotive Industry · Public Case Study",
    challenge: "Car brands could advertise on Amazon but had no home there. No place to tell a brand story to Amazon's millions of shoppers, or connect that attention to a purchase journey.",
    approach: "As Senior Solutions Manager in Amazon's EU Brand Innovation Lab, I led the product strategy and production of Europe's first automotive Brand Space, an immersive digital showroom launched with Hyundai in Germany in April 2024. It guided Amazon customers from display ads through brand content to car configurators and local dealership test drives.",
    impact: "Launched in Germany in April 2024 and later expanded to the UK. It was a first-of-its-kind retail media product, announced publicly by Hyundai Motor Europe. The Brand Space carried a full measurement framework covering brand lift, page engagement and consideration signals like configurator visits and test-drive requests, plus lead generation that captured dealer interest directly inside Amazon. The format became a blueprint for how non-endemic brands build presence inside Amazon.",
    whyItMatters: "The playbook for reaching Amazon's audiences without selling on Amazon, the same approach I bring to fintech, travel and app brands today.",
    externalLink: {
      label: "Read Hyundai's official announcement",
      url: "https://www.hyundai.news/eu/articles/press-releases/hyundai-launches-its-first-european-brand-space-on-amazon.html",
    },
  },
  {
    id: 1,
    title: "Day-Part Optimisation Drives 61% Cost per Install (CPI) Improvement",
    keyMetric: "61% CPI Reduction",
    industry: "Automotive Industry",
    challenge: "I took over an always-on Fire TV app install campaign for an automotive advertiser. The campaign was already meeting its targets, but the agency was open to further improving efficiency and scale if meaningful opportunities existed.",
    approach: "After reviewing the campaign's performance patterns, I analysed conversion behaviour across different times of day and identified high-performing windows with consistently stronger cost efficiency. Seeing the opportunity, I proactively recommended a day-part targeting strategy that concentrated delivery during the hours with the highest likelihood of driving installs. This optimisation significantly improved CPI and strengthened the overall performance profile of the campaign. The results were compelling enough that the agency requested a flight extension to further capitalise on the uplift. To support the extended period, I also reviewed historic device traffic trends and recommended running the extension during periods with increased user activity to sustain results.",
    impact: "CPI fell from €14.95 to €5.86, making installs 61% cheaper. The results earned a three-month flight extension, and the agency scaled investment by 62.6% into a proven winner.",
    whyItMatters: "By proactively analysing an already-successful campaign and introducing strategic day-parting, I unlocked substantial performance gains and inspired incremental investment - showing how thoughtful optimisation can elevate always-on activity into a long-term growth driver.",
  },
  {
    id: 4,
    title: "Recovering Performance After Attribution Model Change",
    keyMetric: "From £72 to £2 CPI",
    industry: "Food Delivery Industry",
    challenge: "Following a tracking system change, a major food delivery client saw reported Cost per Install (CPI) jump from £2 to £72, threatening immediate cancellation across all campaigns.",
    approach: "I identified missing data granularity in the new attribution setup and escalated directly to the third-party measurement partner, bypassing agency delays. Within two weeks, I secured the necessary data feed updates, restoring missing data and enabling refined optimisations.",
    impact: "Reported CPI was restored from £72 to under £2 within two weeks. The advertiser kept investing and increased the budget by 17% that quarter to capitalise on the strong performance.",
    whyItMatters: "Most 'performance collapses' are really measurement problems. I diagnose broken attribution before touching budgets, the same discipline every consumer app needs after iOS 14.",
  },
  {
    id: 3,
    title: "Proving Incrementality",
    keyMetric: "4× ROAS Benchmark",
    industry: "Consumer Electronics Industry",
    challenge: "A consumer electronics advertiser questioned the sustainability of high Return on Ad Spend (ROAS) achieved during the Black Friday period and hesitated to increase investment.",
    approach: "I produced follow-up performance reports outside the Black Friday window, isolating the effect of my optimisations from seasonal noise. By contrasting markets, I demonstrated a 12.86 ROAS in the home market (UK) versus 2.09 in Germany, clearly linking results to targeting optimisation and retargeting strategy quality rather than seasonal demand.",
    impact: "The campaign closed at more than 4× the advertiser's benchmark ROAS (12.86 vs 2.09 in the contrast market). On the strength of the analysis, the client doubled the home-market budget mid-flight.",
    whyItMatters: "Methodical performance validation builds credibility, overcomes objections, and converts skepticism into budget growth.",
  },
  {
    id: 6,
    title: "Seasonal Opportunity",
    keyMetric: "CTRs 58% Above Benchmark",
    industry: "Automotive Industry",
    challenge: "A leading automotive group had strong results on Fire TV and Tablet but had not fully capitalised on seasonal surges in post-Christmas device activation and Click-Through Rate (CTR) performance.",
    approach: "I analysed device activation trends and identified a 375% spike for Fire Tablet and 183% for Fire TV after Christmas. I pitched a device-heavy strategy timed to these periods and followed up through QBRs and reporting cycles until buy-in was secured.",
    impact: "By timing spend to post-Christmas device-activation surges (+375% Fire Tablet, +183% Fire TV), campaigns hit CTRs of 2.21% and 1.81% against a 1.4% benchmark. The methodology was adopted across Amazon's EU teams as best practice.",
    whyItMatters: "Strategic timing and data-driven persuasion turned seasonal insight into measurable growth and a replicable upsell playbook for other markets.",
  },
  {
    id: 5,
    title: "Brand Study Turnaround",
    keyMetric: "87.9% Budget Increase",
    industry: "Automotive Industry",
    challenge: "A global automotive brand planned an awareness campaign via Amazon's Fire Tablet, leveraging a third-party brand study provider to measure brand lift (BL). Days before launch, the measurement setup failed due to a technical limitation, threatening half of the campaign's budget and risking client trust.",
    approach: "I identified an alternative: upgrading to a different brand study provider requiring higher impressions. To meet the eligibility threshold without additional cost, I negotiated 6M added-value impressions and secured cross-functional approval from product, yield, and leadership teams within 48 hours.",
    impact: "The revised campaign achieved improved results across reach, viewability, and Click-Through Rate (CTR). The client renewed the campaign the next quarter with an additional £29.9K investment (87.9% budget uplift). Amazon updated internal documentation to prevent similar issues for other accounts.",
    whyItMatters: "When measurement breaks days before launch, I fix it without burning the budget. This one took 48 hours and cross-functional coordination, with no spend wasted.",
  },
];

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-40 sm:pt-44 md:pt-44 pb-16 px-6">
          <div className="container max-w-6xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Results from 12 years at Amazon Ads, managing over €20M for global brands. Client names are under NDA, but the methods are exactly what 27x clients get, including app-install and awareness work for brands that don't sell on Amazon.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-20 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {caseStudies.map((caseStudy) => (
                <article
                  key={caseStudy.id}
                  onClick={() => setSelectedCase(caseStudy)}
                  className="bg-card border border-border rounded-lg p-6 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-mono">
                    {caseStudy.industry}
                  </p>
                  <h2 className="text-lg font-bold font-mono mb-4 leading-tight">
                    {caseStudy.title}
                  </h2>
                  <p className="text-3xl font-bold text-primary mb-4">
                    {caseStudy.keyMetric}
                  </p>
                  <p className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Read more →
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Case Study Modal */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-mono leading-tight pr-8">
              {selectedCase?.title}
            </DialogTitle>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono pt-2">
              {selectedCase?.industry}
            </p>
          </DialogHeader>
          
          {selectedCase && (
            <div className="space-y-6 pt-4">
              <div className="text-3xl font-bold text-primary">
                {selectedCase.keyMetric}
              </div>

              <div>
                <h3 className="text-sm font-bold font-mono uppercase mb-2 text-foreground">
                  Challenge
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {selectedCase.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold font-mono uppercase mb-2 text-foreground">
                  Approach
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {selectedCase.approach}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold font-mono uppercase mb-2 text-foreground">
                  Impact
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {selectedCase.impact}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold font-mono uppercase mb-2 text-foreground">
                  Why it matters
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {selectedCase.whyItMatters}
                </p>
              </div>

              {selectedCase.externalLink && (
                <div>
                  <a
                    href={selectedCase.externalLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {selectedCase.externalLink.label} →
                  </a>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default CaseStudies;
