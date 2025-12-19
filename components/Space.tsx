import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Space: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: "/2022-05-06.jpg.webp", title: "Recepção" },
    { src: "/bb6cfd31-d6aa-41af-8bb7-ed088f9e1095.jpg.webp", title: "Conforto" },
    { src: "/dcec6ae8-d06d-42ef-b1fd-993d194e6a71.jpg.webp", title: "Tecnologia" },
    { src: "/fa49da09-d100-4921-a4b7-223e7483f2c5.jpg.webp", title: "Espaço" },
  ];

  return (
    <section id="espaco" className="py-24 bg-surface-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-6">Nosso Espaço</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Criamos um ambiente onde homens e mulheres podem experimentar tratamentos e serviços de qualidade com total conforto e privacidade.
          </p>
        </div>

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide px-4 md:px-0 md:justify-center"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="snap-center shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative group aspect-square"
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl tracking-widest border-b-2 border-primary pb-1">{img.title}</span>
              </div>
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Space;