import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Allrouters from "./AllRouters/Allrouters";

export default function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="bg-white text-black">
      <Navbar />
      <Allrouters />
      <Footer />
    </div>
  );
}
