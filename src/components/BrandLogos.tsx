import volkswagenLogo from "@/assets/volkswagen-logo.png";
import audiLogo from "@/assets/audi-logo.png";
import porscheLogo from "@/assets/porsche-logo.png";
import cupraLogo from "@/assets/cupra-logo.png";
import mercedesLogo from "@/assets/mercedes-logo-new.png";
import bmwLogo from "@/assets/bmw-logo.png";
import landroverLogo from "@/assets/landrover-logo.png";
import hondaLogo from "@/assets/honda-logo.png";
import nissanLogo from "@/assets/nissan-logo.png";
import peugeotLogo from "@/assets/peugeot-logo.png";
import skodaLogo from "@/assets/skoda-logo.png";
import jaguarLogo from "@/assets/jaguar-logo.png";
import jeepLogo from "@/assets/jeep-logo.png";
import renaultLogo from "@/assets/renault-logo.png";
import seatLogo from "@/assets/seat-logo.png";
import toyotaLogo from "@/assets/toyota-logo.png";
import volvoLogo from "@/assets/volvo-logo.png";
import citroenLogo from "@/assets/citroen-logo.png";
import fordLogo from "@/assets/ford-logo.png";
import shellLogo from "@/assets/shell-logo.png";
import netflixLogo from "@/assets/netflix-logo.png";
import hsbcLogo from "@/assets/hsbc-logo.png";
import capitaloneLogo from "@/assets/capitalone-logo.png";
import royalmailLogo from "@/assets/royalmail-logo.png";
import asusLogo from "@/assets/asus-logo.png";
import olympusLogo from "@/assets/olympus-logo.png";
import kasperskyLogo from "@/assets/kaspersky-logo.png";
import justeatLogo from "@/assets/justeat-logo.png";
import telegraphLogo from "@/assets/telegraph-logo.png";
import americanairlinesLogo from "@/assets/americanairlines-logo.png";

const brands = [
  { name: "Volkswagen", logo: volkswagenLogo },
  { name: "Audi", logo: audiLogo },
  { name: "Porsche", logo: porscheLogo },
  { name: "Cupra", logo: cupraLogo },
  { name: "Mercedes-Benz", logo: mercedesLogo },
  { name: "BMW", logo: bmwLogo },
  { name: "Land Rover", logo: landroverLogo },
  { name: "Honda", logo: hondaLogo },
  { name: "Nissan", logo: nissanLogo },
  { name: "Peugeot", logo: peugeotLogo },
  { name: "Škoda", logo: skodaLogo },
  { name: "Jaguar", logo: jaguarLogo },
  { name: "Jeep", logo: jeepLogo },
  { name: "Renault", logo: renaultLogo },
  { name: "SEAT", logo: seatLogo },
  { name: "Toyota", logo: toyotaLogo },
  { name: "Volvo", logo: volvoLogo },
  { name: "Citroën", logo: citroenLogo },
  { name: "Ford", logo: fordLogo },
  { name: "Shell", logo: shellLogo },
  { name: "Netflix", logo: netflixLogo },
  { name: "HSBC", logo: hsbcLogo },
  { name: "Capital One", logo: capitaloneLogo },
  { name: "Royal Mail", logo: royalmailLogo },
  { name: "Asus", logo: asusLogo },
  { name: "Olympus", logo: olympusLogo },
  { name: "Kaspersky", logo: kasperskyLogo },
  { name: "Just Eat", logo: justeatLogo },
  { name: "The Telegraph", logo: telegraphLogo },
  { name: "American Airlines", logo: americanairlinesLogo },
];

const logoScales: Record<string, string> = {
  "Ford": "scale-90",
  "Cupra": "scale-110", 
  "Olympus": "scale-110",
  "Shell": "scale-95",
  "HSBC": "scale-105",
};

const BrandLogos = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <h2 className="text-sm font-bold mb-12 text-center">
          Brands I worked with at Amazon:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="flex items-center justify-center w-full h-24 p-4 bg-white rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`}
                className={`max-w-[100px] max-h-[48px] object-contain grayscale ${logoScales[brand.name] || ''}`}
                width="100"
                height="48"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
