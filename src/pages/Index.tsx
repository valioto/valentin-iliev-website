import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import BrandLogos from "@/components/BrandLogos";
import Footer from "@/components/Footer";
import heroPortrait from "@/assets/hero-portrait-new.jpg";
import aboutMeInfo from "@/assets/about-me-info.jpg";
import amazonLogo from "@/assets/amazon-logo.png";
import amcLogo from "@/assets/amc-logo.png";
import metaLogo from "@/assets/meta-logo.png";
import tiktokLogo from "@/assets/tiktok-logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreServices = [
    {
      logo: amazonLogo,
      logoAlt: "Amazon DSP",
      title: "Amazon DSP",
      collapsedDescription: "Leverage Amazon's verified shopper data to programmatically buy across the entire media mix. Access Premium Display on the open web, exclusive inventory on Streaming TV, and Audio.",
      expandedContent: `Unlock the full power of Amazon's first-party data beyond the search results. I design programmatic strategies that pair high-intent audiences with high-impact inventory sources.

Access Premium Supply:
• Display & Video: Brand-safe placements across Amazon O&O (IMDb, Fire Tablet) and top global publishers (APS).
• Streaming TV (STV): Exclusive access to Prime Video, Twitch, Freevee, and top-tier network apps.
• Audio: Reach listeners on Amazon Music, Spotify, and leading podcasts.

My execution covers:
• Full-funnel audience strategy (In-market, Lifestyle, Remarketing, Automotive and more).
• Precision targeting to reduce wastage and improve your target KPI.
• Cross-device frequency management.
• Continuous optimisation.

→ Your campaigns reach the right audience — wherever they are.`
    },
    {
      logo: amcLogo,
      logoAlt: "Amazon Marketing Cloud",
      title: "Amazon Marketing Cloud",
      collapsedDescription: "Go beyond standard reporting. I use SQL-based queries in AMC to connect your first-party data with Amazon's signals, revealing the true path to purchase and attribution across channels.",
      expandedContent: `Standard attribution has blind spots. I use Amazon Marketing Cloud to analyse the full customer journey, measuring the impact of every ad impression—not just the last click.

Unlock Deep Insights:

• Multi-Touch Attribution: Accurately credit the impact of upper-funnel streaming and display ads on final conversions.

• Audience Intelligence: Granular analysis of demographics, shopping behaviours, and overlap between your organic and paid customers.

• Path to Purchase: Visualise the exact sequence of touchpoints that leads to a sale.

My execution covers:

• Custom query building to answer specific business questions.

• New-to-Brand analysis to prove incremental growth.

→ Turn raw data into clarity — and clarity into smarter media decisions.`
    }
  ];

  const complementaryServices = [
    {
      logo: metaLogo,
      logoAlt: "Meta (Instagram & Facebook)",
      title: "Meta (Instagram & Facebook)",
      collapsedDescription: "Scale your brand on Instagram and Facebook with precision. I combine performance creative with advanced audience signals—including Amazon shopper insights—to drive profitable growth.",
      expandedContent: `Stop relying on basic boosting. I engineer Meta accounts for performance, using data-led structures that feed the algorithm high-quality conversion signals.

Strategic Focus:

• Audience Architecture: Injecting Amazon shopper DNA into Meta targeting for smarter prospecting and retargeting.

• Performance Creative: Designing iterative ad frameworks (Reels, Static, Carousel) that stop the scroll and drive action.

• Signal Resilience: Mitigating data loss through robust setup and first-party data integration.

My execution covers:

• Full-funnel campaign structure (Awareness to Conversion).

• Scaling via Advantage+ shopping campaigns.

• Rigorous A/B testing of creative concepts to combat fatigue.

• Cross-channel attribution analysis.

→ Integrated strategy that connects social visibility with real sales.`
    },
    {
      logo: tiktokLogo,
      logoAlt: "TikTok",
      title: "TikTok",
      collapsedDescription: "Capture attention where it matters most.\nTikTok delivers high-impact exposure and deep engagement across all demographics — not just Gen Z.",
      expandedContent: `With 170M+ monthly US users and fast growth among older audiences, TikTok is now a mainstream performance channel.

I help brands:
• Build creative-led campaigns optimised for TikTok's algorithm
• Combine short-form storytelling with conversion goals
• Integrate TikTok learnings into broader media strategies
• Reach emerging audiences before your competitors do

→ From awareness to action — TikTok done with measurable purpose.`
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="container max-w-6xl pt-40 sm:pt-44 md:pt-44 pb-16 md:pb-24 px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Hi, I'm Valentin Iliev
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Founder of 27x — a Media Buyer & Consultant who helps brands turn ad spend into measurable growth across Amazon DSP, Meta, and TikTok.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img 
                src={heroPortrait} 
                alt="Valentin Iliev - Media Buyer and Consultant" 
                className="w-full h-auto"
                width="800"
                height="1067"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-6xl px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Get started
            </h2>
            
            {/* Intro Paragraph */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-16 animate-fade-in">
              My core focus and expertise lie in Amazon DSP and Amazon Marketing Cloud (AMC). For clients seeking consistent cross-channel performance, I also support campaigns on Meta and TikTok — integrating insights from Amazon's ecosystem to maximise results.
            </p>

            {/* Core Amazon Services */}
            <div className="mb-20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
                Amazon services
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {coreServices.map((service, index) => (
                  <div 
                    key={service.title} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.2 + 0.1 * index}s` }}
                  >
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </div>

            {/* Complementary Platforms */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
                Other platforms
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {complementaryServices.map((service, index) => (
                  <div 
                    key={service.title} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.5 + 0.1 * index}s` }}
                  >
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA at end of services */}
            <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Link to="/request-a-consultation">
              <Button className="bg-foreground text-background hover:bg-foreground/90 font-bold" size="lg">
                → Request a consultation
              </Button>
            </Link>
            </div>
          </div>
        </section>

        {/* Image & Text Section */}
        <section className="py-16 md:py-24 bg-accent/20">
          <div className="container max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden">
                <img 
                  src={aboutMeInfo} 
                  alt="Valentin Iliev" 
                  className="w-full h-full object-cover"
                  width="600"
                  height="800"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in order-1 md:order-2" style={{ animationDelay: "0.2s" }}>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                I'm a Media Buyer and Consultant who knows the ins and outs of scaling brands through performance-driven advertising.
              </p>
              
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Over 12 years at Amazon, I helped global brands and agencies turn strategy into measurable growth — managing campaigns worth more than €20 million ($23 million). My work focused on maximising every advertising euro through data-driven media strategy and smart channel allocation.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Today, I bring that same performance mindset to every client partnership.
            </p>
            </div>
          </div>
          </div>
        </section>

        {/* Brands Section */}
        <BrandLogos />
      </main>
      
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Index;
