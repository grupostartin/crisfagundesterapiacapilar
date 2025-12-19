import React from 'react';
import { Droplet, Sparkles, UserX, ShieldCheck, Stethoscope, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      id: "01",
      title: "Queda Capilar",
      desc: "Protocolos focados em interromper a queda excessiva e estimular o nascimento de novos fios através do fortalecimento do folículo.",
      icon: <Sparkles size={28} />
    },
    {
      id: "02",
      title: "Controle de Oleosidade",
      desc: "Equilíbrio da microbiota do couro cabeludo, regulando a produção de sebo para fios mais soltos, limpos e saudáveis por mais tempo.",
      icon: <Droplet size={28} />
    },
    {
      id: "03",
      title: "Dermatite Seborreica",
      desc: "Alívio da coceira, descamação e vermelhidão com tratamentos calmantes que restauram a barreira de proteção natural da pele.",
      icon: <ShieldCheck size={28} />
    },
    {
      id: "04",
      title: "Alopecia",
      desc: "Abordagem terapêutica integrativa para diferentes tipos de alopecia, visando a recuperação e manutenção da densidade capilar.",
      icon: <UserX size={28} />
    },
  ];

  return (
    <section className="py-24 px-6 bg-surface-dark relative overflow-hidden" id="tratamentos">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-pattern pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Tratamentos <span className="text-primary italic">Exclusivos</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            Unimos tecnologia avançada e protocolos personalizados para restaurar a
            saúde e a vitalidade do seu couro cabeludo e fios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background-dark border border-white/5 hover:border-primary/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-full bg-surface-lighter flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  {service.icon}
                </div>
                <span className="text-xs font-bold text-white/20 font-display text-xl">{service.id}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="#" className="inline-flex items-center text-xs font-bold text-primary hover:text-white transition-colors uppercase tracking-widest gap-2">
                Saiba Mais <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Featured Service - Full Width */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mt-6 bg-gradient-to-br from-surface-lighter to-background-dark border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="w-20 h-20 rounded-full bg-background-dark border border-white/10 flex items-center justify-center text-primary shrink-0">
                    <Stethoscope size={40} />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-2">
                         <h3 className="font-display text-2xl font-bold text-white mb-2 md:mb-0">Pós-Transplante Capilar</h3>
                         <span className="text-xs font-bold text-white/20 uppercase tracking-widest px-3 py-1 border border-white/10 rounded-full">Protocolo 05</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed max-w-3xl">
                        Cuidados essenciais para acelerar a cicatrização, garantir a "pega" dos enxertos e potencializar o resultado final do seu transplante. Utilizamos fotobiomodulação e cosmecêuticos específicos para máxima densidade.
                    </p>
                </div>
                <div className="shrink-0">
                    <a href="https://wa.me/5531985036147" className="bg-white/5 hover:bg-primary hover:text-black text-white px-8 py-4 rounded-full font-bold transition-all border border-white/10">
                        Agendar Pós-Operatório
                    </a>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;