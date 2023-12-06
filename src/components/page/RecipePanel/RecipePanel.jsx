
import './recipePanel.css'
import useEdamamService from "../../../services/EdamamService";
import { useState} from 'react';

export const RecipePanel =()=> {

    const {getRecipesDishType} = useEdamamService();
    const [recipe, setRecipe] = useState(null);

    const onRecipesDishType =(typeDish) => {
      getRecipesDishType(typeDish)
            .then(onListLoaded)
      
    }

    const onListLoaded = (newList) => {
        setRecipe(newList);
    }

    function getImageUrl(url) {
        return (
          'https://img.icons8.com/' +
          url + '.png'
        );
      }
      

    const dishType = [{name:'alcohol cocktail', url: '100/cocktail'},
        {name:'biscuits and cookies', url: 'ios/50/cookie'},
        {name:'bread', url: 'ios/50/bread'},
        {name:'cereals', url: 'ios/50/grass'},
        {name:'condiments and sauces', url: 'ios/50/dressing'},
        {name:'desserts', url: 'ios/50/melting-ice-cream'},
        {name:'drinks',url: 'ios/50/alcohol-bottle'},
        {name:'egg',url: 'ios/50/eggs'},
        {name:'ice cream and custard',url: 'ios/50/kawaii-ice-cream'},
        // {name:'main course',url: '/925/cocktail'},
        // {name:'pancake',url: '/925/cocktail'},
        // {name:'pasta',url: '/925/cocktail'},
        // {name:'pastry',url: '/925/cocktail'},
        // {name:'pies and tarts',url: '/925/cocktail'},
        // {name: 'pizza',url: '/925/cocktail'},
        // {name:'preps',url: '/925/cocktail'},
        // {name:'preserve',url: '/925/cocktail'},
        // {name:'salad', url: "plasticine/32/salad.png"},
        // {name:'sandwiches',url: '/925/cocktail'},
        // {name:'seafood',url: '/925/cocktail'},
        // {name:'side dish',url: '/925/cocktail'},
        // {name:'soup',url: '/925/cocktail'},
        // {name:'special occasions',url: '/925/cocktail'},
        // {name:'starter',url: '/925/cocktail'},
        // {name:'sweets',url: '/925/cocktail'}
    ]

        const listItems = dishType.map(item =>(
            <div className="button_resipe" onClick={onRecipesDishType(item.name)}>
                <img src={getImageUrl(item.url)} alt=""></img>
                <p>{item.name}</p>
            </div>
        )
           
        )



    return(
        <div className="slider">
            {listItems}

        </div>   
    )
}



    