
import { useState,useEffect } from "react"
import { RecipeItem } from "../RecipeItem/RecipeItem"
import Page404 from "../Error404/Error404"
import useEdamamService from "../../../services/EdamamService"
import { Link } from 'react-router-dom';

import "./recipePage.css"

export  const RecipePage = () =>{
    const [recipeList, setRecipeList] = useState([]);
    const {getRecipes} = useEdamamService();

    useEffect(() => {
        getRecipes()
        .then(onRecipesLoaded)
    }, [])

    const onRecipesLoaded = (newRecipesList = []) =>{
        setRecipeList(newRecipesList)
       
    }

    return(
        <div className="wrapper" >
            <div className="recipe_header"> 20 Random Recipe</div>
            <div className="recipe_group">
            {recipeList.map((recipe, index) =>  
                    <Link to={`/recipe/${recipe.recipe.uri.slice(51)}`}>
                        <RecipeItem key={index} recipe={recipe.recipe} />
                    </Link>)}
            </div>
        </div>
        
    )


}