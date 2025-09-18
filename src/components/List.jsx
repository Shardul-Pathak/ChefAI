function List(props) {
    return (
        <>
            {props.ingredients.map((ingredient) => (
                <li className="p-2 mb-2 rounded" key={ingredient}>{ingredient}</li>
            ))}
        </>
    )
}

export default function ListContainer(props) {
    return (
        <>
            <div className="flex flex-col items-center bg-gray-800 text-white p-2 mt-4 w-full max-w-lg mx-auto h-80 hover:bg-gray-900 transition relative rounded-4xl overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                <h1 className="text-2xl font-bold m-4">Available Ingredients</h1>
                <ul className="list-disc text-xl pl-8 w-full" name="ingredient">
                    {<List ingredients={props.ingredients}/>}
                </ul>
            </div>
        </>
    )
}