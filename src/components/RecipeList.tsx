import type { RootState } from "@/lib/store"
import { useSelector, useDispatch } from "react-redux"
import RecipeCard from "@/components/RecipeCard"

export default function RecipeList() {

  const recipes = useSelector((state: RootState) => state.recipe)

  return (
    <div>
      <ul className="list-none flex flex-col gap-5 md:gap-10">
        {recipes.map((recipe: Recipe) => (
          <li key={recipe.id} className="border-b border-b-gray-400 pb-10 last:border-b-0">
            <RecipeCard recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
}