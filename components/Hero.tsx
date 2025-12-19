import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle, FlaskConical, ClipboardList, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const features = [
    { icon: <CheckCircle size={20} />, title: "Consulta Personalizada", desc: "Análise profunda das suas necessidades." },
    { icon: <FlaskConical size={20} />, title: "Diagnóstico Avançado", desc: "Tricoscopia e exames detalhados." },
    { icon: <ClipboardList size={20} />, title: "Planejamento Individual", desc: "Plano de ação específico para você." },
    { icon: <Eye size={20} />, title: "Acompanhamento", desc: "Monitoramento constante da evolução." },
  ];

  return (
    <header id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D0C] via-[#0F0D0C]/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-transparent z-10"></div>
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-40"
        >
          <source src="/mulher cabelo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl text-white font-bold leading-tight mb-6"
          >
            Recupere a saúde do seu cabelo e a{' '}
            <span className="text-primary italic relative inline-block">
              sua autoestima
              <svg className="absolute w-full h-2 bottom-1 left-0 text-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 font-light max-w-lg leading-relaxed"
          >
            Terapia capilar avançada e personalizada. Protocolos exclusivos com
            equipamentos de alta tecnologia e profissionais capacitados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/5531985036147"
              className="group bg-primary hover:bg-white text-black px-8 py-4 rounded-full font-bold shadow-[0_4px_20px_rgba(249,245,6,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              <span>Agendar Avaliação</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#resultados"
              className="group border border-white/30 hover:border-primary text-white hover:text-primary px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center bg-white/5 backdrop-blur-sm"
            >
              Ver Resultados
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating features footer for Hero */}
      <div className="absolute bottom-0 left-0 w-full z-20 hidden lg:block border-t border-white/5 bg-background-dark/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 grid grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 mt-1 leading-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;