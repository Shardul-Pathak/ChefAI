export default function Recipe({ recipe }) {
  if (!recipe || Object.keys(recipe).length === 0) {
    return (
      <div className="mt-8 p-6 bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-white mb-4">No Viable Recipe</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-white mb-6">
        <div className="bg-gray-800 p-3 rounded-xl shadow-sm flex items-center justify-center">
          <span className="mr-2">⏱️</span> Prep Time: 0 mins
        </div>
        <div className="bg-gray-800 p-3 rounded-xl shadow-sm flex items-center justify-center">
          <span className="mr-2">🔥</span> Cook Time: 0 mins
        </div>
        <div className="bg-gray-800 p-3 rounded-xl shadow-sm flex items-center justify-center">
          <span className="mr-2">🍽️</span> Servings: 0
        </div>
        <div className="bg-gray-800 p-3 rounded-xl shadow-sm flex items-center justify-center">
          <span className="mr-2">📈</span> Difficulty: N/A
        </div>
      </div>
      
      <div className="mb-6 text-white">
        <h3 className="text-xl font-semibold text-white border-b-2 border-gray-700 pb-1 mb-2">Ingredients</h3>
        <ul className="list-inside">
        </ul>
      </div>

      <div className="mb-6 text-white">
        <h3 className="text-xl font-semibold text-white border-b-2 border-gray-700 pb-1 mb-2">Missing Ingredients</h3>
        <ul className="list-inside">
        </ul>
      </div>
      
      <div className="text-white">
        <h3 className="text-xl font-semibold text-white border-b-2 border-gray-700 pb-1 mb-2">Instructions</h3>
        <ol className="list-decimal pl-5">
        </ol>
      </div>
    </div>
    );
  }

  const ingredients = recipe.ingredients_used?.map((item, index) => (
    <li key={index} className="list-disc ml-6 text-gray-400">{item}</li>
  ));

  const missedIngredients = recipe.missing_ingredients?.map((item, index) => (
    <li key={index} className="list-disc ml-6 text-gray-400">{item}</li>
  ));

  const instructions = recipe.instructions?.map((step, index) => (
    <li key={index} className="text-gray-400 mb-2">{step}</li>
  ));

  return (
    <div className="mt-8 p-6 bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-white mb-4">{recipe.recipe_name}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-white mb-6">
        <div className="bg-gray-800 p-3 rounded-xl shadow-sm flex items-center justify-center">
          <span className="mr-2">⏱️</span> Prep Time: {recipe.prep_time} mins
        </div>
        <div className="bg-gray-800 p-3 rounded-xl shadow-sm flex items-center justify-center">
          <span className="mr-2">🔥</span> Cook Time: {recipe.cook_time} mins
        </div>
        <div className="bg-gray-800 p-3 rounded-xl shadow-sm flex items-center justify-center">
          <span className="mr-2">🍽️</span> Servings: {recipe.servings}
        </div>
        <div className="bg-gray-800 p-3 rounded-xl shadow-sm flex items-center justify-center">
          <span className="mr-2">📈</span> Difficulty: {recipe.difficulty}
        </div>
      </div>
      
      <div className="mb-6 text-white">
        <h3 className="text-xl font-semibold text-white border-b-2 border-gray-700 pb-1 mb-2">Ingredients</h3>
        <ul className="list-inside">
          {ingredients}
        </ul>
      </div>

      <div className="mb-6 text-white">
        <h3 className="text-xl font-semibold text-white border-b-2 border-gray-700 pb-1 mb-2">Missing Ingredients</h3>
        <ul className="list-inside">
          {missedIngredients}
        </ul>
      </div>
      
      <div className="text-white">
        <h3 className="text-xl font-semibold text-white border-b-2 border-gray-700 pb-1 mb-2">Instructions</h3>
        <ol className="list-decimal pl-5">
          {instructions}
        </ol>
      </div>
    </div>
  );
}