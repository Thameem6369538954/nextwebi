import React from "react";

const brands = [
  "/BrandImg/fastrack-logo-png_seeklogo-328361.png",
  "/BrandImg/nike.jpg",
  "/BrandImg/uspolo.jpg",
  "/BrandImg/women.jpg",
  "/BrandImg/le.jpg",
  "/BrandImg/chanel.jpg",
];

const BrandMarquee = () => {
  const duplicatedBrands = [...brands, ...brands]; // duplicate to ensure loop

  return (
    <div className="w-full overflow-hidden bg-white py-6 relative group">
      <div className="flex min-w-max animate-marquee group-hover:[animation-play-state:paused]">
        {duplicatedBrands.map((brand, index) => (
          <div key={index} className="flex-shrink-0 px-6">
            <img
              src={brand}
              alt={`brand-${index}`}
              className="h-20 w-auto opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
