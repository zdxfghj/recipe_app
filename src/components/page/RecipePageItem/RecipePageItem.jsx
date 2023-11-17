import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import useEdamamService from '../../../services/EdamamService';

export const RecipePageItem = () =>{
    const http ="http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23"
    const {uri} = useParams();
    const [recipe, setRecipe] = useState([]);
    const {getRecipeByUri} = useEdamamService();
    
    useEffect(() => {
        getRecipeByUri(http.concat('',uri))
        .then(onRecipesLoaded)
    }, [])

    const onRecipesLoaded = (newRecipe = []) =>{
        setRecipe(newRecipe)
       
    }
    
    console.log(recipe.hits);

    return(
        <div className="header">
            <div className="title">
                {/* {recipe.hits[0].recipe.label} */}
            </div>
            {/* <img src={recipe.hits[0].recipe.image} /> */}
        </div>
    )
}