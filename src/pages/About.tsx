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
                I help brands turn advertising investment into consistent, measurable growth.
              </p>
              
              <p>
                Before launching <strong>27x</strong>, I spent 12 years at <strong>Amazon</strong>, leading advertising strategy and execution for some of the world's most recognised brands — managing more than €20 million ($23 million) in total media investment.
              </p>
              
              <p>
                My experience spans automotive, finance, electronics, software, and travel, but my core expertise lies in understanding what drives performance at scale.
              </p>
              
              <p>
                While managing <strong>Amazon</strong>'s Automotive category first in the UK and later in Germany, and also serving as Global Account Manager for <strong>Volkswagen Group</strong>, I mastered the design of data-driven strategies that deliver both scale and precision.
              </p>
              
              <p>
                As part of that work, I introduced a new generation of automotive audience targeting built from millions of verified vehicle owners — improving accuracy, boosting ROI, and setting a blueprint adopted across Europe.
              </p>
              
              <p>
                I also led the launch of <strong>Hyundai's Brand Space</strong>, <strong>Amazon</strong>'s first automotive showroom in Europe — transforming how car brands connect storytelling with measurable outcomes.
              </p>
              
              <p>
                Today, through <strong>27x</strong>, I apply that same strategic and performance-driven mindset to help advertisers cut through noise, optimise budgets, and turn data into results that truly move the needle.
              </p>
              
              <p className="italic">
                If you're ready to refine your media strategy or explore how <strong>Amazon DSP</strong> can accelerate your growth, <a href="/request-a-consultation" className="text-foreground underline hover:text-primary transition-colors">request a consultation</a>.
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
