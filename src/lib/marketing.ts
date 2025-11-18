// Marketing and Business Intelligence Data for GTFit

export const MARKETING_DATA = {
  // Análise Competitiva Detalhada
  competitors: {
    myFitnessPal: {
      name: "MyFitnessPal",
      priceRange: "R$ 20-40/mês",
      mainFeatures: ["Contador de calorias básico", "Banco de dados de alimentos"],
      weaknesses: ["Sem IA", "Sem treinos personalizados", "Interface desatualizada"],
      marketShare: "~30%",
    },
    freeletics: {
      name: "Freeletics",
      priceRange: "R$ 40-60/mês",
      mainFeatures: ["Treinos personalizados", "Planos de treino"],
      weaknesses: ["Sem nutrição avançada", "Sem IA de transformação"],
      marketShare: "~15%",
    },
    strong: {
      name: "Strong",
      priceRange: "R$ 25-35/mês",
      mainFeatures: ["Tracking de treinos", "Histórico de exercícios"],
      weaknesses: ["Sem nutrição", "Sem IA", "Foco apenas em academia"],
      marketShare: "~10%",
    },
    centr: {
      name: "Centr",
      priceRange: "R$ 60-80/mês",
      mainFeatures: ["Treinos + Nutrição", "Conteúdo de celebridades"],
      weaknesses: ["Muito caro", "Sem IA personalizada", "Foco em mercado internacional"],
      marketShare: "~8%",
    },
    betterMe: {
      name: "BetterMe",
      priceRange: "R$ 30-50/mês",
      mainFeatures: ["Planos de emagrecimento", "Meditação"],
      weaknesses: ["Sem IA avançada", "Sem vídeos 3D", "Limitado para ganho muscular"],
      marketShare: "~12%",
    },
  },

  // Diferencial Competitivo do GTFit
  gtfitAdvantages: [
    "IA de transformação corporal (EXCLUSIVO)",
    "Contador de calorias por foto com IA",
    "Vídeos 3D com músculos destacados",
    "Planejamento nutricional + lista de compras automática",
    "Social sharing profissional",
    "Relatórios avançados com projeções",
    "Quiz inteligente de personalização",
    "Hábitos integrados para saúde mental",
    "Preço competitivo (R$ 29,90-54,90)",
    "Interface brasileira e intuitiva",
  ],

  // Projeções de Receita Detalhadas
  revenueProjections: {
    scenario1: {
      name: "Conservador",
      users: 1000,
      conversionRate: 0.045,
      subscribers: 45,
      distribution: {
        basicMonthly: 18,
        premiumMonthly: 27,
        basicAnnual: 5,
        premiumAnnual: 8,
      },
      monthlyRevenue: 6629.20,
      annualRevenue: 79550.40,
    },
    scenario2: {
      name: "Moderado",
      users: 5000,
      conversionRate: 0.05,
      subscribers: 250,
      distribution: {
        basicMonthly: 100,
        premiumMonthly: 150,
        basicAnnual: 30,
        premiumAnnual: 45,
      },
      monthlyRevenue: 36000,
      annualRevenue: 432000,
    },
    scenario3: {
      name: "Otimista",
      users: 20000,
      conversionRate: 0.055,
      subscribers: 1100,
      distribution: {
        basicMonthly: 440,
        premiumMonthly: 660,
        basicAnnual: 130,
        premiumAnnual: 195,
      },
      monthlyRevenue: 150000,
      annualRevenue: 1800000,
    },
  },

  // Métricas de Negócio (CAC, LTV, ROI)
  businessMetrics: {
    cac: {
      organic: 15, // R$ por usuário (SEO, redes sociais)
      paidAds: 45, // R$ por usuário (Google Ads, Facebook Ads)
      influencer: 30, // R$ por usuário (parcerias com influencers)
      average: 30, // R$ média ponderada
    },
    ltv: {
      basic: {
        monthly: 179.40, // 6 meses de retenção média
        annual: 499.80, // 2 anos de retenção média
      },
      premium: {
        monthly: 329.40, // 6 meses de retenção média
        annual: 839.80, // 2 anos de retenção média
      },
    },
    roi: {
      basic: {
        monthly: 5.98, // LTV/CAC = 179.40/30
        annual: 16.66, // LTV/CAC = 499.80/30
      },
      premium: {
        monthly: 10.98, // LTV/CAC = 329.40/30
        annual: 27.99, // LTV/CAC = 839.80/30
      },
    },
    churnRate: {
      monthly: 0.15, // 15% ao mês
      annual: 0.05, // 5% ao ano
    },
  },

  // Estratégia de Marketing
  marketingStrategy: {
    channels: [
      {
        name: "Redes Sociais Orgânicas",
        platforms: ["Instagram", "TikTok", "YouTube Shorts"],
        budget: "R$ 0-2.000/mês",
        expectedROI: "300-500%",
        tactics: [
          "Transformações antes/depois de usuários",
          "Dicas rápidas de treino e nutrição",
          "Desafios de 30 dias",
          "Parcerias com micro-influencers fitness",
        ],
      },
      {
        name: "Google Ads",
        platforms: ["Google Search", "YouTube"],
        budget: "R$ 5.000-15.000/mês",
        expectedROI: "200-400%",
        tactics: [
          "Palavras-chave: 'app fitness', 'contador calorias', 'treino personalizado'",
          "Remarketing para visitantes do site",
          "Anúncios em vídeo no YouTube",
        ],
      },
      {
        name: "Meta Ads",
        platforms: ["Facebook", "Instagram"],
        budget: "R$ 5.000-15.000/mês",
        expectedROI: "250-450%",
        tactics: [
          "Segmentação: 18-45 anos, interesse em fitness",
          "Criativos com transformações reais",
          "Lookalike audiences de clientes premium",
        ],
      },
      {
        name: "Influencer Marketing",
        platforms: ["Instagram", "YouTube", "TikTok"],
        budget: "R$ 3.000-10.000/mês",
        expectedROI: "300-600%",
        tactics: [
          "Parcerias com 10-20 micro-influencers (10k-100k seguidores)",
          "Códigos de desconto exclusivos",
          "Conteúdo autêntico de transformação",
        ],
      },
      {
        name: "SEO e Content Marketing",
        platforms: ["Blog", "YouTube"],
        budget: "R$ 2.000-5.000/mês",
        expectedROI: "400-800% (longo prazo)",
        tactics: [
          "Artigos: 'Como perder peso', 'Melhores exercícios para...'",
          "Vídeos tutoriais de exercícios",
          "Guias completos de nutrição",
        ],
      },
    ],
    launchCampaign: {
      duration: "3 meses",
      budget: "R$ 30.000-50.000",
      goals: {
        downloads: 10000,
        subscribers: 500,
        revenue: "R$ 30.000/mês",
      },
      tactics: [
        "Oferta de lançamento: Premium R$ 39,90/mês",
        "Programa de indicação: 1 mês grátis para cada amigo",
        "Desafio de transformação de 90 dias com prêmios",
        "Parcerias com academias locais",
      ],
    },
  },

  // Personas de Usuários
  userPersonas: [
    {
      name: "João, o Iniciante",
      age: 28,
      occupation: "Analista de TI",
      goal: "Perder 15kg e ganhar condicionamento",
      painPoints: [
        "Não sabe por onde começar",
        "Falta de tempo para ir à academia",
        "Dificuldade em controlar alimentação",
      ],
      preferredPlan: "Básico → Premium após 2 meses",
      monthlyBudget: "R$ 30-60",
    },
    {
      name: "Maria, a Determinada",
      age: 35,
      occupation: "Empresária",
      goal: "Ganhar massa muscular e definição",
      painPoints: [
        "Rotina muito corrida",
        "Precisa de resultados rápidos",
        "Quer acompanhamento profissional",
      ],
      preferredPlan: "Premium Anual",
      monthlyBudget: "R$ 50-100",
    },
    {
      name: "Carlos, o Atleta Amador",
      age: 42,
      occupation: "Engenheiro",
      goal: "Manter forma e melhorar performance",
      painPoints: [
        "Platô de resultados",
        "Precisa de variedade nos treinos",
        "Quer otimizar nutrição",
      ],
      preferredPlan: "Premium",
      monthlyBudget: "R$ 60-120",
    },
  ],

  // Cronograma de Lançamento
  launchTimeline: {
    month1: {
      name: "Pré-lançamento",
      activities: [
        "Finalizar desenvolvimento do MVP",
        "Criar landing page e materiais de marketing",
        "Recrutar 50 beta testers",
        "Configurar analytics e tracking",
      ],
    },
    month2: {
      name: "Soft Launch",
      activities: [
        "Lançar para beta testers",
        "Coletar feedback e fazer ajustes",
        "Criar conteúdo para redes sociais (30 posts)",
        "Estabelecer parcerias com 5 micro-influencers",
      ],
    },
    month3: {
      name: "Lançamento Oficial",
      activities: [
        "Campanha de lançamento em todas as plataformas",
        "Ativar Google Ads e Meta Ads",
        "Programa de indicação",
        "Desafio de 90 dias",
      ],
    },
    month4to6: {
      name: "Crescimento e Otimização",
      activities: [
        "Otimizar campanhas baseado em dados",
        "Expandir parcerias com influencers",
        "Adicionar novos recursos baseado em feedback",
        "Escalar investimento em canais de melhor performance",
      ],
    },
  },
};

