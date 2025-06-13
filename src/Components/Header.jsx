import { motion } from "framer-motion";
import HeroImage from "../assets/Images/portrait-young-japanese-woman-with-jacket.png"; // replace with your actual image path

export default function Hero() {
  return (
    <section className="bg-[#f8b9b2] min-h-screen flex items-center justify-center px-6 font-[poppins]">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between ">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-4 md:w-1/2"
        >
          <p className="uppercase text-sm tracking-widest text-gray-700">New Fashion</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Nextwebi</h2>
          <h1 className="text-5xl sm:text-6xl font-[Heading] text-white leading-tight">
            New collection
          </h1>
          <p className="text-sm text-white mt-2">
            Look at the sunset, life is amazing, life is beautiful, life is what you make it.
          </p>
          <button className="mt-4 bg-white text-gray-900 px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition">
            DISCOVER NOW
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 md:mt-0 md:w-1/2"
        >
          <img src={HeroImage} alt="Fashion Model" className="w-full object-cover " />
        </motion.div>
      </div>
    </section>
  );
}
