import { z } from "zod"
import { FormControl, InputLabel, TextField, FormHelperText } from "@mui/material"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addRecipe } from "@/lib/features/recipe/recipe"
import { useAppDispatch } from "@/lib/hooks"
import { useSelector } from "react-redux"
import type { RootState } from "@/lib/store"
import { useRouter } from "next/router"

export const formRecipeSchema = z.object({
  id: z.number().min(1, "ID must be greater than 0"),
  createdByName: z.string().min(1, "Name is required"),
  createdByEmail: z.string().email("Invalid email address").min(1, "Email is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  ingredients: z.string().min(1, "Ingredients are required"),
  instructions: z.string().min(1, "Instructions are required"),
  createdAt: z.string(),
  visible: z.boolean(),
  favorite: z.boolean()
})

export type FormRecipeSchema = z.infer<typeof formRecipeSchema>

export default function FormRecipe(): JSX.Element {

  const redirect = useRouter().push
  const dispatch = useAppDispatch()
  const recipe = useSelector((state: RootState) => state.recipe)

  const { register, handleSubmit, formState: { errors } } = useForm<FormRecipeSchema>({
    resolver: zodResolver(formRecipeSchema)
  })

  function onSubmit(data: FormRecipeSchema) {
    console.log("Form submitted with data:", data);

    try {
      dispatch(addRecipe(data))
      console.log("Recipe added successfully:", data);
      // Handle the success case, e.g., show a notification
      // redirect to the recipe list or clear the form
      redirect("/")
    }
    catch (error) {
      console.error("Error adding recipe:", error);
      // Handle the error appropriately, e.g., show a notification
    }


    // Here you would typically handle the form submission, e.g., send the data to an API
  }


  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 form"
    >
      <FormControl className="flex flex-col gap-1 w-full">
        <label htmlFor="title" className="font-semibold uppercase tracking-widest">Your name</label>
        <TextField 
          id="createdByName" 
          type="text" 
          variant="outlined" 
          placeholder="Your name" 
          className={`input ${errors.createdByName ? 'input--error' : ''}`}
          fullWidth
          {...register("createdByName", { required: true })}

        />
        {errors.createdByName && <FormHelperText error>{errors.createdByName.message}</FormHelperText>}
      </FormControl>

      <FormControl className="flex flex-col gap-1 w-full">
        <label htmlFor="title" className="font-semibold uppercase tracking-widest">Email address</label>
        <TextField 
          id="createdByEmail" 
          type="email" 
          variant="outlined" 
          placeholder="Your email address" 
          className="input"
          fullWidth
          {...register("createdByEmail", { required: true })}
        />
        {errors.createdByEmail && <FormHelperText error>{errors.createdByEmail.message}</FormHelperText>}
      </FormControl>

      <FormControl className="flex flex-col gap-1 w-full">
        <label htmlFor="title" className="font-semibold uppercase tracking-widest">Title</label>
        <TextField 
          id="title" 
          type="text" 
          aria-describedby="" 
          variant="outlined" 
          placeholder="Recipe title" 
          className="input"
          fullWidth
          {...register("title", { required: true })}
        />
        {errors.title && <FormHelperText error>{errors.title.message}</FormHelperText>}
      </FormControl>

      <FormControl className="flex flex-col gap-1 w-full">
        <label htmlFor="title" className="font-semibold uppercase tracking-widest">Description</label>
        <TextField 
          id="description"
          type="text" 
          aria-describedby="" 
          variant="outlined" 
          placeholder="Recipe title" 
          className="input"
          multiline
          rows={2}
          fullWidth
          {...register("description", { required: false })}
        />
        {errors.description && <FormHelperText error>{errors.description.message}</FormHelperText>}
      </FormControl>

      <FormControl className="flex flex-col gap-1 w-full">
        <label htmlFor="title" className="font-semibold uppercase tracking-widest">Ingredients</label>
        <TextField 
          id="ingredients"
          type="text" 
          aria-describedby="" 
          variant="outlined" 
          placeholder="Ingredients" 
          className="input"
          multiline
          rows={4}
          fullWidth
          {...register("ingredients", { required: true })}
        />
        {errors.ingredients && <FormHelperText error>{errors.ingredients.message}</FormHelperText>}
      </FormControl>

      <FormControl className="flex flex-col gap-1 w-full">
        <label htmlFor="title" className="font-semibold uppercase tracking-widest">Instructions</label>
        <TextField 
          id="instruction"
          type="text" 
          aria-describedby="" 
          variant="outlined" 
          placeholder="Instructions" 
          className="input"
          multiline
          rows={4}
          fullWidth
          {...register("instructions", { required: true })}
        />
        {errors.instructions && <FormHelperText error>{errors.instructions.message}</FormHelperText>}
      </FormControl>

      <input type="hidden" {...register("createdAt", { value: new Date().toISOString() })} />
      <input type="hidden" {...register("visible", { value: true })} />
      <input type="hidden" {...register("favorite", { value: false })} />
      <input type="hidden" {...register("id", { value: recipe.length + 1 })} />

      <div className="flex justify-end">
        <button className="button button--default">Save</button>
      </div>


    </form>
  )
}