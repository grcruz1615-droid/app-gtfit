// Constants for GTFit Application

export const APP_NAME = "GTFit";
export const APP_TAGLINE = "Transforme seu corpo e mente";

// Pricing
export const PRICING = {
  basic: {
    monthly: 49,
    annual: 490,
    savings: 98,
  },
  premium: {
    monthly: 99,
    annual: 990,
    savings: 198,
  },
  trialDays: 7,
};

// Features by Plan
export const FEATURES = {
  basic: [
    "Contador de calorias com IA",
    "Plano de treino personalizado",
    "Planejamento nutricional básico",
    "Tracking de progresso",
    "Relatórios mensais",
    "Acesso à comunidade",
  ],
  premium: [
    "Tudo do Plano Básico",
    "Vídeos 3D de exercícios",
    "Transformação visual com IA",
    "Treinos especiais exclusivos",
    "Hábitos de saúde mental",
    "Posts automáticos para redes sociais",
    "Suporte prioritário 24/7",
    "Acesso antecipado a novidades",
  ],
};

// Activity Levels
export const ACTIVITY_LEVELS = {
  sedentary: {
    label: "Sedentário",
    description: "Pouco ou nenhum exercício",
    multiplier: 1.2,
  },
  light: {
    label: "Levemente ativo",
    description: "Exercício leve 1-3 dias/semana",
    multiplier: 1.375,
  },
  moderate: {
    label: "Moderadamente ativo",
    description: "Exercício moderado 3-5 dias/semana",
    multiplier: 1.55,
  },
  active: {
    label: "Muito ativo",
    description: "Exercício intenso 6-7 dias/semana",
    multiplier: 1.725,
  },
  very_active: {
    label: "Extremamente ativo",
    description: "Exercício muito intenso, trabalho físico",
    multiplier: 1.9,
  },
};

// Goals
export const GOALS = {
  lose_weight: {
    label: "Perder peso",
    description: "Foco em déficit calórico e cardio",
    calorieAdjustment: -500,
  },
  gain_muscle: {
    label: "Ganhar massa muscular",
    description: "Foco em superávit calórico e treino de força",
    calorieAdjustment: 300,
  },
  maintain: {
    label: "Manter peso",
    description: "Manutenção do peso atual",
    calorieAdjustment: 0,
  },
  improve_health: {
    label: "Melhorar saúde",
    description: "Foco em hábitos saudáveis e bem-estar",
    calorieAdjustment: 0,
  },
};

// Muscle Groups
export const MUSCLE_GROUPS = [
  "Peito",
  "Costas",
  "Ombros",
  "Bíceps",
  "Tríceps",
  "Pernas",
  "Glúteos",
  "Abdômen",
  "Panturrilha",
];

// Meal Types
export const MEAL_TYPES = {
  breakfast: { label: "Café da Manhã", icon: "☀️", time: "07:00-10:00" },
  lunch: { label: "Almoço", icon: "🍽️", time: "12:00-14:00" },
  snack: { label: "Lanche", icon: "🥤", time: "15:00-17:00" },
  dinner: { label: "Jantar", icon: "🌙", time: "19:00-21:00" },
};

// Workout Types
export const WORKOUT_TYPES = {
  strength: {
    label: "Força",
    description: "Treino com pesos e resistência",
    icon: "💪",
  },
  cardio: {
    label: "Cardio",
    description: "Exercícios aeróbicos",
    icon: "🏃",
  },
  flexibility: {
    label: "Flexibilidade",
    description: "Alongamento e mobilidade",
    icon: "🧘",
  },
  mixed: {
    label: "Misto",
    description: "Combinação de diferentes tipos",
    icon: "🔥",
  },
};

