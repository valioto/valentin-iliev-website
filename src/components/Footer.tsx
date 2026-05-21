import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-row items-center gap-3">
            <Link 
              to="/request-a-consultation" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <span className="text-xs text-muted-foreground">•</span>
            <Link 
              to="/privacy-policy" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <a 
            href="mailto:valentin@27x.co.uk"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            valentin@27x.co.uk
          </a>
          <p className="text-xs text-center text-muted-foreground">
            © 2026 27x Ltd. All rights reserved.
          </p>
          <div className="w-16 h-px bg-border" />
          <p className="text-[11px] text-center text-muted-foreground/70">
            27X LTD | Company Number: 16835623 | Registered address: 3 Northcote Avenue, Isleworth, TW7 7JH
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
