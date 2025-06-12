// components/HeroBanner.jsx
import { motion } from "framer-motion";
import watch from "../assets/Images/Watch.png";
import shoes from "../assets/Images/beautiful-rendering-steel-object__1_-removebg-preview.png";

const HeroBanner = () => {
  return (
    <section className="relative lg:mt-30  bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-white py-24 font-[poppins]">
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
        {/* Left Image */}
        <motion.img
          src={shoes}
          alt="Watch"
          className=" lg:block w-1/4 absolute left-0 bottom-0 transform translate-y-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Center Text */}
        <div className="z-10 max-w-xl mx-auto">
          <motion.h1
            className="text-5xl lg:text-6xl font-[Heading] tracking-wide mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            COOL & PREMIUM
          </motion.h1>

          <motion.p
            className="text-sm uppercase tracking-widest mb-4 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            2025 Autumn / cool New Design's
          </motion.p>

          <motion.p
            className="text-base tracking-wider text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Enjoy your elegant life — Innovative concept
          </motion.p>
        </div>

        {/* Right Image */}
        <motion.img
          src={watch}
          alt="Shoes"
          className=" lg:block w-1/3 absolute right-0 bottom-0 transform translate-y-10 lg:translate-x-10 translate-x-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};

export default HeroBanner;
