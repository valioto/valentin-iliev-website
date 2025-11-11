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
      collapsedDescription: "Reach high-intent audiences on and beyond Amazon.\nDrive measurable growth through Amazon's DSP — the only platform connecting verified shopping data with premium open-web inventory.",
      expandedContent: `Amazon DSP gives you access to high-value audiences not only across Amazon.com and Fire devices but also through leading publishers and partners like Twitch, IMDb, and Spotify.

I help advertisers and agencies:
• Reach real Amazon shoppers with precision targeting
• Extend campaigns across the open web using Amazon's unique data
• Balance prospecting and retargeting for full-funnel performance
• Continuously optimise pacing and delivery for consistent ROI

→ Your campaigns reach the right audience — wherever they are.`
    },
    {
      logo: amcLogo,
      logoAlt: "Amazon Marketing Cloud",
      title: "Amazon Marketing Cloud",
      collapsedDescription: "See the full picture of your advertising performance.\nAMC connects your data with Amazon's, unlocking insights that reveal what truly drives conversions.",
      expandedContent: `I use Amazon Marketing Cloud (AMC) to provide custom analytics beyond standard DSP reporting — helping you see how customers actually move from awareness to purchase.

Benefits include:
• Full-funnel attribution across channels and campaigns
• Transparent measurement of brand vs. performance impact
• Identification of untapped audience segments
• Informed budget reallocation to maximise ROAS

→ Turn raw data into clarity — and clarity into smarter media decisions.`
    }
  ];

  const complementaryServices = [
    {
      logo: metaLogo,
      logoAlt: "Meta (Instagram & Facebook)",
      title: "Meta (Instagram & Facebook)",
      collapsedDescription: "Turn social reach into measurable business growth.\nI design Meta campaigns that connect with your ideal customers — driving awareness, intent, or direct conversion.",
      expandedContent: `Meta's platforms (Facebook and Instagram) combine scale and precision — reaching over 450M users across Europe and North America.

I help clients:
• Build lookalike audiences informed by Amazon's shopper insights
• Design creative frameworks that boost engagement and recall
• Optimise spend between awareness and conversion campaigns
• Translate social data into actionable insights for other channels

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
                <p className="text-base md:text-lg text-muted-foreground">
                  Data-driven strategy. Transparent results. Seamless cross-channel execution.
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
              <Link to="/lets-talk">
                <Button className="bg-foreground text-background hover:bg-foreground/90 font-bold" size="lg">
                  Let's Talk
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
                Over 12 years at Amazon, I helped global brands and agencies turn strategy into measurable growth — managing campaigns with a total budget of more than €20 million ($23 million). My work focused on maximizing every advertising euro through data-driven media strategy and smart channel allocation.
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
