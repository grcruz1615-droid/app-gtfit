import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { imageUrl } = await request.json();

    if (!imageUrl) {
      return NextResponse.json(
        { error: "URL da imagem é obrigatória" },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Analise esta foto corporal e forneça uma avaliação detalhada para criar um plano de treino personalizado.
              
              Retorne APENAS um JSON válido no seguinte formato (sem markdown, sem explicações extras):
              {
                "body_type": "ectomorfo/mesomorfo/endomorfo",
                "estimated_body_fat": "percentual_estimado",
                "muscle_development": "iniciante/intermediário/avançado",
                "posture_notes": "observações_sobre_postura",
                "recommended_focus": ["área1", "área2", "área3"],
                "training_level": "iniciante/intermediário/avançado",
                "goals_suggestion": ["objetivo1", "objetivo2"],
                "workout_frequency": "3-5x por semana",
                "notes": "observações_e_recomendações_gerais"
              }`,
            },
            {
              type: "image_url",
              image_url: {
                url: imageUrl,
              },
            },
          ],
        },
      ],
      max_tokens: 1000,
    });

    const content = response.choices[0].message.content;
    
    if (!content) {
      throw new Error("Resposta vazia da OpenAI");
    }

    // Parse JSON da resposta
    const bodyAnalysis = JSON.parse(content);

    return NextResponse.json({
      success: true,
      data: bodyAnalysis,
    });
  } catch (error: any) {
    console.error("Erro ao analisar corpo:", error);
    return NextResponse.json(
      {
        error: "Erro ao analisar imagem",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
