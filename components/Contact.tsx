import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contato" className="bg-background-dark pt-12 pb-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-surface-lighter rounded-3xl shadow-2xl p-6 md:p-12 mt-0 md:-mt-24 border-t-4 border-primary grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 relative z-20">

                    {/* Info Side */}
                    <div>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">Onde Estamos?</h2>
                        <div className="space-y-6 md:space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                    <MapPin size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base md:text-lg uppercase">UNIDADE</h4>
                                    <p className="text-gray-400 mt-1 leading-relaxed text-xs md:text-sm">
                                        Av. Sebastião de Brito, 100, Sala 606 - Dona Clara, Belo Horizonte, Brazil
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Phone size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base md:text-lg uppercase">Atendimento das 08H às 18:00</h4>
                                    <p className="text-primary font-bold mt-1 text-base md:text-lg">(31) 98503-6147</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Mail size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base md:text-lg uppercase">Email</h4>
                                    <p className="text-gray-400 text-xs md:text-sm">contato@crisfagundes.com.br</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <img
                                src="/logo.webp"
                                alt="Cris Fagundes"
                                className="h-16 w-auto"
                            />
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-background-dark p-8 rounded-2xl border border-white/5">
                        <h2 className="font-display text-2xl font-bold text-white mb-2">Fale Conosco</h2>
                        <p className="text-sm text-gray-400 mb-6">Envie uma mensagem e nossa equipe entrará em contato em breve.</p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Nome"
                                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-surface-lighter text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-500"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-surface-lighter text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-500"
                                />
                                <input
                                    type="tel"
                                    placeholder="Telefone"
                                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-surface-lighter text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-500"
                                />
                            </div>
                            <select className="w-full px-4 py-3 rounded-lg border border-white/10 bg-surface-lighter text-gray-400 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all">
                                <option>Interesse em Terapia Capilar</option>
                                <option>Interesse em Pós-Transplante</option>
                                <option>Dúvidas Gerais</option>
                            </select>
                            <textarea
                                rows={4}
                                placeholder="Mensagem"
                                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-surface-lighter text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-500"
                            ></textarea>
                            <button
                                type="button"
                                className="w-full bg-primary hover:bg-white hover:text-black text-black font-bold py-4 rounded-lg transition-all shadow-lg uppercase tracking-wider text-sm"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;