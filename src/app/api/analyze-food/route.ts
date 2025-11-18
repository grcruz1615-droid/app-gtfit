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
              text: `Analise esta imagem de comida e forneça uma estimativa detalhada das calorias e macronutrientes. 
              
              Retorne APENAS um JSON válido no seguinte formato (sem markdown, sem explicações extras):
              {
                "food_name": "nome do prato",
                "calories": número_total_de_calorias,
                "protein": gramas_de_proteína,
                "carbs": gramas_de_carboidratos,
                "fat": gramas_de_gordura,
                "portion_size": "tamanho_estimado_da_porção",
                "confidence": "alta/média/baixa",
                "ingredients": ["ingrediente1", "ingrediente2"],
                "notes": "observações_relevantes"
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
    const nutritionData = JSON.parse(content);

    return NextResponse.json({
      success: true,
      data: nutritionData,
    });
  } catch (error: any) {
    console.error("Erro ao analisar comida:", error);
    return NextResponse.json(
      {
        error: "Erro ao analisar imagem",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
