import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { currentBodyImage, goals, timeframe } = await request.json();

    if (!currentBodyImage || !goals) {
      return NextResponse.json(
        { error: "Imagem atual e objetivos são obrigatórios" },
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
              text: `Analise esta foto corporal atual e descreva detalhadamente como o corpo ficará após ${timeframe || "3 meses"} seguindo um plano de treino e nutrição adequados para alcançar os seguintes objetivos: ${goals}.
              
              Retorne APENAS um JSON válido no seguinte formato (sem markdown):
              {
                "current_assessment": "descrição_detalhada_do_estado_atual",
                "transformation_description": "descrição_detalhada_das_mudanças_esperadas",
                "expected_changes": {
                  "weight": "mudança_estimada_em_kg",
                  "body_fat": "mudança_percentual_estimada",
                  "muscle_mass": "ganho_estimado_em_kg",
                  "measurements": {
                    "chest": "mudança_em_cm",
                    "waist": "mudança_em_cm",
                    "arms": "mudança_em_cm",
                    "legs": "mudança_em_cm"
                  }
                },
                "visual_changes": [
                  "mudança_visual_1",
                  "mudança_visual_2",
                  "mudança_visual_3"
                ],
                "timeline": {
                  "week_4": "mudanças_esperadas",
                  "week_8": "mudanças_esperadas",
                  "week_12": "mudanças_esperadas"
                },
                "requirements": [
                  "requisito_1_para_alcançar_resultado",
                  "requisito_2_para_alcançar_resultado"
                ],
                "realistic_expectations": "expectativas_realistas_e_avisos"
              }`,
            },
            {
              type: "image_url",
              image_url: {
                url: currentBodyImage,
              },
            },
          ],
        },
      ],
      max_tokens: 1500,
    });

    const content = response.choices[0].message.content;
    
    if (!content) {
      throw new Error("Resposta vazia da OpenAI");
    }

    // Parse JSON da resposta
    const transformationData = JSON.parse(content);

    return NextResponse.json({
      success: true,
      data: transformationData,
    });
  } catch (error: any) {
    console.error("Erro ao gerar transformação:", error);
    return NextResponse.json(
      {
        error: "Erro ao gerar projeção de transformação",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
