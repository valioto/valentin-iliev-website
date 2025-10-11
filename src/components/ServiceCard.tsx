import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ServiceCardProps {
  logo: string;
  logoAlt: string;
  title: string;
  description: string;
  popoverContent?: string;
}

const ServiceCard = ({ logo, logoAlt, title, description, popoverContent }: ServiceCardProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex flex-col items-center text-center space-y-4 p-6 hover:bg-accent/30 transition-colors duration-300 rounded-sm cursor-pointer">
          <div className="h-16 w-16 flex items-center justify-center">
            <img 
              src={logo} 
              alt={logoAlt} 
              className="max-h-full max-w-full object-contain filter grayscale"
            />
          </div>
          <h3 className="text-lg font-bold font-mono">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 max-w-[90vw]">
        <p className="text-sm leading-relaxed">
          {popoverContent || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </p>
      </PopoverContent>
    </Popover>
  );
};

export default ServiceCard;
