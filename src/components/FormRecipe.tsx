import { z } from "zod"
import { useState, useRef, useEffect } from "react"
import { FormControl, TextField, FormHelperText } from "@mui/material"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addRecipe, updateRecipe } from "@/lib/features/recipe/recipe"
import { useAppDispatch } from "@/lib/hooks"
import { useSelector } from "react-redux"
import type { RootState } from "@/lib/store"
import { useRouter } from "next/router"
import Link from "next/link"
import { ArrowBackIos } from "@mui/icons-material"

export const formRecipeSchema = z.object({
  id: z.number().min(1, "ID must be greater than 0"),
  image: z.object({
    src: z.string().min(1, "Image source is required"),
    alt: z.string().min(1, "Image alt is required"),
    width: z.number().min(1),
    height: z.number().min(1),
  }).refine(img => img.src.endsWith(".jpg") || img.src.endsWith(".png"), {
    message: "Only JPG/PNG allowed",
    path: ["src"],
  }),
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

export default function FormRecipe({
  editing
}:{
  editing?: string
}): JSX.Element {

  const redirect = useRouter().push
  const dispatch = useAppDispatch()
  const recipe = useSelector((state: RootState) => state.recipe)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm<FormRecipeSchema>({
    resolver: zodResolver(formRecipeSchema)
  })

  useEffect(() => {
    if (editing) {
      const recipeToEdit = recipe.find(r => r.id === parseInt(editing))
      if (recipeToEdit) {
        setValue("id", recipeToEdit.id)
        setValue("image", recipeToEdit.image)
        setValue("createdByName", recipeToEdit.createdByName)
        setValue("createdByEmail", recipeToEdit.createdByEmail)
        setValue("title", recipeToEdit.title)
        setValue("description", recipeToEdit.description)
        setValue("ingredients", recipeToEdit.ingredients)
        setValue("instructions", recipeToEdit.instructions)
        setValue("createdAt", recipeToEdit.createdAt)
        setValue("visible", recipeToEdit.visible)
        setValue("favorite", recipeToEdit.favorite)

        // Set image preview
        setImagePreview(recipeToEdit.image.src)
      }
    }
  }, [editing, recipe, setValue])

  async function onSubmit(currentHookFormData: FormRecipeSchema) {
  try {
    const dataForDispatch = { ...currentHookFormData }

    const imageFile = fileInputRef.current?.files?.[0]
    if (imageFile) {

      const formData = new FormData()
      formData.append("file", imageFile)

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!uploadRes.ok) {
        throw new Error("Image upload failed")
      }

      const { path } = await uploadRes.json()

      const reader = new FileReader()
      const preview = await new Promise<string>((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result as string)
        reader.onerror = reject
        reader.readAsDataURL(imageFile)
      })

      setImagePreview(preview)

      const imageData: FormRecipeSchema["image"] = {
        src: path, // server-provided path
        alt: imageFile.name,
        width: 400,
        height: 250,
      }

      dataForDispatch.image = imageData
      setValue("image", imageData, { shouldValidate: true })
    }

    editing ? dispatch(updateRecipe(dataForDispatch)) : dispatch(addRecipe(dataForDispatch))
    redirect("/")

  } catch (error) {
    console.error("Error adding recipe:", error)
  }
}


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      const imageData = {
        src: `/images/uploads/${file.name}`,
        alt: file.name,
        width: 400,
        height: 250,
      }

      setValue("image", imageData)
      trigger("image") // to update validation
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }


  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 form"
    >

      <div className="flex gap-10">
        
        <div className="md:w-1/3">
          
          <div>

            <Link href="/" className="flex items-center gap-2 text-xl">
              <ArrowBackIos />
              Back 
            </Link>

            <div>
              <div className="relative w-full h-64 mt-4">
                <img 
                  src={imagePreview || "/images/default-image.png"}
                  alt="Recipe Preview"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                />
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {
              errors.image && <div>
                <FormHelperText error className="bottom-0 left-0">
                  {errors.image.message}
                </FormHelperText>
              </div>
            }

          </div>

        </div>

        <div className="flex flex-col gap-6 flex-1">
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

        </div>
      </div>


      <input type="hidden" {...register("createdAt", { value: new Date().toISOString() })} />
      <input type="hidden" {...register("visible", { value: true })} />
      <input type="hidden" {...register("favorite", { value: false })} />
      <input type="hidden" {...register("id", { value: recipe.length + 1 })} />

      {
        JSON.stringify(errors)
      }

      <div className="flex justify-end">
        <button className="button button--default">Save</button>
      </div>


    </form>
  )
}