import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import categories from "../data/categories.json";

// ✅ Import images
import womenImg from "../assets/CateImg/happy-lady-stylish-skirt-boater-posing-pink-wall.jpg";
import menImg from "../assets/CateImg/handsome-confident-young-curly-haired-man-drinking-coffee-standing-infront-isolated-white-wall.jpg";
import shoesImg from "../assets/CateImg/man-woman-legs-jeans-sneakers.jpg";
import watchImg from "../assets/CateImg/close-up-clock-with-time-change.jpg";

const imageMap = {
  "Women's Dress": womenImg,
  "Men's Dress": menImg,
  Shoes: shoesImg,
  Watch: watchImg,
};

export default function CategoryGrid() {
  const navigate = useNavigate();

  const handleClick = (categorySlug) => {
    navigate(`/category/${categorySlug}`);
  };

  return (
    <div id="collections" className="w-full px-4 py-16 bg-white">
      <motion.h2
        className="text-3xl md:text-7xl font-[Heading] text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Collections
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[300px]">
        {categories.map((cat, idx) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false, amount: 0.3 }); // animate every scroll into view

          return (
            <motion.div
              ref={ref}
              key={idx}
              onClick={() => handleClick(cat.category)}
              className={`cursor-pointer relative overflow-hidden group rounded-xl shadow-md ${cat.colSpan || ""} ${cat.rowSpan || ""}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={imageMap[cat.title]}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-white/90 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-500 px-4">
                <p className="text-xs md:text-sm uppercase text-gray-500 mb-1">
                  {cat.label}
                </p>
                <h3 className="text-base md:text-xl font-semibold text-gray-800">
                  {cat.title}
                </h3>
                {cat.button && (
                  <button className="mt-4 px-3 md:px-4 py-1.5 md:py-2 border border-black text-xs md:text-sm hover:bg-black hover:text-white transition">
                    Shop Now
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
