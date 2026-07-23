import { useEffect } from "react";
import Navi from "./components/Navi/Navi";
import HeroBlock from "./components/HeroBlock/HeroBlock";
import OfertaBlock from "./components/OfertaBlock/OfertaBlock";
import OFirmieBlock from "./components/OFirmieBlock/OFirmieBlock";
import RealizacjeBlock from "./components/RealizacjeBlock/RealizacjeBlock";
import InstagramBlock from "./components/InstagramBlock/InstagramBlock";
import FooterBlock from "./components/FooterBlock/FooterBlock";
import "./style.css";

function App() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navi />
      <div className="reveal"><HeroBlock /></div>
      <div className="reveal"><OfertaBlock /></div>
      <div className="reveal"><OFirmieBlock /></div>
      <div className="reveal"><RealizacjeBlock /></div>
      <div className="reveal"><InstagramBlock /></div>
      <div className="reveal"><FooterBlock /></div>
    </div>
  );
}

export default App;