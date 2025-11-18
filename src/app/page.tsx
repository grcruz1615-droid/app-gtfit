"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Zap, TrendingUp, Calendar, Award, Users, Sparkles, CheckCircle2, Star, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-blue-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(0,0,0,0))]" />
        {/* Animated LED effect */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + scrollY * 0.1}% ${50 + scrollY * 0.05}%, rgba(29, 78, 216, 0.15), transparent 50%)`,
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 border-b border-blue-900/30 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 blur-xl opacity-50 animate-pulse" />
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 relative" fill="currentColor" />
              </div>
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                GTFit
              </span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Funcionalidades</a>
              <a href="#plans" className="text-gray-300 hover:text-blue-400 transition-colors">Planos</a>
              <a href="#results" className="text-gray-300 hover:text-blue-400 transition-colors">Resultados</a>
              <Link 
                href="/login"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/50"
              >
                Entrar
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-900/30">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors px-4 py-2">Funcionalidades</a>
                <a href="#plans" className="text-gray-300 hover:text-blue-400 transition-colors px-4 py-2">Planos</a>
                <a href="#results" className="text-gray-300 hover:text-blue-400 transition-colors px-4 py-2">Resultados</a>
                <Link 
                  href="/login"
                  className="mx-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  Entrar
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-12 sm:pt-20 pb-16 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-950/50 border border-blue-800/50 rounded-full text-xs sm:text-sm text-blue-300 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Mais de 50.000 brasileiros já transformaram suas vidas</span>
              <span className="sm:hidden">50.000+ transformações</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight px-4">
              Transforme seu corpo
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                e sua mente
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              O aplicativo fitness mais completo do Brasil. Contador de calorias com IA, 
              planos de treino personalizados e acompanhamento nutricional profissional.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-8 px-4">
              <Link
                href="/login"
                className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-600/50 flex items-center justify-center gap-2"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/videos"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-blue-800/50 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Ver Demonstração
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-8 sm:pt-12 text-xs sm:text-sm text-gray-400 px-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500" />
                <span>Sem taxa de adesão</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500" />
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500" />
                <span>7 dias grátis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-4">
              Tudo que você precisa para
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> alcançar seus objetivos</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 px-4">Funcionalidades desenvolvidas por especialistas em fitness e nutrição</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: <Zap className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "Contador de Calorias com IA",
                description: "Tire uma foto do seu prato e nossa IA calcula automaticamente as calorias e macros. Simples assim!",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "Plano de Treino Personalizado",
                description: "Envie uma foto do seu corpo e receba um plano de treino sob medida com vídeos 3D dos exercícios.",
                color: "from-blue-600 to-blue-500"
              },
              {
                icon: <Calendar className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "Planejamento Nutricional",
                description: "Dietas personalizadas baseadas no seu perfil, objetivos e rotina. Inclui lista de compras automática.",
                color: "from-cyan-500 to-blue-600"
              },
              {
                icon: <Award className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "Transformação Visual",
                description: "Veja como seu corpo ficará após seguir o plano. Tecnologia de IA para projeção realista de resultados.",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: <Users className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "Comunidade Ativa",
                description: "Compartilhe seu progresso, inspire outros e seja inspirado. Posts automáticos para redes sociais.",
                color: "from-purple-500 to-blue-600"
              },
              {
                icon: <Star className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "Relatórios Mensais",
                description: "Acompanhe sua evolução com relatórios detalhados de treinos, calorias e progresso fotográfico.",
                color: "from-blue-600 to-cyan-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 bg-gradient-to-br from-blue-950/30 to-blue-900/20 border border-blue-800/30 rounded-2xl hover:border-blue-600/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <div className={`inline-flex p-2 sm:p-3 bg-gradient-to-br ${feature.color} rounded-xl mb-4 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-4">
              Escolha o plano ideal para você
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 px-4">Invista na sua saúde com condições especiais</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Plano Básico */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-2xl backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Plano Básico</h3>
                <p className="text-sm sm:text-base text-gray-400">Para quem está começando a jornada</p>
              </div>
              
              <div className="mb-6 sm:mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-bold">R$ 49</span>
                  <span className="text-gray-400">/mês</span>
                </div>
                <div className="text-sm sm:text-base text-blue-400 font-semibold">
                  ou R$ 490/ano (economize R$ 98)
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Contador de calorias com IA",
                  "Plano de treino personalizado",
                  "Planejamento nutricional básico",
                  "Tracking de progresso",
                  "Relatórios mensais",
                  "Acesso à comunidade"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className="block w-full py-3 sm:py-4 bg-white/10 hover:bg-white/20 border border-blue-700/50 rounded-xl font-bold text-center transition-all duration-300"
              >
                Começar Grátis
              </Link>
            </div>

            {/* Plano Premium */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-br from-blue-600/20 to-blue-700/20 border-2 border-blue-500/50 rounded-2xl backdrop-blur-sm shadow-2xl shadow-blue-600/20">
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-xs sm:text-sm font-bold">
                MAIS POPULAR
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Plano Premium</h3>
                <p className="text-sm sm:text-base text-gray-400">Para resultados extraordinários</p>
              </div>
              
              <div className="mb-6 sm:mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-bold">R$ 99</span>
                  <span className="text-gray-400">/mês</span>
                </div>
                <div className="text-sm sm:text-base text-blue-400 font-semibold">
                  ou R$ 990/ano (economize R$ 198)
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Tudo do Plano Básico +",
                  "Vídeos 3D de exercícios",
                  "Transformação visual com IA",
                  "Treinos especiais exclusivos",
                  "Hábitos de saúde mental",
                  "Posts automáticos para redes sociais",
                  "Suporte prioritário 24/7",
                  "Acesso antecipado a novidades"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className="block w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/50"
              >
                Começar Grátis
              </Link>
            </div>
          </div>

          <p className="text-center text-sm sm:text-base text-gray-400 mt-6 sm:mt-8 px-4">
            🎁 7 dias grátis em qualquer plano • Cancele quando quiser • Sem taxas ocultas
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-4">
              Resultados reais de pessoas reais
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 px-4">Junte-se a milhares de brasileiros que já transformaram suas vidas</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: "Carlos Silva", result: "-15kg em 3 meses", rating: 5 },
              { name: "Ana Paula", result: "+8kg de massa magra", rating: 5 },
              { name: "Roberto Santos", result: "-20kg em 6 meses", rating: 5 }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-gradient-to-br from-blue-950/30 to-blue-900/20 border border-blue-800/30 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-500" fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                  "O GTFit mudou completamente minha vida. A facilidade de usar e os resultados são incríveis!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-blue-400 text-xs sm:text-sm">{testimonial.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 sm:p-12 bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/50 rounded-3xl backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Pronto para transformar sua vida?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              Comece hoje mesmo com 7 dias grátis. Sem compromisso, cancele quando quiser.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-600/50"
            >
              Começar Agora Grátis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-900/30 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500" fill="currentColor" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                GTFit
              </span>
            </Link>
            <div className="text-gray-400 text-xs sm:text-sm text-center">
              © 2024 GTFit. Todos os direitos reservados.
            </div>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Termos</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
