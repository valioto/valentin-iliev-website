import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow container max-w-6xl pt-40 sm:pt-44 md:pt-44 pb-16 md:pb-24 px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                I help brands turn advertising investment into consistent, measurable results.
              </p>
              
              <p>
                Before launching 27x, I spent 12 years at Amazon, where I led advertising strategy and execution for some of the world's most recognisable brands - managing more than €20 million ($23 million) in media investment.
              </p>
              
              <p>
                I've worked across a range of industries - from automotive and finance to electronics, software, and travel - but my true passion lies in turning data into strategies that deliver real performance. While managing Amazon's Automotive category first in the UK and later in Germany, and also serving as the Global Account Manager for Volkswagen Group, I mastered the design of performance frameworks that deliver both scale and precision.
              </p>
              
              <p>
                At Amazon, I introduced a new generation of Automotive audience targeting, built from a database of millions of vehicle owners. This innovation improved campaign accuracy, boosted performance, and became a blueprint for how automotive and other advertisers across Europe reach their ideal customers. I also led the launch of Hyundai's Brand Space, Amazon's first automotive showroom in Europe - an immersive digital experience that transformed how car brands tell their stories online.
              </p>
              
              <p>
                Today, I bring that same strategic and performance-driven mindset to every brand I work with - helping clients cut through noise, optimise their spend, and achieve advertising that truly moves the needle.
              </p>
              
              <p>
                Why startups? Early-stage budgets have no room for waste, and every bit of spend has to convert into growth. I work with consumer fintech, travel, app and subscription brands, using Meta and TikTok to prove paid growth works, then adding Amazon to scale once it does.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden">
              <img 
                src={aboutPortrait} 
                alt="Valentin Iliev" 
                className="w-full h-full object-cover"
                width="600"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </main>
      
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default About;
