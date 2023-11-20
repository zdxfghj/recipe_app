import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import useEdamamService from '../../../services/EdamamService';
import Spinner from "../../spinner/Spinner";
import "./recipePageItem.css"

export const RecipePageItem = () =>{
    const http ="http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23"
    const {uri} = useParams();
    
    const [recipe, setRecipe] = useState(null);
    const {getRecipeByUri} = useEdamamService();
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        getRecipeByUri(http.concat('',uri))
        .then((data) => {
            setRecipe(data)
            setIsLoading(false)
        })
    }, [uri])


    if (isLoading)
         {return <Spinner/>} 
        else {
            if (recipe){
                console.log(recipe);
                const result = recipe.hits[0].recipe;
                return(
                     <div className="body">
                        
                            <div className="title">
                                {result.label}
                            </div>
                            <div className="row">
                                <img className='body_img' src={result.image} /> 
                                <div>{ !result.ingredientLines ?  null : (result.ingredientLines.map((ingredient, index)=>{return (<p className='ingredient' key={index}>{index+1}. {ingredient}</p>)}))  }</div>
                            </div>
                            
                            
                            <h3>Calories: {result.calories}</h3>
                        </div>
                    )
            }
        }
   
}