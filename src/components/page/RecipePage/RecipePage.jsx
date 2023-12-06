
import { useState,useEffect } from "react"
import { RecipeItem } from "../RecipeItem/RecipeItem"
import Page404 from "../Error404/Error404"
import useEdamamService from "../../../services/EdamamService"
import { Link } from 'react-router-dom';
import { RecipePanel } from "../RecipePanel/RecipePanel";

import "./recipePage.css"

export  const RecipePage = ({search}) =>{
    const [recipeList, setRecipeList] = useState([]);
    const {getRecipes} = useEdamamService();

    useEffect(() => {
        getRecipes(search)
        .then((data) => {setRecipeList(data)})
        console.log(search)
    }, [search])

   

    
    return(
        <div>
            <h1>Let's Eat Healthy Food</h1>
            <RecipePanel></RecipePanel>
        </div>
        // <div className="wrapper" >
        //     <div className="recipe_header"> 20 Random Recipe</div>
        //     <div className="recipe_group">
        //     {recipeList.map((recipe, index) =>  
        //             <Link to={`/recipe/${recipe.recipe.uri.slice(51)}`}>
        //                 <RecipeItem key={index} recipe={recipe.recipe} />
        //             </Link>)}
        //     </div>
        // </div>
        
    )


}