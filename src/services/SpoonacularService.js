import { useHttps } from "../hook/http.hook";

const useSpoonacularService = () =>{
    const _apiBase = "https://api.spoonacular.com/";
    const _apiKey = "?apiKey=9779685d6855428aa669e451aec5a8dc";

    const { loading, request, error, clearError } = useHttps();


    const getRecipes = async () => {
        const res = await request(
          `${_apiBase}recipes/716429/information${_apiKey}`
        );
        return console.log(res) ;
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
        getRecipes,
        clearError,
        
      };
};
    

 
export default useSpoonacularService