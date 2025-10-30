interface ServiceCardProps {
  logo: string;
  logoAlt: string;
  title: string;
  description: string;
  popoverContent?: string;
}

const ServiceCard = ({ logo, logoAlt, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg rounded-lg">
      <div className="h-16 w-16 flex items-center justify-center">
        <img 
          src={logo} 
          alt={logoAlt} 
          className="max-h-full max-w-full object-contain filter grayscale"
        />
      </div>
      <h3 className="text-lg font-bold font-mono">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