// Achievements
export const ACHIEVEMENTS = [
  {
    id: "first_workout",
    title: "Primeiro Treino",
    description: "Complete seu primeiro treino",
    icon: "🎯",
  },
  {
    id: "week_streak",
    title: "Semana Completa",
    description: "7 dias consecutivos de treino",
    icon: "🔥",
  },
  {
    id: "month_streak",
    title: "Mês Dedicado",
    description: "30 dias consecutivos de treino",
    icon: "💎",
  },
  {
    id: "weight_goal",
    title: "Meta de Peso",
    description: "Alcance sua meta de peso",
    icon: "🏆",
  },
  {
    id: "community_star",
    title: "Estrela da Comunidade",
    description: "100 curtidas em posts",
    icon: "⭐",
  },
];

// Habits Categories
export const HABIT_CATEGORIES = {
  fitness: {
    label: "Fitness",
    icon: "💪",
    color: "from-blue-500 to-cyan-500",
  },
  nutrition: {
    label: "Nutrição",
    icon: "🥗",
    color: "from-green-500 to-emerald-500",
  },
  mental_health: {
    label: "Saúde Mental",
    icon: "🧠",
    color: "from-purple-500 to-pink-500",
  },
  sleep: {
    label: "Sono",
    icon: "😴",
    color: "from-indigo-500 to-blue-500",
  },
  hydration: {
    label: "Hidratação",
    icon: "💧",
    color: "from-cyan-500 to-blue-500",
  },
};

// Default Habits
export const DEFAULT_HABITS = [
  {
    name: "Beber 2L de água",
    category: "hydration",
    frequency: "daily",
  },
  {
    name: "Dormir 8 horas",
    category: "sleep",
    frequency: "daily",
  },
  {
    name: "Meditar 10 minutos",
    category: "mental_health",
    frequency: "daily",
  },
  {
    name: "Treinar",
    category: "fitness",
    frequency: "daily",
  },
  {
    name: "Comer 5 porções de vegetais",
    category: "nutrition",
    frequency: "daily",
  },
];

// API Endpoints (for future implementation)
export const API_ENDPOINTS = {
  auth: {
    login: "/api/auth/login",
    register: "/api/auth/register",
    logout: "/api/auth/logout",
  },
  user: {
    profile: "/api/user/profile",
    updateProfile: "/api/user/profile/update",
  },
  meals: {
    analyze: "/api/meals/analyze",
    create: "/api/meals/create",
    list: "/api/meals/list",
  },
  workouts: {
    create: "/api/workouts/create",
    list: "/api/workouts/list",
    complete: "/api/workouts/complete",
  },
  progress: {
    photos: "/api/progress/photos",
    stats: "/api/progress/stats",
    report: "/api/progress/report",
  },
  ai: {
    analyzeMeal: "/api/ai/analyze-meal",
    analyzeBody: "/api/ai/analyze-body",
    generateWorkout: "/api/ai/generate-workout",
    generateMealPlan: "/api/ai/generate-meal-plan",
    transformBody: "/api/ai/transform-body",
  },
};

// Social Media Templates
export const SOCIAL_TEMPLATES = {
  workout_complete: {
    text: "💪 Treino concluído! {workout_name} - {duration} minutos\n🔥 {calories} calorias queimadas\n\n#GTFit #Fitness #Treino",
  },
  weight_milestone: {
    text: "🎉 Novo marco alcançado!\n⚖️ {weight_change}kg {direction}\n💪 Foco e determinação!\n\n#GTFit #Transformação #Fitness",
  },
  streak: {
    text: "🔥 {days} dias de sequência!\n💪 Consistência é a chave do sucesso\n\n#GTFit #Disciplina #Fitness",
  },
};

// Colors (matching the design system)
export const COLORS = {
  primary: {
    blue: "#1D4ED8",
    lightBlue: "#3B82F6",
    darkBlue: "#1E3A8A",
  },
  gradients: {
    primary: "from-blue-600 to-blue-700",
    secondary: "from-blue-500 to-cyan-500",
    accent: "from-purple-500 to-pink-500",
  },
  status: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },
};
