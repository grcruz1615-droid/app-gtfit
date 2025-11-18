// Types for GTFit Application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: "basic" | "premium";
  createdAt: Date;
  profile: UserProfile;
}

export interface UserProfile {
  age: number;
  gender: "male" | "female" | "other";
  height: number; // cm
  weight: number; // kg
  targetWeight: number; // kg
  activityLevel: "sedentary" | "light" | "moderate" | "active" | "very_active";
  goal: "lose_weight" | "gain_muscle" | "maintain" | "improve_health";
  dietaryRestrictions: string[];
  workoutPreference: "gym" | "home" | "both";
  availableTime: number; // minutes per day
}

export interface Meal {
  id: string;
  userId: string;
  name: string;
  type: "breakfast" | "lunch" | "dinner" | "snack";
  time: string;
  calories: number;
  protein: number; // grams
  carbs: number; // grams
  fat: number; // grams
  imageUrl?: string;
  date: Date;
}

export interface Workout {
  id: string;
  userId: string;
  name: string;
  type: "strength" | "cardio" | "flexibility" | "mixed";
  duration: number; // minutes
  caloriesBurned: number;
  exercises: Exercise[];
  completed: boolean;
  date: Date;
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  sets: number;
  reps: number;
  weight?: number; // kg
  duration?: number; // seconds
  videoUrl?: string;
  thumbnailUrl?: string;
  instructions: string[];
}

export interface NutritionPlan {
  id: string;
  userId: string;
  name: string;
  startDate: Date;
  endDate: Date;
  dailyCalories: number;
  dailyProtein: number;
  dailyCarbs: number;
  dailyFat: number;
  meals: Meal[];
  shoppingList: ShoppingItem[];
}

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: string;
  category: "protein" | "carbs" | "vegetables" | "fruits" | "dairy" | "other";
  checked: boolean;
}

export interface WorkoutPlan {
  id: string;
  userId: string;
  name: string;
  startDate: Date;
  endDate: Date;
  workoutsPerWeek: number;
  workouts: Workout[];
}

export interface ProgressPhoto {
  id: string;
  userId: string;
  imageUrl: string;
  weight: number;
  date: Date;
  notes?: string;
}

export interface DailyStats {
  date: Date;
  caloriesConsumed: number;
  caloriesBurned: number;
  workoutCompleted: boolean;
  waterIntake: number; // ml
  sleepHours: number;
  mood: "great" | "good" | "okay" | "bad";
}

export interface MonthlyReport {
  userId: string;
  month: number;
  year: number;
  totalWorkouts: number;
  totalCaloriesConsumed: number;
  totalCaloriesBurned: number;
  weightChange: number; // kg
  progressPhotos: ProgressPhoto[];
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

export interface Habit {
  id: string;
  userId: string;
  name: string;
  category: "fitness" | "nutrition" | "mental_health" | "sleep" | "hydration";
  frequency: "daily" | "weekly";
  completed: boolean;
  streak: number;
  createdAt: Date;
}

export interface SocialPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: Comment[];
  createdAt: Date;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: "basic" | "premium";
  billingCycle: "monthly" | "annual";
  price: number;
  startDate: Date;
  endDate: Date;
  status: "active" | "cancelled" | "expired";
  autoRenew: boolean;
}

export interface AIAnalysis {
  type: "meal" | "body" | "workout";
  imageUrl: string;
  analysis: {
    calories?: number;
    macros?: {
      protein: number;
      carbs: number;
      fat: number;
    };
    bodyMetrics?: {
      bodyFat: number;
      muscleMass: number;
      recommendations: string[];
    };
    workoutFeedback?: {
      form: "excellent" | "good" | "needs_improvement";
      suggestions: string[];
    };
  };
  timestamp: Date;
}
