import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import BrandLogos from "@/components/BrandLogos";
import heroPortrait from "@/assets/hero-portrait.jpg";
import workspacePortrait from "@/assets/workspace-portrait.jpg";
import amazonLogo from "@/assets/amazon-logo.png";
import amcLogo from "@/assets/amc-logo.png";
import metaLogo from "@/assets/meta-logo.png";
import tiktokLogo from "@/assets/tiktok-logo.png";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      logo: amazonLogo,
      logoAlt: "Amazon DSP",
      title: "Amazon DSP",
      description: "I help brands and agencies connect with high value audiences, both on and off Amazon. My expertise lies in building tailored DSP campaigns that meet your unique business objectives effectively.",
      popoverContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      logo: amcLogo,
      logoAlt: "Amazon Marketing Cloud",
      title: "Amazon Marketing Cloud",
      description: "Want to know the true impact of your ad spend? I use Amazon Marketing Cloud to help you gain a full-funnel view of your campaigns, connecting your data with Amazon's to reveal powerful insights. This allows us to optimize your strategy for maximum effectiveness, ensuring every investment works harder.",
      popoverContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      logo: metaLogo,
      logoAlt: "Instagram and Facebook",
      title: "Instagram and Facebook",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      popoverContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      logo: tiktokLogo,
      logoAlt: "TikTok",
      title: "TikTok",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      popoverContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="container max-w-6xl pt-24 md:pt-32 pb-16 md:pb-24 px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Hello! I'm Valentin Iliev, the Media Buyer and Consultant who scales Brands effectively across Europe and North America.
              </h1>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden">
                <img 
                  src={heroPortrait} 
                  alt="Valentin Iliev - Media Buyer and Consultant" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-6xl px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.title} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
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
                  src={workspacePortrait} 
                  alt="Valentin Iliev at work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in order-1 md:order-2" style={{ animationDelay: "0.2s" }}>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Brands Section */}
        <BrandLogos />
      </main>
    </div>
  );
};

export default Index;
