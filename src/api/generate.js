import { GoogleGenAI } from "@google/genai";

const API_KEY = "AIzaSyATBMahZQ10Vb9NB482J1_efMdjLxDEvxs";
const ai = new GoogleGenAI({ apiKey: API_KEY });

export default async function generate(ingredients) {
    let ingredientsString = ingredients;
    if (Array.isArray(ingredients)) {
        ingredientsString = ingredients.join(', ');
    }
    const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
    {
        role: "user",
        parts: [
        { text: `You are a helpful cooking assistant. Your task is to suggest a recipe using the list of ingredients provided. If possible, match the ingredients to a well-known or creative recipe. Return the result in a structured JSON format with the following fields:
        recipe_name: Name of the suggested recipe
        ingredients_used: List of ingredients from the input that are used in the recipe
        missing_ingredients: Any commonly used ingredients in this recipe that are not in the provided list
        instructions: Step-by-step instructions to prepare the dish
        prep_time: Estimated preparation time (in minutes)
        cook_time: Estimated cooking time (in minutes)
        servings: Number of servings
        difficulty: One of ["Easy", "Medium", "Hard"]
        Ingredient Input:
        ${ingredientsString}
        If no viable recipe can be made from the ingredients return only empty json no other text or markdown.
        ` },
        ]
    }
    ],
  });
  return response.text;
}