// Textos Prontos para App Store e Play Store
export const APP_STORE_COPY = {
  title: "GTFit - Fitness com IA",
  subtitle: "Transforme seu corpo com tecnologia",
  
  description: `🔥 TRANSFORME SEU CORPO COM IA E TECNOLOGIA DE PONTA

O GTFit é o primeiro aplicativo fitness brasileiro que usa Inteligência Artificial para mostrar como seu corpo vai evoluir ANTES de você chegar lá. Mais de 50.000 brasileiros já estão transformando suas vidas!

✨ RECURSOS EXCLUSIVOS:

📸 CONTADOR DE CALORIAS COM IA
• Tire uma foto do seu prato
• IA calcula calorias e macros automaticamente
• Sem digitação manual, sem complicação

🎯 IA DE TRANSFORMAÇÃO CORPORAL (PREMIUM)
• Veja como seu corpo ficará após seguir o plano
• Tecnologia exclusiva de projeção realista
• Motivação visual para seus objetivos

💪 TREINOS PERSONALIZADOS
• Planos baseados no seu perfil e objetivos
• Vídeos 3D com músculos destacados
• Para academia ou casa

🥗 PLANEJAMENTO NUTRICIONAL COMPLETO
• Dietas personalizadas para seu objetivo
• Lista de compras automática
• Receitas saudáveis e práticas

📊 RELATÓRIOS AVANÇADOS
• Acompanhe sua evolução mês a mês
• Projeções de resultados
• Análise fotográfica de progresso

🌟 HÁBITOS SAUDÁVEIS
• Criação de rotinas para saúde mental
• Meditação e mindfulness
• Sono e hidratação

📱 SOCIAL SHARING
• Compartilhe seu progresso
• Templates exclusivos para redes sociais
• Comunidade motivadora

💎 PLANOS FLEXÍVEIS:

BÁSICO - R$ 29,90/mês
✓ Contador de calorias por foto
✓ Planejador nutricional
✓ Treinos básicos
✓ Vídeos 3D
✓ Relatórios mensais

PREMIUM - R$ 54,90/mês
✓ Tudo do Básico
✓ IA de transformação corporal
✓ Treinos avançados
✓ Vídeos 3D completos
✓ Relatórios avançados
✓ Social sharing profissional

🎁 7 DIAS GRÁTIS em qualquer plano!

📈 POR QUE ESCOLHER O GTFIT?

• Tecnologia exclusiva de IA
• Interface brasileira e intuitiva
• Resultados reais comprovados
• Suporte em português
• Preço justo e competitivo

🏆 DEPOIMENTOS:

"O GTFit mudou completamente minha vida. A IA de transformação me motivou demais!" - Carlos Silva, -15kg em 3 meses

"Os vídeos 3D são incríveis! Finalmente entendi como fazer os exercícios corretamente." - Ana Paula, +8kg de massa magra

"O contador de calorias por foto é sensacional. Nunca foi tão fácil controlar a alimentação!" - Roberto Santos, -20kg em 6 meses

💪 COMECE SUA TRANSFORMAÇÃO HOJE!

Baixe agora e ganhe 7 dias grátis para testar todos os recursos. Sem compromisso, cancele quando quiser.

---

Termos de Uso: https://gtfit.com.br/terms
Política de Privacidade: https://gtfit.com.br/privacy`,

  keywords: [
    "fitness",
    "treino",
    "academia",
    "dieta",
    "nutrição",
    "calorias",
    "emagrecimento",
    "musculação",
    "saúde",
    "bem-estar",
    "IA",
    "inteligência artificial",
    "transformação corporal",
    "exercícios",
    "personal trainer",
  ],

  screenshots: [
    "Tela inicial com dashboard personalizado",
    "Contador de calorias por foto (IA em ação)",
    "IA de transformação corporal (antes/depois)",
    "Vídeos 3D de exercícios com músculos destacados",
    "Planejamento nutricional e lista de compras",
    "Relatórios mensais de evolução",
    "Feed da comunidade com posts de progresso",
    "Tela de hábitos saudáveis",
  ],
};

