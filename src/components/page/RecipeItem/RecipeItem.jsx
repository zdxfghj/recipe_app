import "./recipeItem.css";

export const RecipeItem = (props) => {
  const { label, image,ingredients } = props.recipe;

  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card__content">
        <p className="card__title">{label}</p>
        <p className="card__description">
        {ingredients.map((ingredient, index) => (
                <tr key={index} className="ingredient-list">
                  <td>{ingredient.text}</td>
                  <td>{ingredient.weight}</td>
                </tr>
              ))}
         
        </p>
      </div>
    </div>
  );
};
