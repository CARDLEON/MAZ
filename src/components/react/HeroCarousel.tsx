import React, { useEffect, useState } from 'react';
import { Image } from 'astro:assets';

const slides = [
  {
    img: "/bg-home-hero-1.webp",
    title: "Soluciones de Climatización Inteligente",
    subtitle:
      "Mejoramos la eficiencia energética y prolongando la vida útil de tus equipos",
  },
  {
    img: "/bg-home-hero-2.webp",
    title: "Servicios HVAC",
    subtitle:
      "Brindamos suministro, instalación, mantenimiento, diagnóstico, reparación, selección de equipos y suministro de refacciones.",
  },
  {
    img: "/bg-home-hero-3.webp",
    title: "Optimización Energética",
    subtitle:
      "Transformamos tu infraestructura con soluciones personalizadas en sistemas HVAC, Chillers y más, garantizando eficiencia enérgetica y máximo rendimiento.",
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="h-full w-full relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide absolute top-0 inset-0 w-full h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-blue-300/30 z-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30">
              <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
              <p className="text-lg md:text-xl mt-4">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 duration-100 ease-in p-3 rounded-full cursor-pointer z-20"
      >
        <img src="/left-arrow.svg" alt="Previous" />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 duration-100 ease-in p-3 rounded-full cursor-pointer z-20"
      >
        <img src="/right-arrow.svg" alt="Next" />
      </button>
    </section>
  );
};

export default HeroCarousel; 