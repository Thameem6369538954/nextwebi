import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-pink-50 text-gray-800 pt-10 pb-6 px-6 mt-16 font-[poppins]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600">Nextwebi</h2>
          <p className="mt-2 text-sm text-gray-600">
            Elegance meets fashion. Discover exclusive styles crafted for modern women.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Shop</li>
            <li>Collections</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Dresses</li>
            <li>Tops</li>
            <li>Footwear</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay in Touch</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md mb-3 text-sm focus:outline-none"
          />
          <button className="bg-pink-600 text-white px-4 py-2 text-sm rounded-md hover:bg-pink-700 transition">
            Subscribe
          </button>
          <div className="flex space-x-3 mt-4 text-pink-600 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs mt-10 text-gray-500">
        &copy; {new Date().getFullYear()} Nextwebi. All rights reserved.
      </div>
    </motion.footer>
  );
}
