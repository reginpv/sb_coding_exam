import { useState } from "react"
import { format } from "date-fns"
import { Star, StarBorder } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { updateRecipe } from "@/lib/features/recipe/recipe"
import Link from  "next/link"

export default function RecipeCard({ 
  recipe 
}: { 
  recipe: Recipe
}) {

  // INIT
  const MAX_CHARS = 350
  const dispatch = useDispatch()

  // Local state for managing recipe details
  const [ moreDetails, setMoreDetails ] = useState(false)

  const { title, description, createdByName, createdByEmail, createdAt, ingredients, instructions } = recipe
  const content = [description, `Ingredients:\n${ingredients}`, `Instructions:\n${instructions}`].join('\n\n').trim()

  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-between gap-5 lg:gap-10">
      
      <div className="w-auto lg:w-1/3">
        <div className="aspect-[4/3] w-auto overflow-hidden rounded-lg relative">
          <button 
            onClick={() => dispatch(updateRecipe({
              ...recipe,
              favorite: !recipe.favorite
            }))}
            className="absolute top-4 right-4 break-all">
            {
              recipe.favorite 
                ? <Star className=" text-yellow-500 z-20" fontSize="large" />
                : <StarBorder className=" text-yellow-500 z-20" fontSize="large" />
            }
          </button>
          <img 
            src={recipe.image.src} 
            alt={recipe.image.alt} 
            width={recipe.image.width} 
            height={recipe.image.height} 
            className="rounded-lg object-cover w-auto object-center"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 flex-1">

        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl lg:text-3xl font-semibold">
            <Link href={`/recipe/${recipe.id}/edit`}>
              {title}
            </Link>
          </h2>
          <div className="overflow-y-auto max-h-[200px]">
            {
              content.length > MAX_CHARS && !moreDetails
                ? <div className="flex flex-col gap-4">
                    <div>{`${content.slice(0, MAX_CHARS)}...`}</div>
                  </div>
                : <div className="flex flex-col gap-4 whitespace-pre-line">
                    <div>{content}</div>
                  </div>
            }

            
          </div>

          <div>
            <button onClick={() => setMoreDetails(moreDetails ? false : true)}>
              {moreDetails ? 'Show Less' : 'Show More'}
            </button>
          </div>

        </div>

        {/** misc  */}
        <div className="flex items-center justify-between">
          <div>Added by: <a href={`mailto:${createdByEmail}`}>{createdByName}</a></div>
          <div>Date: {format(new Date(createdAt), 'MMM dd, yyyy')}</div>
        </div>

      </div>
    </div>
  )
}