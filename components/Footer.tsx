import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F0D0C] py-8 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div className="flex space-x-6 mb-4 md:mb-0 uppercase tracking-widest font-bold">
          <a href="#home" className="hover:text-primary transition-colors">Início</a>
          <a href="#resultados" className="hover:text-primary transition-colors">Resultados</a>
          <a href="#espaco" className="hover:text-primary transition-colors">Espaço</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </div>
        <div className="text-center md:text-right">
          <p>&copy; 2025 Cris Fagundes. Todos os Direitos Reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;