// components/TrendingProductsCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import AS from "/ProductImg/Coat.jpg"
import ASS from "/ProductImg/CoatA.jpg"
import BSS from "/ProductImg/portrait-handsome-confident-hipster-businessman-model-wearing-casual-black-suit.jpg"
import BS from "/ProductImg/portrait-handsome-smiling-hipster-businessman-model-wearing-casual-black-suit.jpg"
import CSS from "/ProductImg/shy-girl-posing.jpg"
import CS from "/ProductImg/young-girl-with-seductive-pose.jpg"
import DS from "/ProductImg/young-woman-beautiful-yellow-dress (1).jpg"
import DSS from "/ProductImg/young-woman-beautiful-yellow-dress.jpg"


const products = [
  {
    name: "SHADOW DRIP",
    desc: "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
    price: "889",
    oldPrice: "120",
    image: AS,
    hoverImage: ASS,
  },
  {
    name: "SHADOW DRIP",
    desc: "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
    price: "889",
    oldPrice: "120",
    image: BSS,
    hoverImage: BS,
  },
  {
    name: "SHADOW DRIP",
    desc: "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
    price: "889",
    oldPrice: "120",
    image: CS,
    hoverImage: CSS,
  },
  {
    name: "SHADOW DRIP",
    desc: "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
    price: "889",
    oldPrice: "120",
    image: DS,
    hoverImage: DSS,
  },
  {
    name: "SHADOW DRIP",
    desc: "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
    price: "889",
    oldPrice: "120",
    image: AS,
    hoverImage: ASS,
  },
  {
    name: "URBAN PHANTOM",
    desc: "Urban Phantom – A bold, oversized hoodie with edgy graphics and a stealthy aesthetic inspired by city nights.",
    price: "889",
    oldPrice: "120",
    image: "/images/urban-phantom.jpg",
    hoverImage: "/images/urban-phantom-hover.jpg",
  },
  {
    name: "NEON REBELLION",
    desc: "A statement piece with vibrant neon details and rebellious street art influences for a standout look.",
    price: "889",
    oldPrice: "120",
    image: "/images/neon-rebellion.jpg",
    hoverImage: "/images/neon-rebellion-hover.jpg",
  },
];

const TrendingProductsCarousel = () => {
  return (
    <div className="py-12 px-4 max-w-8xl mx-auto font-[poppins]">
      <h2 className="text-3xl md:text-7xl font-[Heading] text-center mb-10">Trending Products</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        // pagination={{ clickable: true }}
        // modules={[Pagination]}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-2xl overflow-hidden shadow-md bg-white group">
             <div className="relative h-116 overflow-hidden group">
  {/* Default Image */}
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
  />
  {/* Hover Image */}
  <img
    src={product.hoverImage}
    alt={`${product.name} Hover`}
    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
  />
  <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full z-10">NEW</span>
</div>

              <div className="p-5">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-md text-gray-500 mt-1">{product.desc}</p>
                <div className="mt-4 flex items-center gap-3 text-lg">
                  <span className="font-semibold">₹{product.price}</span>
                  <span className="line-through text-green-400">₹{product.oldPrice}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingProductsCarousel;
