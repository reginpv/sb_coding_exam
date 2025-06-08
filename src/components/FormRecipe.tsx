import { FormControl, InputLabel, TextField, FormHelperText } from "@mui/material"


export default function FormRecipe(): JSX.Element {
  return (
    <form className="flex flex-col gap-6 form">
      <FormControl className="flex flex-col gap-1 w-full">
        <label htmlFor="title" className="font-semibold uppercase tracking-widest">Your name</label>
        <TextField 
          id="createdByName" 
          name="createdByName" 
          type="text" 
          aria-describedby="" 
          variant="outlined" 
          placeholder="Your name" 
          className="input"
          fullWidth
        />
      </FormControl>

      <FormControl className="flex flex-col gap-1 w-full">
        <label htmlFor="title" className="font-semibold uppercase tracking-widest">Email address</label>
        <TextField 
          id="createdByEmail" 
          name="createdByEmail" 
          type="email" 
          aria-describedby="" 
          variant="outlined" 
          placeholder="Your email address" 
          className="input"
          fullWidth
        />
      </FormControl>

      <FormControl className="flex flex-col gap-1 w-full">
        <label htmlFor="title" className="font-semibold uppercase tracking-widest">Title</label>
        <TextField 
          id="title" 
          name="title" 
          type="text" 
          aria-describedby="" 
          variant="outlined" 
          placeholder="Recipe title" 
          className="input"
          fullWidth
        />
      </FormControl>

      <FormControl className="flex flex-col gap-1 w-full">
        <label htmlFor="title" className="font-semibold uppercase tracking-widest">Description</label>
        <TextField 
          id="description"
          name="description" 
          type="text" 
          aria-describedby="" 
          variant="outlined" 
          placeholder="Recipe title" 
          className="input"
          multiline
          rows={2}
          fullWidth
        />
      </FormControl>

      <FormControl className="flex flex-col gap-1 w-full">
        <label htmlFor="title" className="font-semibold uppercase tracking-widest">Ingredients</label>
        <TextField 
          id="ingredients"
          name="ingredients"
          type="text" 
          aria-describedby="" 
          variant="outlined" 
          placeholder="Ingredients" 
          className="input"
          multiline
          rows={4}
          fullWidth
        />
      </FormControl>

      <FormControl className="flex flex-col gap-1 w-full">
        <label htmlFor="title" className="font-semibold uppercase tracking-widest">Instructions</label>
        <TextField 
          id="instruction"
          name="instruction"
          type="text" 
          aria-describedby="" 
          variant="outlined" 
          placeholder="Instructions" 
          className="input"
          multiline
          rows={4}
          fullWidth
        />
      </FormControl>

      <div className="flex justify-end">
        <button className="button button--default">Save</button>
      </div>


    </form>
  )
}