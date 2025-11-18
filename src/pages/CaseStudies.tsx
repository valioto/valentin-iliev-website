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
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Day-Part Optimisation Drives 61% Cost per Install (CPI) Improvement",
    keyMetric: "61% CPI Uplift",
    industry: "Automotive Industry",
    challenge: "I took over an always-on Fire TV app install campaign for an automotive advertiser. The campaign was already meeting its targets, but the agency was open to further improving efficiency and scale if meaningful opportunities existed.",
    approach: "After reviewing the campaign's performance patterns, I analysed conversion behaviour across different times of day and identified high-performing windows with consistently stronger cost efficiency. Seeing the opportunity, I proactively recommended a day-part targeting strategy that concentrated delivery during the hours with the highest likelihood of driving installs. This optimisation significantly improved CPI and strengthened the overall performance profile of the campaign. The results were compelling enough that the agency requested a flight extension to further capitalise on the uplift. To support the extended period, I also reviewed historic device traffic trends and recommended running the extension during periods with increased user activity to sustain results.",
    impact: "The campaign was extended by 3 months and achieved a €5.86 CPI — a 61% improvement from the original €14.95. The agency increased quarterly investment by 62.6%, and my analysis contributed to product-side improvements supporting more consistent delivery for future campaigns.",
    whyItMatters: "By proactively analysing an already-successful campaign and introducing strategic day-parting, I unlocked substantial performance gains and inspired incremental investment — showing how thoughtful optimisation can elevate always-on activity into a long-term growth driver.",
  },
  {
    id: 2,
    title: "Turning Brand Study Insights into Creative Impact",
    keyMetric: "3% ABA uplift",
    industry: "Energy Industry",
    challenge: "An energy brand ran an awareness campaign across DSP and Fire Devices with a brand study measuring multiple perception metrics. While results were positive overall, the study revealed underperformance in aided brand awareness (ABA), putting future investment at risk.",
    approach: "I reviewed the brand study data and identified that limited logo visibility and weak brand cues in the creatives likely caused the shortfall. I collaborated with the creative agency to redesign assets — increasing logo prominence and integrating the brand into the call-to-action — ensuring stronger brand recall without compromising user experience.",
    impact: "In the next flight, the advertiser more than doubled their investment (from £145K to £340K) and achieved a 3% uplift in ABA — reversing the prior result.",
    whyItMatters: "By connecting data insights to creative execution, I transformed measurement findings into concrete brand growth and strengthened client confidence in Amazon's ecosystem.",
  },
  {
    id: 3,
    title: "Proving Incrementality",
    keyMetric: "4× ROAS Benchmark",
    industry: "Consumer Electronics Industry",
    challenge: "A consumer electronics advertiser questioned the sustainability of high Return on Ad Spend (ROAS) achieved during the Black Friday period and hesitated to increase investment.",
    approach: "I produced follow-up performance reports outside the Black Friday window, isolating the effect of my optimisations from seasonal noise. By contrasting markets, I demonstrated a 12.86 ROAS in the home market (UK) versus 2.09 in Germany, clearly linking results to targeting optimisation and retargeting strategy quality rather than seasonal demand.",
    impact: "My analysis convinced the client to double their home market campaign budget (+100%), investing an additional £40K mid-flight and helping colleagues drive performance improvements. The final campaign achieved more than 4× the advertiser's benchmark ROAS.",
    whyItMatters: "Methodical performance validation builds credibility, overcomes objections, and converts skepticism into budget growth.",
  },
  {
    id: 4,
    title: "Recovering Performance After Attribution Model Change",
    keyMetric: "From £72 to £2 CPI",
    industry: "Food Delivery Industry",
    challenge: "Following a tracking system change, a major food delivery client saw reported Cost per Install (CPI) jump from £2 to £72, threatening immediate cancellation across all campaigns.",
    approach: "I identified missing data granularity in the new attribution setup and escalated directly to the third-party measurement partner, bypassing agency delays. Within two weeks, I secured the necessary data feed updates, restoring missing data and enabling refined optimisations.",
    impact: "The CPI dropped from £72 to under £2, fully recovering performance and driving a 17% budget increase (+£42.5K) within the quarter. The advertiser continued to invest and remained active after the global program's deprecation.",
    whyItMatters: "Hands-on problem solving and persistence under pressure can transform a near-cancellation into a performance rebound and upsell opportunity.",
  },
  {
    id: 5,
    title: "Brand Study Turnaround",
    keyMetric: "87.9% Budget Increase",
    industry: "Automotive Industry",
    challenge: "A global automotive brand planned an awareness campaign via Amazon's Fire Tablet, leveraging a third-party brand study provider to measure brand lift (BL). Days before launch, the measurement setup failed due to a technical limitation, threatening half of the campaign's budget and risking client trust.",
    approach: "I identified an alternative: upgrading to a different brand study provider requiring higher impressions. To meet the eligibility threshold without additional cost, I negotiated 6M added-value impressions and secured cross-functional approval from product, yield, and leadership teams within 48 hours.",
    impact: "The revised campaign achieved improved results across reach, viewability, and Click-Through Rate (CTR). The client renewed the campaign the next quarter with an additional £29.9K investment (87.9% budget uplift). Amazon updated internal documentation to prevent similar issues for other accounts.",
    whyItMatters: "Creative problem-solving under time pressure prevented revenue loss, improved campaign outcomes, and set a new internal standard for brand study execution.",
  },
  {
    id: 6,
    title: "Seasonal Opportunity",
    keyMetric: "£134K Revenue Added",
    industry: "Automotive Industry",
    challenge: "A leading automotive group had strong results on Fire TV and Tablet but had not fully capitalised on seasonal surges in post-Christmas device activation and Click-Through Rate (CTR) performance.",
    approach: "I analysed device activation trends and identified a 375% spike for Fire Tablet and 183% for Fire TV after Christmas. I pitched a device-heavy strategy timed to these periods and followed up through QBRs and reporting cycles until buy-in was secured.",
    impact: "Two post-Christmas upsells were signed, adding £134K in incremental revenue. Campaigns outperformed the automotive baseline with CTRs of 2.21% and 1.81% versus a 1.4% benchmark. The methodology was shared across Amazon's EU teams as a best practice.",
    whyItMatters: "Strategic timing and data-driven persuasion turned seasonal insight into measurable growth and a replicable upsell playbook for other markets.",
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
              Explore successful campaign optimisations and measurable outcomes across automotive, energy, consumer electronics, and food delivery sectors.
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