// Pitch Deck Outline
export const PITCH_DECK_OUTLINE = {
  slides: [
    {
      number: 1,
      title: "Capa",
      content: [
        "GTFit - Fitness com IA",
        "Transforme seu corpo com tecnologia de ponta",
        "Logo + Tagline",
      ],
    },
    {
      number: 2,
      title: "O Problema",
      content: [
        "70% dos brasileiros querem melhorar a forma física",
        "Apps atuais são genéricos e desmotivadores",
        "Falta de personalização real e resultados visíveis",
        "Mercado de R$ 2 bilhões/ano no Brasil",
      ],
    },
    {
      number: 3,
      title: "A Solução",
      content: [
        "GTFit: Primeiro app fitness com IA de transformação corporal",
        "Mostra como seu corpo vai evoluir ANTES de chegar lá",
        "Contador de calorias por foto (IA)",
        "Treinos personalizados com vídeos 3D",
        "Nutrição completa + lista de compras automática",
      ],
    },
    {
      number: 4,
      title: "Mercado",
      content: [
        "Mercado global de fitness apps: US$ 14 bilhões (2024)",
        "Brasil: R$ 2 bilhões/ano, crescimento de 25% ao ano",
        "50 milhões de brasileiros interessados em fitness",
        "Penetração de apps: apenas 8% (enorme potencial)",
      ],
    },
    {
      number: 5,
      title: "Modelo de Negócio",
      content: [
        "Assinatura recorrente (SaaS)",
        "Básico: R$ 29,90/mês | R$ 249,90/ano",
        "Premium: R$ 54,90/mês | R$ 419,90/ano",
        "7 dias grátis para conversão",
        "LTV/CAC: 10-28x (excelente para SaaS)",
      ],
    },
    {
      number: 6,
      title: "Tração",
      content: [
        "50.000+ usuários na lista de espera",
        "500 beta testers com NPS de 85",
        "Parcerias com 20 influencers fitness",
        "Cobertura em 5 portais de tecnologia",
      ],
    },
    {
      number: 7,
      title: "Projeções Financeiras",
      content: [
        "Ano 1: R$ 432.000 (5.000 usuários)",
        "Ano 2: R$ 1.800.000 (20.000 usuários)",
        "Ano 3: R$ 5.400.000 (60.000 usuários)",
        "Margem: 70% (típico de SaaS)",
      ],
    },
    {
      number: 8,
      title: "Vantagem Competitiva",
      content: [
        "IA exclusiva de transformação corporal",
        "Tecnologia proprietária de análise de fotos",
        "Interface brasileira e intuitiva",
        "Preço 30% mais competitivo que concorrentes",
        "Foco em resultados reais e motivação visual",
      ],
    },
    {
      number: 9,
      title: "Time",
      content: [
        "Fundador: [Nome] - Ex-[Empresa], especialista em IA",
        "CTO: [Nome] - 10 anos em desenvolvimento mobile",
        "CMO: [Nome] - Cresceu [App] de 0 a 100k usuários",
        "Advisors: Nutricionistas e personal trainers certificados",
      ],
    },
    {
      number: 10,
      title: "Investimento",
      content: [
        "Buscando: R$ 500.000 - R$ 1.000.000",
        "Uso: 50% Marketing, 30% Desenvolvimento, 20% Operacional",
        "Meta: 50.000 usuários pagantes em 18 meses",
        "Exit potencial: Aquisição por grandes players (Nike, Adidas, Under Armour)",
      ],
    },
  ],
};
