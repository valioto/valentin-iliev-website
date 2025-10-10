import { NavLink } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  {
    name: "Home",
    path: "/",
    description: "Discover my services and approach to media buying"
  },
  {
    name: "About",
    path: "/about",
    description: "Learn about my journey and expertise"
  },
  {
    name: "Reach Out",
    path: "/reach-out",
    description: "Let's discuss how I can help scale your brand"
  },
];

const Navigation = () => {
  return (
    <nav className="fixed top-0 right-0 z-50 p-6 md:p-8">
      <TooltipProvider delayDuration={200}>
        <ul className="flex gap-6 md:gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <NavLink
                    to={item.path}
                    end
                    className={({ isActive }) =>
                      `text-sm md:text-base minimal-link ${
                        isActive ? "text-foreground font-bold" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-foreground text-background border-foreground">
                  <p className="text-xs max-w-[200px]">{item.description}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </TooltipProvider>
    </nav>
  );
};

export default Navigation;
