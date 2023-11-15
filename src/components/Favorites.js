import React, { useState } from "react";
import { RecipePage } from "./page/RecipePage/RecipePage";
const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorite = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]);
  };

  return (
    <div >
      <h2>Favorites</h2>
      <RecipePage></RecipePage>
      
    </div>
  );
};

export default Favorites;