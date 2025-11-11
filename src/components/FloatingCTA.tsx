import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { trackCTAClick } from "@/lib/analytics";

const FloatingCTA = () => {
  const isMobile = useIsMobile();
  const location = useLocation();

  if (!isMobile) return null;
  
  // Don't show on the consultation request page itself
  if (location.pathname === "/request-a-consultation") return null;

  return (
    <Link to="/request-a-consultation">
      <Button 
        className="fixed bottom-6 right-6 z-50 shadow-lg bg-foreground text-background hover:bg-foreground/90 font-bold animate-fade-in"
        size="lg"
        onClick={() => trackCTAClick("floating_button")}
      >
        → Request a consultation
      </Button>
    </Link>
  );
};

export default FloatingCTA;
