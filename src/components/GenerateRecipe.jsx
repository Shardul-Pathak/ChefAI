import { useState } from "react"
import getRecipe from "../utils/getRecipe.js"
import Recipe from "./Recipe.jsx"

export default function App(props) {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function loadRecipe() {
    setIsLoading(true);
    try {
      let recipeString = await getRecipe(props.ingredients);
      let cleanedString = recipeString.slice(7, -3);
      const recipeObject = JSON.parse(cleanedString);
      console.log(recipeObject);
      setRecipe(recipeObject);
    } catch (error) {
      console.error("Failed to load or parse recipe:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center p-4 min-h-screen font-sans text-gray-800">
      <div className="w-full max-w-2xl p-6 rounded-3xl shadow-xl transition-all duration-300">
        <div className="flex justify-center mt-4">
          <button 
            onClick={loadRecipe} 
            className="w-full max-w-xs py-3 px-6 text-white font-semibold rounded-full bg-green-600 hover:bg-green-700 transition-colors duration-200 shadow-md transform hover:scale-105 disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate Recipe"}
          </button>
        </div>

        {isLoading && <p className="mt-4 text-center text-gray-500">Loading your recipe...</p>}
        {recipe && <Recipe recipe={recipe} />}
      </div>
    </div>
  );
}