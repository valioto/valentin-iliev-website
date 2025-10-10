const brands = [
  { name: "Brand 1", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=BRAND+1" },
  { name: "Brand 2", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=BRAND+2" },
  { name: "Brand 3", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=BRAND+3" },
  { name: "Brand 4", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=BRAND+4" },
  { name: "Brand 5", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=BRAND+5" },
  { name: "Brand 6", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=BRAND+6" },
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
