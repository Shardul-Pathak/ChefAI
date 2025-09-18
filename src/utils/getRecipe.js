export default async function getRecipe(ingredients) {
    const response = await fetch('http://localhost:3000/api/generateRecipe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients: ingredients }),
    })
    const recipe = await response.json();
    return recipe;
}
