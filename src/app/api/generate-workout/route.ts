import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { userProfile, goals, bodyAnalysis } = await request.json();

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
          content: `Você é um personal trainer profissional especializado em criar planos de treino personalizados. 
          Crie planos baseados em ciência do exercício, progressão adequada e segurança.`,
        },
        {
          role: "user",
          content: `Crie um plano de treino personalizado para:
          
          Perfil: ${JSON.stringify(userProfile)}
          Objetivos: ${JSON.stringify(goals)}
          ${bodyAnalysis ? `Análise Corporal: ${JSON.stringify(bodyAnalysis)}` : ""}
          
          Retorne APENAS um JSON válido no seguinte formato (sem markdown):
          {
            "plan_name": "nome_do_plano",
            "duration_weeks": número_de_semanas,
            "frequency": "dias_por_semana",
            "level": "iniciante/intermediário/avançado",
            "weekly_schedule": [
              {
                "day": "Segunda",
                "focus": "Peito e Tríceps",
                "exercises": [
                  {
                    "name": "Supino Reto",
                    "sets": 4,
                    "reps": "8-12",
                    "rest": "90s",
                    "notes": "observações"
                  }
                ]
              }
            ],
            "nutrition_tips": ["dica1", "dica2"],
            "progression_notes": "como_progredir",
            "warnings": ["aviso1", "aviso2"]
          }`,
        },
      ],
      max_tokens: 2000,
    });

    const content = response.choices[0].message.content;
    
    if (!content) {
      throw new Error("Resposta vazia da OpenAI");
    }

    // Parse JSON da resposta
    const workoutPlan = JSON.parse(content);

    return NextResponse.json({
      success: true,
      data: workoutPlan,
    });
  } catch (error: any) {
    console.error("Erro ao gerar plano de treino:", error);
    return NextResponse.json(
      {
        error: "Erro ao gerar plano de treino",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
