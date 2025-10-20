import { NavLink, Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import logo from "@/assets/logo.png";

const navItems = [
  {
    name: "About",
    path: "/about",
    description: "Learn about my journey and expertise"
  },
  {
    name: "Start here",
    path: "/reach-out",
    description: "Let's discuss how I can help scale your brand"
  },
  {
    name: "Privacy policy",
    path: "/privacy-policy",
    description: "View our privacy policy"
  },
];

const Navigation = () => {
  return (
    <>
      {/* Logo */}
      <div className="fixed top-0 left-0 z-50 p-6 md:p-8">
        <Link to="/" className="block bg-white p-2 rounded-sm">
          <img src={logo} alt="Valentin Iliev Logo" className="h-8 w-auto" />
        </Link>
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 right-0 z-50 p-6 md:p-8">
        <TooltipProvider delayDuration={200}>
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <NavLink
                      to={item.path}
                      end
                      className={({ isActive }) =>
                        `text-sm font-bold lowercase font-mono transition-colors ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="bg-foreground text-background border-foreground">
                    <p className="text-xs max-w-[200px]">{item.description}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </TooltipProvider>
      </nav>
    </>
  );
};

export default Navigation;
