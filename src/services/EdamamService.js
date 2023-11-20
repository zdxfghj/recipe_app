import { useHttps } from "../hook/http.hook";


const useEdamamService = () =>{
  const _appId = "app_id=3edab983";
  const _appKey = "app_key=3ea575d427fac6160a37dda4abaf28a2";
  const _apiRecipe = "https://api.edamam.com/api/recipes/v2"

    const { loading, request, error, clearError } = useHttps();


    const getRecipes = async (search = "") => {
        const res = await request(
          `${_apiRecipe}?type=public&q=${search}&${_appId}&${_appKey}&random=true`
        );
       
        return res.hits ;
      };

      const getRecipeByUri = async (uri = "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_717be3fb4be2e7d6f2ac39ea0f478add") => {
        const res = await request(
          `${_apiRecipe}/by-uri?type=public&uri=${uri}&${_appId}&${_appKey}`
        );
        
        return res ;
      };

    //   const _transformComics = (comics) => {
    //     return {
    //       id: comics.id,
    //       title: comics.title,
    //       description: comics.description || "There is no description",
    //       pageCount: comics.pageCount
    //         ? `${comics.pageCount} p.`
    //         : "No information about the number of pages",
    //       thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
    //       language: comics.textObjects[0]?.language || "en-us",
    //       price: comics.prices[0].price
    //         ? `${comics.prices[0].price}$`
    //         : "not available",
    //     };
    //   };
    
      return {
        loading,
        error,
        clearError,
        getRecipes,
        getRecipeByUri
      };
};
    

 
export default useEdamamService