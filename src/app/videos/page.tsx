"use client";

import { useState, useEffect } from "react";
import { Zap, Play, Filter, Search, ArrowLeft, Dumbbell, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const [selectedMuscle, setSelectedMuscle] = useState<string>("Todos");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);

  const muscleGroups = ["Todos", "Peito", "Costas", "Pernas", "Ombros", "Bíceps", "Tríceps", "Abdômen"];
  const difficulties = ["Todos", "Iniciante", "Intermediário", "Avançado"];

  useEffect(() => {
    loadExercises();
  }, []);

  useEffect(() => {
    filterExercises();
  }, [selectedMuscle, selectedDifficulty, searchTerm, exercises]);

  const loadExercises = async () => {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("exercises")
        .select("*")
        .order("name");

      if (error) throw error;
      setExercises(data || []);
      setFilteredExercises(data || []);
    } catch (error) {
      console.error("Erro ao carregar exercícios:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterExercises = () => {
    let filtered = exercises;

    if (selectedMuscle !== "Todos") {
      filtered = filtered.filter((ex) => ex.muscle_group === selectedMuscle);
    }

    if (selectedDifficulty !== "Todos") {
      filtered = filtered.filter((ex) => ex.difficulty === selectedDifficulty);
    }

    if (searchTerm) {
      filtered = filtered.filter((ex) =>
        ex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ex.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredExercises(filtered);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante":
        return "text-green-400 bg-green-500/10 border-green-500/30";
      case "Intermediário":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30";
      case "Avançado":
        return "text-red-400 bg-red-500/10 border-red-500/30";
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/30";
    }
  };

  if (selectedExercise) {
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
              <button
                onClick={() => setSelectedExercise(null)}
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-white/10 hover:bg-white/20 border border-blue-700/50 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </button>
            </div>
          </div>
        </nav>

        {/* Exercise Detail */}
        <div className="relative z-10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Video Player */}
              <div className="space-y-4">
                <div className="relative aspect-video bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-2xl overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center border-2 border-blue-500/50">
                        <Play className="w-10 h-10 text-blue-400" fill="currentColor" />
                      </div>
                      <p className="text-gray-400">Vídeo 3D em Desenvolvimento</p>
                      <p className="text-sm text-gray-500">Em breve: Animação 3D interativa com destaque muscular</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(selectedExercise.difficulty)}`}>
                    {selectedExercise.difficulty}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    {selectedExercise.muscle_group}
                  </span>
                </div>
              </div>

              {/* Exercise Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-4">{selectedExercise.name}</h1>
                  <p className="text-lg text-gray-400 leading-relaxed">{selectedExercise.description}</p>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    Como Executar
                  </h3>
                  <ol className="space-y-3">
                    {selectedExercise.instructions.map((instruction, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-300">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-xl text-center">
                    <Dumbbell className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">3-4</div>
                    <div className="text-xs text-gray-400">Séries</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-xl text-center">
                    <TrendingUp className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">8-12</div>
                    <div className="text-xs text-gray-400">Repetições</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-xl text-center">
                    <Target className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">60s</div>
                    <div className="text-xs text-gray-400">Descanso</div>
                  </div>
                </div>

                <Link
                  href="/login"
                  className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/50"
                >
                  Começar Treino Personalizado
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

      <div className="relative z-10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Biblioteca de Exercícios
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> em 3D</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Aprenda a executar cada exercício perfeitamente com nossas animações 3D interativas e instruções detalhadas
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar exercício..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-blue-950/40 border border-blue-800/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-600/50 transition-colors"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Grupo Muscular:</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {muscleGroups.map((muscle) => (
                  <button
                    key={muscle}
                    onClick={() => setSelectedMuscle(muscle)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                      selectedMuscle === muscle
                        ? "bg-blue-600 text-white"
                        : "bg-blue-950/40 text-gray-400 hover:bg-blue-900/40 border border-blue-800/40"
                    }`}
                  >
                    {muscle}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Dificuldade:</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                      selectedDifficulty === difficulty
                        ? "bg-blue-600 text-white"
                        : "bg-blue-950/40 text-gray-400 hover:bg-blue-900/40 border border-blue-800/40"
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-6">
            <p className="text-gray-400">
              {loading ? "Carregando..." : `${filteredExercises.length} exercícios encontrados`}
            </p>
          </div>

          {/* Exercise Grid */}
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="p-6 bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-2xl animate-pulse"
                >
                  <div className="aspect-video bg-blue-900/40 rounded-xl mb-4" />
                  <div className="h-6 bg-blue-900/40 rounded mb-2" />
                  <div className="h-4 bg-blue-900/40 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : filteredExercises.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">Nenhum exercício encontrado com esses filtros</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredExercises.map((exercise) => (
                <button
                  key={exercise.id}
                  onClick={() => setSelectedExercise(exercise)}
                  className="group p-6 bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-2xl hover:border-blue-600/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm text-left"
                >
                  <div className="relative aspect-video bg-blue-900/40 rounded-xl mb-4 overflow-hidden">
                    <Image
                      src={exercise.thumbnail_url}
                      alt={exercise.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-600/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {exercise.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{exercise.description}</p>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(exercise.difficulty)}`}>
                      {exercise.difficulty}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      {exercise.muscle_group}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/50 rounded-3xl backdrop-blur-sm">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Pronto para começar sua transformação?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Tenha acesso a todos os exercícios em 3D, planos personalizados e muito mais!
              </p>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-600/50"
              >
                Começar Agora Grátis
                <Play className="w-5 h-5" />
              </Link>
              <p className="text-sm text-gray-400 mt-4">
                🎁 7 dias grátis • Cancele quando quiser
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-900/30 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 mt-16">
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
