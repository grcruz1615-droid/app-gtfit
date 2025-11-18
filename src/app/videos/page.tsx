"use client";

import { useState, useEffect } from "react";
import { Play, Zap, TrendingUp, Award, Menu, X } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

interface Exercise {
  id: string;
  name: string;
  description: string;
  muscle_group: string;
  difficulty: string;
  video_3d_url: string;
  thumbnail_url: string;
  instructions: string[];
}

export default function VideosPage() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    loadExercises();
  }, []);

  const loadExercises = async () => {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("exercises")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setExercises(data || []);
    } catch (error) {
      console.error("Erro ao carregar exercícios:", error);
    } finally {
      setLoading(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "iniciante":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "intermediário":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "avançado":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
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
              <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Início</Link>
              <Link href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Planos</Link>
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
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors px-4 py-2">Início</Link>
                <Link href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors px-4 py-2">Planos</Link>
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
      <section className="relative py-12 sm:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/20 to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#1e3a8a] rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e3a8a] rounded-full blur-[150px] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#1e3a8a]/20 border border-[#1e3a8a]/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-[#60a5fa]" />
            <span className="text-xs sm:text-sm text-[#60a5fa]">Vídeos 3D Exclusivos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-[#60a5fa] to-white bg-clip-text text-transparent px-4">
            Aprenda Cada Exercício
            <br />
            Com Perfeição
          </h1>

          <p className="text-base sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Vídeos em 3D que mostram exatamente quais músculos você está trabalhando.
            <br className="hidden sm:block" />
            Técnica perfeita, resultados reais.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#1e3a8a]/20 border border-[#1e3a8a]/30 rounded-xl flex items-center justify-center">
                <Play className="w-5 sm:w-6 h-5 sm:h-6 text-[#60a5fa]" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm text-gray-400">Vídeos 3D</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#1e3a8a]/20 border border-[#1e3a8a]/30 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-[#60a5fa]" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                <div className="text-xs sm:text-sm text-gray-400">Técnica Correta</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#1e3a8a]/20 border border-[#1e3a8a]/30 rounded-xl flex items-center justify-center">
                <Award className="w-5 sm:w-6 h-5 sm:h-6 text-[#60a5fa]" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">Premium</div>
                <div className="text-xs sm:text-sm text-gray-400">Qualidade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercises Grid */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 px-4">Biblioteca de Exercícios</h2>
            <p className="text-sm sm:text-base text-gray-400 px-4">Clique em qualquer exercício para ver o vídeo 3D completo</p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 animate-pulse">
                  <div className="aspect-video bg-white/10 rounded-xl mb-4"></div>
                  <div className="h-6 bg-white/10 rounded mb-2"></div>
                  <div className="h-4 bg-white/10 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {exercises.map((exercise) => (
                <div
                  key={exercise.id}
                  onClick={() => setSelectedExercise(exercise)}
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#1e3a8a]/50 transition-all cursor-pointer hover:scale-105"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={exercise.thumbnail_url}
                      alt={exercise.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center">
                        <Play className="w-6 sm:w-8 h-6 sm:h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(exercise.difficulty)}`}>
                        {exercise.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{exercise.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3">{exercise.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 sm:px-3 py-1 bg-[#1e3a8a]/20 border border-[#1e3a8a]/30 rounded-full text-xs text-[#60a5fa]">
                        {exercise.muscle_group}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal de Vídeo */}
      {selectedExercise && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedExercise(null)}
        >
          <div
            className="bg-black border border-white/10 rounded-2xl max-w-4xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <img
                src={selectedExercise.video_3d_url}
                alt={selectedExercise.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <button
                onClick={() => setSelectedExercise(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">{selectedExercise.name}</h2>
                  <p className="text-sm sm:text-base text-gray-400">{selectedExercise.description}</p>
                </div>
                <span className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium border ${getDifficultyColor(selectedExercise.difficulty)}`}>
                  {selectedExercise.difficulty}
                </span>
              </div>

              <div className="mb-6">
                <span className="px-3 sm:px-4 py-2 bg-[#1e3a8a]/20 border border-[#1e3a8a]/30 rounded-full text-sm text-[#60a5fa]">
                  {selectedExercise.muscle_group}
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-4">Como Executar</h3>
                <ol className="space-y-3">
                  {selectedExercise.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <span className="text-sm sm:text-base text-gray-300">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#1e3a8a]/10 border border-[#1e3a8a]/30 rounded-xl">
                <p className="text-center text-sm sm:text-base text-[#60a5fa]">
                  💪 Assine o Plano Premium para acessar todos os vídeos 3D com músculos destacados!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#1e3a8a]/20 to-[#1e3a8a]/10 border border-[#1e3a8a]/30 rounded-3xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 px-4">
              Pronto Para Treinar Com Técnica Perfeita?
            </h2>
            <p className="text-base sm:text-xl text-gray-400 mb-6 sm:mb-8 px-4">
              Acesse todos os vídeos 3D e transforme seu corpo com segurança
            </p>
            <Link
              href="/pricing"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold rounded-xl transition-colors"
            >
              Ver Planos e Preços
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
