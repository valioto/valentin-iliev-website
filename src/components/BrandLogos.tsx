import volkswagenLogo from "@/assets/volkswagen-logo.png";
import audiLogo from "@/assets/audi-logo.png";
import porscheLogo from "@/assets/porsche-logo.png";
import cupraLogo from "@/assets/cupra-logo.png";
import mercedesLogo from "@/assets/mercedes-logo.png";
import bmwLogo from "@/assets/bmw-logo.png";
import landroverLogo from "@/assets/landrover-logo.png";
import hondaLogo from "@/assets/honda-logo.png";

const brands = [
  { name: "Volkswagen", logo: volkswagenLogo },
  { name: "Audi", logo: audiLogo },
  { name: "Porsche", logo: porscheLogo },
  { name: "Cupra", logo: cupraLogo },
  { name: "Mercedes-Benz", logo: mercedesLogo },
  { name: "BMW", logo: bmwLogo },
  { name: "Land Rover", logo: landroverLogo },
  { name: "Honda", logo: hondaLogo },
];

const BrandLogos = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Brands I have worked with
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-h-12 max-w-full object-contain filter grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
