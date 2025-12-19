import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Space: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: "/2022-05-06.jpg.webp", title: "Recepção" },
    { src: "/bb6cfd31-d6aa-41af-8bb7-ed088f9e1095.jpg.webp", title: "Conforto" },
    { src: "/dcec6ae8-d06d-42ef-b1fd-993d194e6a71.jpg.webp", title: "Tecnologia" },
    { src: "/fa49da09-d100-4921-a4b7-223e7483f2c5.jpg.webp", title: "Espaço" },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="espaco" className="py-24 bg-surface-dark overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-6">Nosso Espaço</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Criamos um ambiente onde homens e mulheres podem experimentar tratamentos e serviços de qualidade com total conforto e privacidade.
          </p>
        </div>

        <div className="relative group/slider px-4 md:px-0">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-black flex items-center justify-center shadow-xl transition-all md:opacity-0 md:group-hover/slider:opacity-100 hover:bg-white active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-black flex items-center justify-center shadow-xl transition-all md:opacity-0 md:group-hover/slider:opacity-100 hover:bg-white active:scale-95"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Container */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative shrink-0 w-[85%] sm:w-[45%] lg:w-[30%] aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/5 snap-center group"
              >
                {/* Image with zoom effect */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay with Title */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 transition-opacity duration-300">
                  <span className="text-white font-display font-bold text-lg tracking-widest border-b-2 border-primary pb-1">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Space;