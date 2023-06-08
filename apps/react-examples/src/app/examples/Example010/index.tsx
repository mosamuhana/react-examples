import { recipes } from "./data";
import { RecipeItem } from "./RecipeItem";

export function Component() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold py-2 mb-5 border-b border-b-slate-500">Recipes</h1>
      {recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)}
    </div>
  );
}
