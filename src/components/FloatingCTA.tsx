import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { trackCTAClick } from "@/lib/analytics";

const FloatingCTA = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <Link to="/lets-talk">
      <Button 
        className="fixed bottom-6 right-6 z-50 shadow-lg bg-foreground text-background hover:bg-foreground/90 font-bold animate-fade-in"
        size="lg"
        onClick={() => trackCTAClick("floating_button")}
      >
        Let's Talk
      </Button>
    </Link>
  );
};

export default FloatingCTA;
