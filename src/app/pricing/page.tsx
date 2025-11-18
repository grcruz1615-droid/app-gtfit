"use client";

import { useState } from "react";
import { ArrowRight, Zap, CheckCircle2, X, Check, Sparkles, Crown, CreditCard } from "lucide-react";
import Link from "next/link";
import { PRICING, FEATURES, COMPARISON_FEATURES } from "@/lib/constants";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const calculateInstallments = (value: number, installments: number = 12) => {
    return (value / installments).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-blue-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(0,0,0,0))]" />
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
            <Link 
              href="/login"
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/50 text-sm sm:text-base"
            >
              Entrar
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-orange-950/50 border border-orange-800/50 rounded-full text-xs sm:text-sm text-orange-300 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">🎁 Oferta de Lançamento: Premium por R$ {PRICING.launch.premiumMonthly}/mês nos primeiros 3 meses!</span>
              <span className="sm:hidden">🎁 Oferta: R$ {PRICING.launch.premiumMonthly}/mês</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              Transforme seu corpo com a GTFit
            </h1>
            <p className="text-base sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Planos flexíveis que cabem na sua rotina — e no seu bolso. 
              Com a GTFit, você tem nutrição inteligente, treinos personalizados e a primeira IA 
              que mostra como seu corpo vai evoluir antes de você chegar lá.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-2 sm:gap-4 p-1 sm:p-2 bg-blue-950/50 border border-blue-800/50 rounded-xl backdrop-blur-sm">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                  billingCycle === "monthly"
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 text-sm sm:text-base ${
                  billingCycle === "annual"
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Anual
                <span className="text-xs px-2 py-0.5 bg-green-500 text-white rounded-full hidden sm:inline">
                  Economize até 36%
                </span>
                <span className="text-xs px-2 py-0.5 bg-green-500 text-white rounded-full sm:hidden">
                  -36%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16 sm:mb-24">
            {/* Plano Básico */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-2xl backdrop-blur-sm hover:border-blue-600/50 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Plano Básico</h3>
                <p className="text-sm sm:text-base text-gray-400">Ideal para quem quer começar</p>
              </div>
              
              <div className="mb-6 sm:mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-bold">
                    R$ {billingCycle === "monthly" 
                      ? PRICING.basic.monthly.toFixed(2)
                      : PRICING.basic.monthlyEquivalent.toFixed(2)
                    }
                  </span>
                  <span className="text-gray-400 text-sm sm:text-base">/mês</span>
                </div>
                {billingCycle === "annual" && (
                  <>
                    <div className="text-sm sm:text-base text-blue-400 font-semibold">
                      R$ {PRICING.basic.annual.toFixed(2)} cobrado anualmente
                    </div>
                    <div className="text-xs sm:text-sm text-green-400 mt-1">
                      💰 Economize R$ {PRICING.basic.savings.toFixed(2)} por ano (30% OFF)
                    </div>
                    <div className="flex items-center gap-2 mt-3 p-3 bg-gradient-to-r from-blue-600/10 to-blue-700/10 border border-blue-500/30 rounded-lg">
                      <CreditCard className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="text-blue-300 font-semibold">Parcele em até 12x sem juros</div>
                        <div className="text-gray-400">12x de R$ {calculateInstallments(PRICING.basic.annual)} no cartão</div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {FEATURES.basic.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/login"
                className="block w-full py-3 sm:py-4 bg-white/10 hover:bg-white/20 border border-blue-700/50 rounded-xl font-bold text-center transition-all duration-300 text-sm sm:text-base"
              >
                Começar com o Básico
              </Link>
            </div>

            {/* Plano Premium */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-br from-blue-600/20 to-blue-700/20 border-2 border-blue-500/50 rounded-2xl backdrop-blur-sm shadow-2xl shadow-blue-600/20 hover:scale-105 transition-all duration-300">
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1">
                <Crown className="w-3 sm:w-4 h-3 sm:h-4" />
                MAIS POPULAR
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Plano Premium</h3>
                <p className="text-sm sm:text-base text-gray-400">Para quem quer resultados reais e rápidos</p>
              </div>
              
              <div className="mb-6 sm:mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-bold">
                    R$ {billingCycle === "monthly" 
                      ? PRICING.premium.monthly.toFixed(2)
                      : PRICING.premium.monthlyEquivalent.toFixed(2)
                    }
                  </span>
                  <span className="text-gray-400 text-sm sm:text-base">/mês</span>
                </div>
                {billingCycle === "annual" && (
                  <>
                    <div className="text-sm sm:text-base text-blue-400 font-semibold">
                      R$ {PRICING.premium.annual.toFixed(2)} cobrado anualmente
                    </div>
                    <div className="text-xs sm:text-sm text-green-400 mt-1">
                      💰 Economize R$ {PRICING.premium.savings.toFixed(2)} por ano (36% OFF)
                    </div>
                    <div className="flex items-center gap-2 mt-3 p-3 bg-gradient-to-r from-green-600/20 to-blue-600/20 border-2 border-green-500/50 rounded-lg animate-pulse">
                      <CreditCard className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="text-green-300 font-bold">🔥 Parcele em até 12x sem juros!</div>
                        <div className="text-blue-200 font-semibold">12x de R$ {calculateInstallments(PRICING.premium.annual)} no cartão</div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {FEATURES.premium.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/login"
                className="block w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/50 text-sm sm:text-base"
              >
                Experimentar o Premium
              </Link>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">
              Escolha o plano ideal para você
            </h2>
            <div className="bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-2xl backdrop-blur-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-800/40">
                      <th className="text-left p-4 sm:p-6 text-gray-400 font-semibold text-sm sm:text-base">Recurso</th>
                      <th className="text-center p-4 sm:p-6 font-bold text-sm sm:text-base">Básico</th>
                      <th className="text-center p-4 sm:p-6 font-bold bg-blue-600/10 text-sm sm:text-base">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_FEATURES.map((feature, index) => (
                      <tr key={index} className="border-b border-blue-800/20 last:border-0 hover:bg-blue-900/10 transition-colors">
                        <td className="p-4 sm:p-6 text-gray-300 text-sm sm:text-base">{feature.name}</td>
                        <td className="text-center p-4 sm:p-6">
                          {typeof feature.basic === 'boolean' ? (
                            feature.basic ? (
                              <Check className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500 mx-auto" />
                            ) : (
                              <X className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600 mx-auto" />
                            )
                          ) : (
                            <span className="text-xs sm:text-sm text-gray-400">{feature.basic}</span>
                          )}
                        </td>
                        <td className="text-center p-4 sm:p-6 bg-blue-600/5">
                          {typeof feature.premium === 'boolean' ? (
                            feature.premium ? (
                              <Check className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400 mx-auto" />
                            ) : (
                              <X className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600 mx-auto" />
                            )
                          ) : (
                            <span className="text-xs sm:text-sm text-blue-300 font-medium">{feature.premium}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">Perguntas Frequentes</h2>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  question: "Como funciona o período de teste gratuito?",
                  answer: "Você tem 7 dias grátis para testar todos os recursos do plano escolhido. Cancele a qualquer momento antes do fim do período e não será cobrado."
                },
                {
                  question: "Posso parcelar no cartão?",
                  answer: "Sim! Para planos anuais, oferecemos parcelamento em até 12x sem juros no cartão de crédito. É a melhor forma de garantir seu ano de transformação com parcelas que cabem no bolso."
                },
                {
                  question: "Posso mudar de plano depois?",
                  answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor no próximo ciclo de cobrança."
                },
                {
                  question: "Como funciona a cobrança anual?",
                  answer: "No plano anual, você paga uma vez por ano (ou parcela em até 12x sem juros) e economiza até 36% comparado ao plano mensal. É a melhor opção para quem está comprometido com a transformação."
                },
                {
                  question: "Posso cancelar a qualquer momento?",
                  answer: "Sim! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento e continuará tendo acesso até o fim do período pago."
                },
                {
                  question: "O parcelamento tem juros?",
                  answer: "Não! O parcelamento em até 12x é totalmente sem juros. Você paga o mesmo valor total, apenas dividido em parcelas menores no seu cartão de crédito."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 bg-gradient-to-br from-blue-950/30 to-blue-900/20 border border-blue-800/30 rounded-xl backdrop-blur-sm"
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{faq.question}</h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 sm:p-12 bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/50 rounded-3xl backdrop-blur-sm">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
                💥 Assinatura Anual Premium – Economia Máxima!
              </h2>
              <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
                Garanta um ano inteiro de acesso pelo preço de 7 meses. 
                Parcele em até 12x sem juros no cartão!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-green-400">
                  <CreditCard className="w-5 h-5" />
                  <span className="font-semibold">12x de R$ {calculateInstallments(PRICING.premium.annual)}</span>
                </div>
                <span className="text-gray-400 hidden sm:inline">ou</span>
                <div className="text-blue-400 font-semibold">
                  R$ {PRICING.premium.annual.toFixed(2)} à vista
                </div>
              </div>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-600/50"
              >
                Começar Agora Grátis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-xs sm:text-sm text-gray-400 mt-4 px-4">
                🎁 7 dias grátis • Cancele quando quiser • Sem taxas ocultas • Parcele em até 12x sem juros
              </p>
            </div>
          </div>
        </div>
      </div>

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
