import { useState } from "react";
import ListContainer from "./List.jsx";
import MinItemsMessage from "./MinItemsMessage.jsx";

export default function MainContent() {
    const [ingredients, setIngredients] = useState([]);
    function addIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        let newIngredient = formData.get('newIngredient').trim().toLowerCase();
        newIngredient = newIngredient.charAt(0).toUpperCase() + newIngredient.slice(1);
        if (newIngredient && !ingredients.includes(newIngredient)) {
            setIngredients((ingredients) => [newIngredient, ...ingredients]);
            event.target.reset();
        }
        else
        {
            alert("Ingredient is empty or already added.");
            event.target.reset();
        }
    }

    return (
        <main>
            <div className="flex-grow p-4 text-white justify-center items-center flex flex-col mt-20">
                <h1 className="text-3xl font-bold mb-4">Welcome to ChefAI</h1>
                <p className="mb-4">Your AI-powered cooking assistant.</p>
            </div>
            <div className="h-16 text-white flex items-center justify-center">
                <form onSubmit={addIngredient} className="w-full max-w-md px-4 flex items-center relative">
                    <input type="text" name="newIngredient" autoComplete="off" placeholder="Add Ingredients..." className="w-full p-4 rounded-full text-white bg-gray-900 focus:outline-none pr-16" />
                    <button type="submit" className="absolute right-4 bg-blue-600 rounded-full p-2 hover:bg-blue-700 transition">
                        <span className="sr-only">Add</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </form>
            </div>
            {ingredients.length > 0 && <ListContainer ingredients={ingredients} />}
            <MinItemsMessage len={ingredients.length} ingredients={ingredients}/>
        </main>
    )
}