import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CategoryPage() {
  const { categoryName } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  if (filteredProducts.length === 0) {
    return (
      <motion.div
        className="p-6 text-center text-red-500 font-[poppins] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        No products found for this category.
      </motion.div>
    );
  }

  return (
    <motion.div
      className="py-20 px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 capitalize text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {categoryName} Collection
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            variants={cardVariants}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-124 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
              <motion.button
                className="mt-3 w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
