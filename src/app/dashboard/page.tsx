"use client";

import { useState } from "react";
import { 
  Zap, Camera, TrendingUp, Calendar, Award, Users, 
  Home, Dumbbell, Apple, BarChart3, Settings, LogOut,
  Plus, Fire, Target, Clock, ChevronRight, Sparkles
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("home");

  const menuItems = [
    { id: "home", icon: Home, label: "Início" },
    { id: "workout", icon: Dumbbell, label: "Treinos" },
    { id: "nutrition", icon: Apple, label: "Nutrição" },
    { id: "progress", icon: BarChart3, label: "Progresso" },
    { id: "community", icon: Users, label: "Comunidade" },
    { id: "settings", icon: Settings, label: "Configurações" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-blue-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(0,0,0,0))]" />
      </div>

      {/* Sidebar */}
      <aside className="relative z-10 w-72 border-r border-blue-900/30 bg-black/50 backdrop-blur-xl flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-blue-900/30">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 blur-xl opacity-50 animate-pulse" />
              <Zap className="w-10 h-10 text-blue-500 relative" fill="currentColor" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              GTFit
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-600/50"
                    : "hover:bg-white/5"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-blue-900/30">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center font-bold">
              U
            </div>
            <div className="flex-1">
              <div className="font-semibold">Usuário</div>
              <div className="text-xs text-gray-400">Plano Premium</div>
            </div>
            <LogOut className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Olá, <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Campeão!</span>
            </h1>
            <p className="text-gray-400 text-lg">Vamos continuar sua jornada de transformação hoje</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Fire, label: "Calorias Hoje", value: "1,847", target: "/ 2,200", color: "from-orange-500 to-red-500" },
              { icon: Target, label: "Meta Semanal", value: "4/5", target: "treinos", color: "from-blue-500 to-cyan-500" },
              { icon: TrendingUp, label: "Progresso", value: "-3.2kg", target: "este mês", color: "from-green-500 to-emerald-500" },
              { icon: Clock, label: "Sequência", value: "12", target: "dias", color: "from-purple-500 to-pink-500" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-xl mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">
                    {stat.label} <span className="text-blue-400">{stat.target}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Contador de Calorias */}
            <div className="p-8 bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/50 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Contador de Calorias</h3>
                  <p className="text-gray-400">Tire uma foto do seu prato</p>
                </div>
                <Camera className="w-12 h-12 text-blue-400" />
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/50 flex items-center justify-center gap-2">
                <Camera className="w-5 h-5" />
                Fotografar Refeição
              </button>
            </div>

            {/* Check-in Diário */}
            <div className="p-8 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/50 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Check-in Diário</h3>
                  <p className="text-gray-400">Registre seu progresso</p>
                </div>
                <Award className="w-12 h-12 text-purple-400" />
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-600/50 flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
                Fazer Check-in
              </button>
            </div>
          </div>

          {/* Treino do Dia */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Treino de Hoje</h2>
              <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                Ver todos
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-2xl backdrop-blur-sm">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 border border-blue-500/50 rounded-full text-sm text-blue-300 mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span>Treino Personalizado</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Treino de Peito e Tríceps</h3>
                  <p className="text-gray-400">45 minutos • 8 exercícios • Nível Intermediário</p>
                </div>
                <Dumbbell className="w-12 h-12 text-blue-400" />
              </div>
              
              <div className="space-y-3 mb-6">
                {[
                  "Supino reto com barra - 4x12",
                  "Supino inclinado com halteres - 3x12",
                  "Crucifixo - 3x15",
                  "Tríceps testa - 3x12"
                ].map((exercise, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-300">{exercise}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/50">
                Iniciar Treino
              </button>
            </div>
          </div>

          {/* Plano Nutricional */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Plano Nutricional de Hoje</h2>
              <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                Ver cardápio completo
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { meal: "Café da Manhã", time: "08:00", calories: "450 kcal", items: ["Ovos mexidos", "Pão integral", "Abacate"] },
                { meal: "Almoço", time: "12:30", calories: "650 kcal", items: ["Frango grelhado", "Arroz integral", "Salada"] },
                { meal: "Jantar", time: "19:00", calories: "550 kcal", items: ["Salmão", "Batata doce", "Brócolis"] },
              ].map((meal, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{meal.meal}</h3>
                      <p className="text-sm text-gray-400">{meal.time}</p>
                    </div>
                    <div className="text-blue-400 font-semibold">{meal.calories}</div>
                  </div>
                  <ul className="space-y-2">
                    {meal.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Comunidade */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Comunidade GTFit</h2>
              <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                Ver mais
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Carlos Silva", achievement: "Completou 30 dias de sequência!", time: "há 2 horas" },
                { name: "Ana Paula", achievement: "Perdeu 5kg este mês! 🎉", time: "há 5 horas" },
              ].map((post, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-2xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center font-bold">
                      {post.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold">{post.name}</div>
                      <div className="text-sm text-gray-400">{post.time}</div>
                    </div>
                  </div>
                  <p className="text-gray-300">{post.achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
