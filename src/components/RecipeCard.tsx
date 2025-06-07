import { format } from 'date-fns'

export default function RecipeCard({ 
  recipe 
}: { 
  recipe: Recipe
}) {

  const { title, description, createdBy, createdAt } = recipe

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10">
      <div className="w-auto lg:w-1/3">
        <div className="aspect-[4/3] w-auto overflow-hidden rounded-lg">
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

        <div>
          <h2 className="text-xl lg:text-3xl font-semibold">{title}</h2>
          <div>{description}</div>
        </div>

        {/** misc  */}
        <div className="flex items-center justify-between">
          <div>Added by: {createdBy}</div>
          <div>Date: {format(new Date(createdAt), 'MMM dd, yyyy')}</div>
        </div>

      </div>
    </div>
  )
}