import { useEffect, useState } from "react"
import type { RootState } from "@/lib/store"
import { useSelector } from "react-redux"
import RecipeCard from "@/components/RecipeCard"

export default function RecipeList() {

  const recipes = useSelector((state: RootState) => state.recipe)
  const filter = useSelector((state: RootState) => state.filter)

  const [ recipesFiltered, setRecipesFiltered ] = useState<Recipe[]>(recipes)

  useEffect(() => {

    const { search, sort, favorite } = filter

    let filteredRecipes = [...recipes] // Create a shallow copy of the recipes array

    if (search) {
      filteredRecipes = filteredRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (favorite) {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.favorite === (favorite === "Yes"))
    }

    if (sort === "asc") {
      filteredRecipes.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sort === "desc") {
      filteredRecipes.sort((a, b) => b.title.localeCompare(a.title))
    }

    setRecipesFiltered(filteredRecipes)

  }, [recipes, filter])

  return (
    <div>
      {
        recipesFiltered.length > 0 ?
          <ul className="list-none flex flex-col gap-5 md:gap-10">
            {recipesFiltered.map((recipe: Recipe) => (
              <li key={recipe.id} className="border-b border-b-gray-400 pb-10 last:border-b-0">
                <RecipeCard recipe={recipe} />
              </li>
            ))}
          </ul> :
          <div className="text-2xl flex items-center justify-center h-52 font-semibold">
            No Record Found!
          </div>
      }
    </div>
  );
}