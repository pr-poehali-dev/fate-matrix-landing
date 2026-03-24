import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroService from "@/components/HeroService";
import AboutPricing from "@/components/AboutPricing";
import ReviewsContact from "@/components/ReviewsContact";

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#141414] overflow-x-hidden" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      <NavBar />
      <HeroService />
      <AboutPricing />
      <ReviewsContact />
    </div>
  );
}
