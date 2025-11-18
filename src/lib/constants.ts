// Pricing Configuration
export const PRICING = {
  basic: {
    monthly: 29.90,
    annual: 249.90,
    monthlyEquivalent: 20.83, // 249.90 / 12
    savings: 108.90, // (29.90 * 12) - 249.90
  },
  premium: {
    monthly: 54.90,
    annual: 419.90,
    monthlyEquivalent: 34.99, // 419.90 / 12
    savings: 238.90, // (54.90 * 12) - 419.90
  },
  launch: {
    premiumMonthly: 39.90,
    premiumAnnual: 349.90,
  },
};

// Features for each plan
export const FEATURES = {
  basic: [
    "Contador de calorias por foto com IA",
    "Planejador nutricional + lista de compras",
    "Plano de treino básico personalizado",
    "Vídeos 3D de exercícios (básicos)",
    "Contagem diária: treino + calorias",
    "Relatório mensal de evolução",
    "Registro diário com foto pós-treino",
    "Hábitos saudáveis básicos",
  ],
  premium: [
    "Tudo do Plano Básico +",
    "IA de transformação corporal (antes e depois realista)",
    "Treinos especiais e avançados",
    "Vídeos 3D completos + músculos destacados",
    "Quiz inteligente para personalização profunda",
    "Relatórios avançados com projeções de evolução",
    "Social sharing com templates exclusivos",
    "Mais interatividade e recursos extras",
  ],
};

// Comparison features for pricing table
export const COMPARISON_FEATURES = [
  { name: "Contador de Calorias por Foto", basic: true, premium: true },
  { name: "Planejador Nutricional", basic: true, premium: true },
  { name: "Lista de Compras Automática", basic: true, premium: true },
  { name: "Treinos Personalizados", basic: "Básicos", premium: "Avançados" },
  { name: "Vídeos 3D de Exercícios", basic: "Básicos", premium: "Completos" },
  { name: "Relatórios Mensais", basic: true, premium: "Avançados" },
  { name: "Registro e Foto Diária", basic: true, premium: true },
  { name: "Hábitos Saudáveis", basic: "Básicos", premium: "Avançados" },
  { name: "IA de Transformação Corporal", basic: false, premium: true },
  { name: "Treinos Especiais Premium", basic: false, premium: true },
  { name: "Projeção de Evolução", basic: false, premium: true },
  { name: "Algoritmo Preciso de Dieta", basic: false, premium: true },
  { name: "Ferramentas Sociais Exclusivas", basic: false, premium: true },
  { name: "Suporte Prioritário", basic: false, premium: true },
];

// Revenue projections (for business model)
export const REVENUE_PROJECTIONS = {
  users1000: {
    conversionRate: 0.045, // 4.5%
    subscribers: 45,
    distribution: {
      basicMonthly: 18,
      premiumMonthly: 27,
      basicAnnual: 5,
      premiumAnnual: 8,
    },
    monthlyRevenue: 6629.20,
  },
  users5000: {
    conversionRate: 0.045,
    subscribers: 225,
    monthlyRevenue: 33146.00,
  },
  users20000: {
    conversionRate: 0.045,
    subscribers: 900,
    monthlyRevenue: 132584.00,
  },
};

// Competitive analysis
export const COMPETITORS = [
  { name: "MyFitnessPal", price: "R$ 25/mês", features: "Contador de calorias básico" },
  { name: "Freeletics", price: "R$ 40/mês", features: "Treinos básicos" },
  { name: "Strong", price: "R$ 30/mês", features: "Registro de treinos" },
  { name: "Centr", price: "R$ 60/mês", features: "Treinos + nutrição" },
  { name: "BetterMe", price: "R$ 35/mês", features: "Planos personalizados" },
  { name: "GTFit", price: "R$ 54.90/mês", features: "IA completa + 3D + transformação corporal" },
];
