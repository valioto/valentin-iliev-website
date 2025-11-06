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
    title: "Continuous Optimisation Drives 61% Cost per Install uplift",
    keyMetric: "61% CPI Uplift",
    industry: "Automotive Industry",
    challenge: "An automotive client ran a Fire TV app install campaign with strong engagement but limited inventory availability. The agency aimed to sustain cost efficiency while expanding delivery.",
    approach: "After strong initial performance and inconsistent pacing, Valentin implemented daily delivery caps to stabilise pacing, and used historic traffic data to pitch a flight extension and budget increase to take advantage of seasonal delivery spikes.",
    impact: "The campaign was extended by 3 months and achieved €5.86 CPI, a 61% performance uplift from the initial €14.95, prompting the agency to increase quarterly investment by 62.6%. Valentin's insights also led to product team updates improving the placement's delivery consistency for future advertisers.",
    whyItMatters: "By combining granular pacing control and proactive client communication, Valentin turned a well-performing campaign into a long-term growth driver for both client and platform.",
  },
  {
    id: 2,
    title: "Turning Brand Study Insights into Creative Impact",
    keyMetric: "3% Brand Awareness Uplift",
    industry: "Energy Industry",
    challenge: "An energy brand ran an awareness campaign across DSP and Fire Devices with a brand study measuring multiple perception metrics. While results were positive overall, the study revealed underperformance in aided brand awareness, putting future investment at risk.",
    approach: "Valentin reviewed the brand study data and identified that limited logo visibility and weak brand cues in the creatives likely caused the shortfall. He collaborated with the creative agency to redesign assets — increasing logo prominence and integrating the brand into the call-to-action — ensuring stronger brand recall without compromising user experience.",
    impact: "In the next flight, the advertiser more than doubled their investment (from £145K to £340K) and achieved a 3% uplift in aided brand awareness — reversing the prior result.",
    whyItMatters: "By connecting data insights to creative execution, Valentin transformed measurement findings into concrete brand growth and deepened client confidence in Amazon's ecosystem.",
  },
  {
    id: 3,
    title: "Proving Incrementality",
    keyMetric: "4× Benchmark ROAS",
    industry: "Consumer Electronics Industry",
    challenge: "A consumer electronics advertiser questioned the sustainability of high ROAS performance achieved during the Black Friday period and hesitated to increase investment.",
    approach: "Valentin produced follow-up performance reports outside the Black Friday window, isolating the effect of his optimisations from seasonal noise. By contrasting markets, he demonstrated ROAS of 12.86 in his home market (UK) versus lower performance in other countries managed by other teams (i.e 2.09 ROAS in Germany), clearly linking results to targeting optimisations and retargeting strategy quality rather than seasonal demand.",
    impact: "His analysis convinced the client to double their home market campaign budget (+100%), investing an additional £40K mid-flight and helped his colleagues drive performance improvements. The final campaign achieved more than 4× the advertiser's benchmark ROAS.",
    whyItMatters: "Methodical performance validation builds credibility, overcomes objections, and converts skepticism into budget growth.",
  },
  {
    id: 4,
    title: "Recovering Performance After Attribution Model Change",
    keyMetric: "From £72 to £2 CPI",
    industry: "Food Delivery Industry",
    challenge: "Following a tracking system change, a major food delivery client saw reported CPI (Cost per Install) jump from £2 to £72, threatening immediate cancellation across all campaigns.",
    approach: "Valentin identified missing data granularity in the new attribution setup and escalated directly to the third party measurement partner, bypassing agency delays. Within two weeks, he secured the necessary data feed updates, restoring missing data and enabling refined optimisations.",
    impact: "The CPI dropped from £72 to under £2, fully recovering performance and driving a 17% budget increase (+£42.5K) within the quarter. The advertiser continued to invest and remained active after the global program's deprecation.",
    whyItMatters: "Hands-on problem solving and persistence under pressure can transform a near-cancellation into a performance rebound and upsell opportunity.",
  },
  {
    id: 5,
    title: "Brand Study Turnaround",
    keyMetric: "87.9% Budget Increase",
    industry: "Automotive Industry",
    challenge: "A global automotive brand planned a awareness campaign via Amazon's Fire Tablet, leveraging a new third-party brand study provider to measure its impact. Just days before launch, the measurement setup failed due to a previously unknown technical limitation, threatening half of the campaign's budget and risking client trust.",
    approach: "Valentin identified a viable alternative: upgrading to a different brand study provider requiring higher investment and impressions. To meet the eligibility threshold without additional cost, he negotiated 6M added-value impressions and secured cross-functional approval from product, yield, and leadership teams within 48 hours.",
    impact: "The revised campaign achieved improved performance across reach, viewability, and CTR, unlocking richer brand-lift insights. The client renewed the campaign for the next quarter with an additional investment £29.9K (87.9% budget uplift), while Amazon updated its internal documentations to prevent similar measurement issues for other accounts.",
    whyItMatters: "Creative problem-solving under time pressure prevented revenue loss, improved campaign outcomes, and set a new internal standard for brand study execution.",
  },
  {
    id: 6,
    title: "Seasonal Opportunity",
    keyMetric: "£134K Revenue Added",
    industry: "Automotive Industry",
    challenge: "A leading automotive group had consistently strong results on Fire TV and Tablet, but media allocations missed a key opportunity: post-Christmas, when traffic for these placements surges as gifted devices are being activated for the first time.",
    approach: "Valentin analyzed seasonal device activation data and demonstrated a 375% usage spike for Fire Tablet and 183% for Fire TV after Christmas. He pitched a device-heavy strategy to the media agency, following up through QBRs and reporting cycles until buy-in was secured.",
    impact: "Two post-Christmas upsells were signed, adding £134K in incremental revenue. Campaigns outperformed the automotive benchmark with 2.21% and 1.81% CTRs versus a 1.4% baseline. The results and methodology were shared across Amazon's EU teams as a best practice.",
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
