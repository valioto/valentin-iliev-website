import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <Accordion 
      type="single" 
      collapsible 
      value={isOpen ? "item-1" : ""} 
      onValueChange={(value) => setIsOpen(value === "item-1")}
    >
      <AccordionItem value="item-1" className="border-none">
        <div className="flex flex-col items-center text-center space-y-4 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg rounded-lg">
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
          
          <AccordionTrigger className="w-full hover:no-underline [&>svg]:hidden cursor-pointer">
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
          </AccordionTrigger>
          
          <AccordionContent className="w-full">
            <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-4 pt-2">
              {expandedContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">{paragraph}</p>
              ))}
            </div>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default ServiceCard;
