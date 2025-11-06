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
      description: "I help brands and agencies connect with high-value, high-intent audiences, both on and off Amazon. Amazon's DSP provides unmatched access to 230 million unique monthly shoppers across the US and 75 million in the EU. My expertise lies in building tailored DSP campaigns that leverage this immense scale and purchase data to drive verifiable business outcomes."
    },
    {
      logo: amcLogo,
      logoAlt: "Amazon Marketing Cloud",
      title: "Amazon Marketing Cloud",
      description: "Want to know the true impact of your ad spend? I use Amazon Marketing Cloud to help you gain a full-funnel view of your campaigns, connecting your data with Amazon's to reveal powerful insights. This allows us to optimize your strategy for maximum effectiveness, ensuring every investment works harder."
    }
  ];

  const complementaryServices = [
    {
      logo: metaLogo,
      logoAlt: "Instagram and Facebook",
      title: "Instagram and Facebook",
      description: "I leverage the unparalleled scale and surgical precision targeting of Meta's platforms (Facebook & Instagram) to secure the ideal audience for your brand. The Meta family of apps now reaches over 452 and 545 million monthly active users across the US and EU accordingly, providing massive, reliable scale. I build campaigns that directly match your core business objectives, ensuring every advertising resource is spent to deliver the measurable results you need for awareness, intent, or purchase."
    },
    {
      logo: tiktokLogo,
      logoAlt: "TikTok",
      title: "TikTok",
      description: "TikTok is key for future-proofing your brand. With 170 million monthly active US users and 169 million EU users, its explosive growth is now rapidly attracting older, high-value audiences alongside its core youth market. I create tailored TikTok strategies that generate high-impact exposure and deep consumer engagement, designed to meet your specific goals—whether that is brand awareness, driving consideration, or maximizing direct conversions."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="container max-w-6xl pt-24 md:pt-32 pb-16 md:pb-24 px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Hello, I'm Valentin Iliev,
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Founder of 27x — a Media Buyer & Consultant who scales brands across Europe and North America.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img 
                src={heroPortrait} 
                alt="Valentin Iliev - Media Buyer and Consultant" 
                className="w-full h-auto"
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
              <Link to="/reach-out">
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
