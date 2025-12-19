import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Results: React.FC = () => {
  const cases = [
    {
      title: "Protocolo de Recuperação",
      desc: "Tratamento intensivo de 6 meses focado em fortalecimento e densidade capilar.",
      imgBefore: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfNSMFWe29_gGzCOV4v26KuVCqj_dNs2hPkBA8ZXcR6dEv6n3S1W2mOqD73iBZ68jMEH2InZ9bE3ekvruo7skPH3GkLwbYZNrZnK7Naqd3qTO3mtinWCmEB_vpGN7ZImZe-4W_Q93Hj2RU1qDPz403F14Aka5yVY4XOE3eFu5aUnwO-eqn5mViRuxbniVXDqYvZoLoeoHWEjbxu2y5fbjnQDpM30GGRYLTYhW5EScEbxhTBPVvBqrO8OgIPz0TSU7zYpsIfK5UD8s",
      imgAfter: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQtcCllTY9UgjsrH79vSLihSpuELwY-bbHQ8RsH7ZwauX49c-9a9uESF8YeTywZubTeTCigJVjw1PXVkYZX-eprqopTuDPR9kxEHvoy7LTqVy4qUBlDnVvjlmXj7nfk83qcMTmaSMAb3-GfUh1pRlQY-97-vYi-Zwob9u5NyzfBnqV_RzNk9qR9LLwm8xiaebRa7imOaBr0hHhw9zIXn0ug7c30AWvUAeNpCef5BpsIwqMvIuh6h_OhVlKUJYJdvSKpVP6j2kJGeQ"
    },
    {
      title: "Terapia Anti-Queda",
      desc: "Resultados visíveis após a 4ª sessão. A disciplina com o resultado andam juntos.",
      imgBefore: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIg03XG81r7byCPVbKlRuQa59Dtg9uSHL1-tmR8wzNOnzM5Lq23hdWkqZFkphthXVfVrndy8caVH5ICH4l9l-NcJy9XHAAAaShCoNrFjEBRIhGcKZGBcqfP-cpADiOliX4issUkkCdNHhWaiq2Uwwo9d0I-6lIwDjCMDg8oe67rt_-OvsusPvJ9WO7wlBWF_OWobozNVVqMOj1Hf4hXiIbiFo2kNoavpfe8HdpT_3d-1dycx06Ya_a1APkQ-fT31iDjQOh1H17Cio",
      imgAfter: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZuJepK3obGbidKf_DOXfMvhlYEDd2BgSrgRNlJDbmxxt-M7GGeUTZIXx9hnjgj_Ug7EOoz0U5ThAcLC9oQ-OBxODostyKhzJnXfVU-7C10aqO_PNxBrgYFrwZHrjtmTR4NOTmsD6JlrgoEeBNUBhxwKqOiZqt8cyC_dekVtiQW3892IYmViaxFi9qlYVdaRoNxuvc8hphI8jGWhO6mbvo3bmC5x_EeOtJbmpr0opwQGlpLfM8A9_e4zPPVDVNnhxMgfntrtwnD7M"
    },
    {
      title: "Transplante e Pós",
      desc: "Acompanhamento completo pré e pós transplante para garantir a pega dos folículos.",
      imgBefore: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwXVlJNHMCDGadgnDtlkNI-l6yWyUT2OcLb48N62nYv6m2FAhszImCeeirGe85137hTrMMQbmdrqaUISN9lbQpiaGBwMhJTrzfQN1Ou3meq5t0UjmlidLYiWzzjtYxgs5rwvgZEaGItgzuHGk7I3EgpTYsDem7kpY5jX9wI0_2Ks32oIdMMsgcs8xmqkT_UvKwBkRKxbSrBlpNTTH2K4vqt1CDZrHvbEgjKLxQ6KohffsBl3sNIs_uWULDfuMth8hdjllyqrEhOaA",
      imgAfter: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE_jVKPweU5HXunXAygyMgNGISh8s1hSt4qRA5cDITbIrM_VliaQlrkVCkDvnL1VrQJesAT1Nkmpr8XkfMTtlAtq72ox56CQKQTU9HSX4TwTluj9_iVBh1ZnxYN8ZuNWa0wbbRxczQ147-i0EnypAQWsDsplEdzlQ1sRX_b079nRWEU8tcUc7A348h19Ts_qAOXwGIDOzUZyuOYfuYXirKTL-55WqRdy0bymPSskIh8W3ahBmbvVUpjw37r6qmAkXqP30IXtcUFx0"
    }
  ];

  const testimonials = [
    {
      name: "Roberto Almeida",
      role: "Terapia Capilar",
      quote: "Eu não acreditava que poderia recuperar a densidade do meu cabelo sem cirurgia. O protocolo personalizado da Dra. Cris foi um divisor de águas na minha autoestima.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDotPBm_m8NAF1ZT6Fb0XGhX4gAmqPTcgQWZ_MvAw7cewaVikWiRdk22FL8Xor_dq9u4cfxDPOcJJJGodGcLRqrXwSwYEu5pEdeHdPxDn3Ngw3JZqga_pz7fnaBplUjlxy5wk_pK_v5TDrELmNJbEbk9wwKeiLKsiKcWF6czF0u0lUTCi1HVENnAtfeeLg-jYZ3BPaFJ5ztyYXV7M3hHI6_X5KY4bIU7Kj3xBQf6ZKvyEsoUCwr9TuqaX9Hu4IfQk2lghkU0NF9LDI"
    },
    {
      name: "Mariana Costa",
      role: "Pós-Transplante",
      quote: "O ambiente é acolhedor e a equipe extremamente profissional. Fiz o acompanhamento pós-transplante e o resultado superou todas as expectativas.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTbFfN6Q_FAc51xxqxT6Rkk9NxYWSE_jHPAI3LUgVamuG-zODZcv81MEyaVqOlE8x_Qa54X8PtPcDrtzDZVuoN3rFy_7WlfuMOWFwUQyKb5SIgZGMeDbdn0omJu385io6u8wS2eMrvRc2yvH5B78RpMSVzXDS9O2afXoJ2RW2X2D8QGM17Ys1APwp_sp4GUUIDt-qZc4Z_Nk_h7rk9LWGNRekxHVcuFCBIa0FSnYYx-ko_Ma9U8Tw1tub4yhZUG9upu5DHOh4QMXc"
    },
    {
      name: "Julia Mendes",
      role: "Tratamento Anti-Queda",
      quote: "Tecnologia de ponta aliada a um atendimento humano. A avaliação inicial foi muito detalhada e me deu segurança para começar o tratamento.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPexCP4gkXnmAXJKGoIlmZ82hv3a67CsfJxHP9ZbITNzQvX3dYObaYfZ599FrIOyQvkXAGc2L2NPG4gbajsFfqDO6yetyWTiXYQFpDqSdLzMgQRUzgkaW7k-CoeeHyd4C1VS3vt5SizQo-QSScsXXtPNScasNKG5NSthPZ8naAP-WYOFyPaJPlHW9eOhKtbnxYSxaxoA0sh-E-fkE8g5TWfw6iAd4JgTxS165l9leF-e19zeVhKJtiNQSoacZsWIFjl3Js6TRCIbo"
    }
  ];

  return (
    <section id="resultados" className="py-24 bg-background-dark relative">
      <div className="container mx-auto px-6">

        {/* Results Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Transformações Reais
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Resultados que falam pela <span className="text-primary italic">sua beleza</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 font-light">
            Acompanhe a evolução de nossos pacientes através de protocolos personalizados e tecnologia de ponta.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-surface-lighter shadow-xl border border-white/5"
            >
              {/* Split Image Container */}
              <div className="relative h-80 w-full overflow-hidden flex">
                <div className="w-1/2 relative h-full border-r border-white/10 overflow-hidden">
                  <img src={item.imgBefore} alt="Antes" className="absolute inset-0 h-full w-full object-cover object-left group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Antes</span>
                </div>
                <div className="w-1/2 relative h-full overflow-hidden">
                  <img src={item.imgAfter} alt="Depois" className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-4 right-4 bg-primary text-black text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Depois</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{item.desc}</p>
                <a href="#" className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                  Ver Detalhes <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="py-12 border-y border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24">
          {[
            { val: "+1500", label: "Pacientes Atendidos" },
            { val: "98%", label: "Satisfação" },
            { val: "10+", label: "Anos de Experiência" },
            { val: "+15", label: "Protocolos Exclusivos" }
          ].map((stat, i) => (
            <div key={i}>
              <span className="block text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.val}</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-display font-bold text-white">Depoimentos</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-surface-lighter p-8 rounded-2xl border border-white/5 relative"
              >
                <div className="absolute -top-4 left-8 bg-primary text-black p-2 rounded-full shadow-lg">
                  <Quote size={20} fill="currentColor" />
                </div>
                <div className="flex gap-1 text-primary mb-6 mt-2">
                  {[...Array(5)].map((_, stars) => <Star key={stars} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic text-sm leading-relaxed mb-8">"{t.quote}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                    <span className="text-xs text-primary uppercase tracking-wider">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Results;