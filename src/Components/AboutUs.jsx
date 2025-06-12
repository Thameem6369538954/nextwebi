// components/AboutUs.jsx
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-20 max-w-screen-xl mx-auto font-[poppins]">
      <motion.h2
        className="text-3xl md:text-7xl font-[Heading] text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <img
          src="/images/about-us.jpg"
          alt="About Us"
          className="rounded-2xl shadow-lg object-cover w-full h-96"
        />

        <div>
          <motion.h3
            className="text-2xl font-semibold mb-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Who We Are
          </motion.h3>
          <motion.p
            className="text-gray-600 mb-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            We’re a fashion-forward brand redefining streetwear with bold styles,
            quality materials, and cultural attitude. Our pieces speak to the
            rebels, the trendsetters, and the dreamers of the urban world.
          </motion.p>
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            From concept to creation, every product reflects our passion for
            storytelling, identity, and street culture. Join us in shaping the
            future of fashion, one bold move at a time.
          </motion.p>

          <motion.button
            className="px-6 py-3 bg-black text-white rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-all"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#333333",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Know More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
