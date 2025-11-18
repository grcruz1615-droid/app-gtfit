import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { userProfile, goals, calorieTarget, dietaryRestrictions } = await request.json();

    if (!userProfile || !goals) {
      return NextResponse.json(
        { error: "Perfil do usuário e objetivos são obrigatórios" },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `Você é um nutricionista profissional especializado em nutrição esportiva e emagrecimento saudável. 
          Crie planos nutricionais baseados em ciência, sustentabilidade e saúde.`,
        },
        {
          role: "user",
          content: `Crie um plano nutricional personalizado para:
          
          Perfil: ${JSON.stringify(userProfile)}
          Objetivos: ${JSON.stringify(goals)}
          Meta de Calorias: ${calorieTarget || "calcular automaticamente"}
          Restrições: ${dietaryRestrictions || "nenhuma"}
          
          Retorne APENAS um JSON válido no seguinte formato (sem markdown):
          {
            "plan_name": "nome_do_plano",
            "daily_calories": número_total,
            "macros": {
              "protein": gramas_e_percentual,
              "carbs": gramas_e_percentual,
              "fat": gramas_e_percentual
            },
            "meal_plan": [
              {
                "meal": "Café da Manhã",
                "time": "07:00",
                "calories": número,
                "foods": [
                  {
                    "item": "nome_do_alimento",
                    "quantity": "quantidade",
                    "calories": número,
                    "protein": gramas,
                    "carbs": gramas,
                    "fat": gramas
                  }
                ]
              }
            ],
            "shopping_list": {
              "proteins": ["item1", "item2"],
              "carbs": ["item1", "item2"],
              "vegetables": ["item1", "item2"],
              "fruits": ["item1", "item2"],
              "fats": ["item1", "item2"],
              "others": ["item1", "item2"]
            },
            "hydration": "recomendação_de_água",
            "supplements": ["suplemento1_opcional", "suplemento2_opcional"],
            "tips": ["dica1", "dica2", "dica3"],
            "meal_timing": "estratégia_de_horários"
          }`,
        },
      ],
      max_tokens: 2500,
    });

    const content = response.choices[0].message.content;
    
    if (!content) {
      throw new Error("Resposta vazia da OpenAI");
    }

    // Parse JSON da resposta
    const nutritionPlan = JSON.parse(content);

    return NextResponse.json({
      success: true,
      data: nutritionPlan,
    });
  } catch (error: any) {
    console.error("Erro ao gerar plano nutricional:", error);
    return NextResponse.json(
      {
        error: "Erro ao gerar plano nutricional",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
