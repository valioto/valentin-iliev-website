import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4">
          <Link 
            to="/privacy-policy" 
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <p className="text-xs text-center text-muted-foreground">
            © 2025 27x Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
