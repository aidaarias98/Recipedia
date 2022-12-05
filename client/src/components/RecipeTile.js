

// REACT IMPORTS

import React from "react";




function RecipeTile(props){

    // DECLARED VARs TARGETING SPECIFIC VALUES IN THE API'S RETURNED OBJECT DATA.

    //RECIPE NAME
    let label = props.recipe.label; 

    // RECIPE HEALTH LABELS (i.e. "Sugar-Free", "Vegan", etc.)
    let healthLabels = props.recipe.healthLabels; 

    // RECIPE STEPS
    var recipeText = props.recipe.ingredientLines; 

    // RECIPE IMG / THUMBNAIL
    let imgURL = props.recipe.image; 

    // RECIPE TOTAL CALORIES
    let calories = parseFloat(props.recipe.calories).toFixed(2); 



    return (
        
        <div className="recipeTileContainer">

            <p className="tileLabel">{label}</p>
            <div className="recipeTile">
                <img className="recipeIMG" src={imgURL} alt='RecipePhoto' />
                <p className="recipeHealthLabels">{healthLabels}</p>
            </div>
            <p className="recipeText">{recipeText}</p>

            <p className="calories">Total Calories: {calories}</p>

        </div>
        

    ); 

}

export default RecipeTile; 

