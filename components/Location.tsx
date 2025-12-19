import React from 'react';
import { MapPin } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="h-80 md:h-[500px] w-full relative bg-gray-900 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.4173822168123!2d-43.9496035!3d-19.8643883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6901842036c8d%3A0xc665780516fc41c2!2sAv.%20Sebasti%C3%A3o%20de%20Brito%2C%20100%20-%20Dona%20Clara%2C%20Belo%20Horizonte%20-%20MG%2C%2031260-000!5e0!3m2!1spt-BR!2sbr!4v1703000000000!5m2!1spt-BR!2sbr"
        className="w-full h-full border-0 grayscale invert-[0.9] contrast-[1.2] opacity-50 hover:opacity-100 transition-all duration-700"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="absolute inset-0 hidden md:flex items-end justify-center pointer-events-none pb-8 md:pb-12">
        <a
          href="https://maps.google.com/?q=Av.+Sebastião+de+Brito,+100,+Sala+606+-+Dona+Clara,+Belo+Horizonte,+Brazil"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-surface-lighter/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4 hover:scale-105 transition-transform pointer-events-auto"
        >
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
            <MapPin size={24} />
          </div>
          <div>
            <p className="font-bold text-white text-lg">Estamos aqui</p>
            <p className="text-sm text-gray-400">Av. Sebastião de Brito, 100</p>
            <p className="text-xs text-primary mt-1">Clique para abrir no Google Maps</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Location;