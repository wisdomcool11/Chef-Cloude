

import React from "react";

function MainBody(){

    const [ingredient, setIngredient] = React.useState([]);
    const [isShown, setShown] = React.useState(false);

    const ingredientElement = ingredient.map (ing =>{
        return <li className="p-1" key={ing}>{ing.length >= 1 ? ing[0].toUpperCase() + ing.slice(1) : alert("empty input enter ingredient")}</li>
    })

    function getIngredient (formData){
        const newIngredient = formData.get('ingredient');

        setIngredient(prevIngredent =>{
            return [
                ...prevIngredent,
                newIngredient
            ]
        })
    }

    function handleRecipe (){
        setShown (prevShow => !prevShow)
        console.log(isShown);
        
    }


    return (
        <main className="bg-[#f1f1f1] py-[20px] px-[10px]">
            
            <form action={getIngredient} className="w-full md:w-[650px] mx-auto flex justify-center items-center gap-2 md:gap-5">
                <input 
                type="text" 
                name="ingredient" 
                placeholder="e.g oregano..."
                className="w-2/3 bg-white p-2 md:p-1 pl-3 rounded-lg" />

                <button className="addIngredient w-[120px] md:w-[160px] text-base md:text-xl p-2">
                    Add ingredient
                </button>
            </form>


            {ingredient.length > 0 ? <section className="p-8">

                <h2 className="text-xl md:text-2xl font-bold">
                    Ingredients on hand:
                </h2>
                <ul className="list-disc w-full md:w-[80%] my-6 mx-auto">
                    {ingredientElement}
                </ul>

                {ingredient.length > 3 && 
                <div className="w-full md:w-[80%] 
                mx-auto flex flex-col md:flex-row  md:justify-between items-center gap-6 p-4 bg-[#dcd7d7] rounded-xl">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold">Ready for a recipe ?</h3>
                        <p className="ml-4 text-gray-400 text-sm md:text-base">
                            Generate a recipe from your list of ingredient
                        </p>
                    </div>

                    <button onClick={handleRecipe} className="bg-amber-700 text-black text-lg 
                    md:text-xl w-[80%] min-w-[120px] p-3 md:w-[160px] 
                    rounded-lg active:translate-y-1 transition">
                        Get a recipe
                    </button>
                </div>}
            </section> : null}

            {isShown ? 
            <section className="w-[80%] md:w-2/3 bg-white mx-auto 
            rounded-tl-2xl rounded-tr-2xl p-6 pt-10 flex flex-col gap-3">
                <h2 className="text-lg md:text-xl font-bold">
                    Chef Claude Recommends:
                </h2>

                <article className="suggested-recipe-container" aria-live="polite">
                    <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
                    <h3>Beef Bolognese Pasta</h3>
                    <strong>Ingredients:</strong>
                    <ul>
                        <li>1 lb. ground beef</li>
                        <li>1 onion, diced</li>
                        <li>3 cloves garlic, minced</li>
                        <li>2 tablespoons tomato paste</li>
                        <li>1 (28 oz) can crushed tomatoes</li>
                        <li>1 cup beef broth</li>
                        <li>1 teaspoon dried oregano</li>
                        <li>1 teaspoon dried basil</li>
                        <li>Salt and pepper to taste</li>
                        <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                    </ul>
                    <strong>Instructions:</strong>
                    <ol>
                        <li>Bring a large pot of salted water to a boil for the pasta.</li>
                        <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                        <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                        <li>Stir in the tomato paste and cook for 1 minute.</li>
                        <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                        <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                        <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                        <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                        <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                    </ol>
                </article>
            </section> : null}
        </main>
    )
}


export default MainBody;

