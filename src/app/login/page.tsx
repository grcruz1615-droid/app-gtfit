"use client";

import { useState } from "react";
import { Zap, Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de autenticação com Supabase
    console.log("Login/SignUp:", { email, password, isSignUp });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-blue-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(0,0,0,0))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-3 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 blur-xl opacity-50 animate-pulse" />
            <Zap className="w-12 h-12 text-blue-500 relative" fill="currentColor" />
          </div>
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            GTFit
          </span>
        </Link>

        {/* Form Card */}
        <div className="p-8 bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-800/40 rounded-2xl backdrop-blur-sm">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {isSignUp ? "Criar Conta" : "Bem-vindo de volta"}
            </h1>
            <p className="text-gray-400">
              {isSignUp 
                ? "Comece sua jornada de transformação hoje" 
                : "Entre para continuar sua evolução"
              }
            </p>
          </div>

          {/* Trial Badge */}
          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-950/50 border border-green-800/50 rounded-full text-sm text-green-300 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>7 dias grátis • Cancele quando quiser</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-blue-950/40 border border-blue-800/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-600/50 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-blue-950/40 border border-blue-800/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-600/50 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/50 flex items-center justify-center gap-2"
            >
              {isSignUp ? "Criar Conta Grátis" : "Entrar"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Toggle Sign Up / Login */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {isSignUp 
                ? "Já tem uma conta? Entre aqui" 
                : "Não tem conta? Crie uma grátis"
              }
            </button>
          </div>

          {/* Social Login (Optional) */}
          <div className="mt-6 pt-6 border-t border-blue-800/40">
            <p className="text-center text-sm text-gray-400 mb-4">Ou continue com</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="py-2 px-4 bg-white/5 hover:bg-white/10 border border-blue-800/40 rounded-lg transition-colors text-sm font-medium">
                Google
              </button>
              <button className="py-2 px-4 bg-white/5 hover:bg-white/10 border border-blue-800/40 rounded-lg transition-colors text-sm font-medium">
                Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
            ← Voltar para página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
