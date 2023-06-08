import { Recipe } from "./types";
import { Ingredients } from "./Ingredients";

interface Props {
  recipe: Recipe;
}

export function RecipeItem({ recipe }: Props) {
  return (
    <div>
      <h2 className="text-lg font-medium py-1">{recipe.name}</h2>
      <Ingredients items={recipe.ingredients} />
    </div>
  );
}
