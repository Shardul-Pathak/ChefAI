import GenerateRecipe from "./GenerateRecipe.jsx";

export default function minItemsMessage(props) {
    if(props.len == 0)
    {
        return (
            <div className="flex justify-center mt-1">
                <p className="text-red-500 mt-4 text-xl items-center">Please add at least 5 ingredients to generate a recipe.</p>
            </div>
        );
    }
    else if(props.len < 5)
    {
        return (
            <div className="flex justify-center mt-1">
                <p className="text-yellow-500 mt-4 text-xl items-center">You need {5 - props.len} more ingredient(s) to generate a recipe.</p>
            </div>
        );
    }
    else
    {
        return (
            <GenerateRecipe ingredients={props.ingredients}/>
        )
    }
}