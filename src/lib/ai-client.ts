/**
 * GTFit API Client
 * Helper functions para integração com APIs de IA
 */

export interface FoodAnalysis {
  food_name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  portion_size: string;
  confidence: "alta" | "média" | "baixa";
  ingredients: string[];
  notes: string;
}

export interface BodyAnalysis {
  body_type: string;
  estimated_body_fat: string;
  muscle_development: string;
  posture_notes: string;
  recommended_focus: string[];
  training_level: string;
  goals_suggestion: string[];
  workout_frequency: string;
  notes: string;
}

export interface WorkoutPlan {
  plan_name: string;
  duration_weeks: number;
  frequency: string;
  level: string;
  weekly_schedule: Array<{
    day: string;
    focus: string;
    exercises: Array<{
      name: string;
      sets: number;
      reps: string;
      rest: string;
      notes: string;
    }>;
  }>;
  nutrition_tips: string[];
  progression_notes: string;
  warnings: string[];
}

export interface TransformationData {
  current_assessment: string;
  transformation_description: string;
  expected_changes: {
    weight: string;
    body_fat: string;
    muscle_mass: string;
    measurements: {
      chest: string;
      waist: string;
      arms: string;
      legs: string;
    };
  };
  visual_changes: string[];
  timeline: {
    week_4: string;
    week_8: string;
    week_12: string;
  };
  requirements: string[];
  realistic_expectations: string;
}

export interface NutritionPlan {
  plan_name: string;
  daily_calories: number;
  macros: {
    protein: string;
    carbs: string;
    fat: string;
  };
  meal_plan: Array<{
    meal: string;
    time: string;
    calories: number;
    foods: Array<{
      item: string;
      quantity: string;
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
    }>;
  }>;
  shopping_list: {
    proteins: string[];
    carbs: string[];
    vegetables: string[];
    fruits: string[];
    fats: string[];
    others: string[];
  };
  hydration: string;
  supplements: string[];
  tips: string[];
  meal_timing: string;
}

/**
 * Analisa uma foto de comida e retorna informações nutricionais
 */
export async function analyzeFoodImage(imageUrl: string): Promise<FoodAnalysis> {
  const response = await fetch("/api/analyze-food", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imageUrl }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Erro ao analisar comida");
  }

  const result = await response.json();
  return result.data;
}

/**
 * Analisa uma foto corporal e retorna avaliação detalhada
 */
export async function analyzeBodyImage(imageUrl: string): Promise<BodyAnalysis> {
  const response = await fetch("/api/analyze-body", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imageUrl }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Erro ao analisar corpo");
  }

  const result = await response.json();
  return result.data;
}

/**
 * Gera um plano de treino personalizado
 */
export async function generateWorkoutPlan(
  userProfile: any,
  goals: string[],
  bodyAnalysis?: BodyAnalysis
): Promise<WorkoutPlan> {
  const response = await fetch("/api/generate-workout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userProfile, goals, bodyAnalysis }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Erro ao gerar plano de treino");
  }

  const result = await response.json();
  return result.data;
}

/**
 * Gera projeção de transformação corporal
 */
export async function generateTransformation(
  currentBodyImage: string,
  goals: string,
  timeframe?: string
): Promise<TransformationData> {
  const response = await fetch("/api/generate-transformation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currentBodyImage, goals, timeframe }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Erro ao gerar transformação");
  }

  const result = await response.json();
  return result.data;
}

/**
 * Gera plano nutricional personalizado
 */
export async function generateNutritionPlan(
  userProfile: any,
  goals: string[],
  calorieTarget?: number,
  dietaryRestrictions?: string[]
): Promise<NutritionPlan> {
  const response = await fetch("/api/generate-nutrition", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userProfile,
      goals,
      calorieTarget,
      dietaryRestrictions,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Erro ao gerar plano nutricional");
  }

  const result = await response.json();
  return result.data;
}

/**
 * Upload de imagem para análise (converte para base64 ou URL pública)
 */
export async function uploadImageForAnalysis(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
