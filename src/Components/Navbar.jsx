import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { Link } from "react-scroll";

const navItems = [
  { name: "Home", scrollTo: "home" },
  { name: "Collections", scrollTo: "collections" },
  { name: "New Arrivals", scrollTo: "new-arrivals" },
  {
    name: "Shop",
    submenu: ["Dresses", "Tops", "Bottoms", "Footwear"],
  },
  { name: "About", scrollTo: "about" },
  { name: "Contact", scrollTo: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleSubmenu = (index) => {
    setActiveSubmenu((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto font-[poppins]">
        <h1 className="text-2xl font-bold text-pink-600">Nextwebi</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveSubmenu(index)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              {item.scrollTo ? (
                <Link
                  to={item.scrollTo}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="flex items-center gap-1">
                  {item.name}
                  {item.submenu && <HiChevronDown size={16} />}
                </span>
              )}

              {/* Submenu */}
              {item.submenu && (
                <AnimatePresence>
                  {activeSubmenu === index && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 px-4 space-y-2 text-sm w-40"
                    >
                      {item.submenu.map((sub, i) => (
                        <motion.li
                          key={i}
                          whileHover={{ scale: 1.03 }}
                          className="hover:text-pink-500 transition"
                        >
                          {sub}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white px-6 pb-4 space-y-4 text-gray-700 font-medium"
          >
            {navItems.map((item, index) => (
              <div key={index}>
                {item.scrollTo ? (
                  <Link
                    to={item.scrollTo}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <div
                      onClick={() => toggleSubmenu(index)}
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <span>{item.name}</span>
                      {item.submenu && <HiChevronDown size={16} />}
                    </div>
                    <AnimatePresence>
                      {activeSubmenu === index && item.submenu && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 mt-1 space-y-1 text-sm"
                        >
                          {item.submenu.map((sub, i) => (
                            <li key={i} className="hover:text-pink-500">
                              {sub}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
