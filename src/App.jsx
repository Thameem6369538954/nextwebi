import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Allrouters from "./AllRouters/Allrouters";

export default function App() {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      locoScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.07,
      });
    }

    return () => {
      locoScroll.current?.destroy();
    };
  }, []);

  // 👇 Update on route change
  useEffect(() => {
    setTimeout(() => {
      locoScroll.current?.update();
    }, 500); // wait for DOM updates
  }, [location]);

  return (
    <div data-scroll-container ref={scrollRef} className="bg-white text-black">
      <Navbar />
      <main id="main-content">
        <Allrouters />
      </main>
      <Footer />
    </div>
  );
}
