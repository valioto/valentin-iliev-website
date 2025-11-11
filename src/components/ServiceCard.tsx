import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface ServiceCardProps {
  logo: string;
  logoAlt: string;
  title: string;
  collapsedDescription: string;
  expandedContent: string;
}

const ServiceCard = ({ logo, logoAlt, title, collapsedDescription, expandedContent }: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex flex-col items-center text-center space-y-4 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg rounded-lg cursor-pointer">
        <div className="h-16 w-16 flex items-center justify-center">
          <img 
            src={logo} 
            alt={logoAlt} 
            className="max-h-full max-w-full object-contain filter grayscale"
            width="64"
            height="64"
            loading="lazy"
            decoding="async"
          />
        </div>
        
        <CollapsibleTrigger asChild>
          <div className="w-full flex flex-col items-center space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold font-mono">{title}</h3>
              <ChevronDown 
                className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {collapsedDescription}
            </p>
          </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="w-full animate-accordion-down data-[state=closed]:animate-accordion-up">
          <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-4 pt-2">
            {expandedContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="whitespace-pre-line">{paragraph}</p>
            ))}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default ServiceCard;
