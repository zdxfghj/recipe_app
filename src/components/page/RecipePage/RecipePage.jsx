
import { useState } from "react"
import { RecipeItem } from "../../RecipeItem/RecipeItem"
import Page404 from "../Error404/Error404"
import "./recipePage.css"
export  const RecipePage = () =>{
    const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9])
    return(
        <div className="wrapper" >
            <div className="recipe_header"></div>
            <div className="recipe_group">
            {/* {recipeList?.length ? (recipeList.map((recipe, index) => (<RecipeComponent key={index} recipe={recipe.recipe} />))) :
             (<Page404/>)
            } */}
                <RecipeItem/>
            </div>
        </div>
        
    )


}