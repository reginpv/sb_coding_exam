import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/lib/store"
import data from "@/data/recipe.json"

// Define a type for the slice state
type RecipeState = {
  id: number
  title: string
  ingredients: string
  instructions: string
  createdBy: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
}

// Define the initial state using that type
const initialState: RecipeState[] = data

console.log("Initial recipe data:", initialState)

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setRecipe: (state, action: PayloadAction<RecipeState[]>) => {
      state = action.payload
    },
    addRecipe: (state, action: PayloadAction<RecipeState>) => {
      state.push(action.payload)
    },
    updateRecipe: (state, action: PayloadAction<RecipeState>) => {
      const index = state.findIndex(recipe => recipe.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    deleteRecipe: (state, action: PayloadAction<number>) => {
      return state.filter(recipe => recipe.id !== action.payload)
    },
    searchRecipe: (state, action: PayloadAction<string>) => {
      return state.filter(recipe => 
        recipe.title.toLowerCase().includes(action.payload.toLowerCase()) ||
        recipe.ingredients.toLowerCase().includes(action.payload.toLowerCase())
      )
    }
  },
})

// Action creators are generated for each case reducer function
export const { addRecipe, updateRecipe, deleteRecipe, searchRecipe } = recipeSlice.actions

// A "selector" function that allows us to select a value from the state
export const selectRecipes = (state: RootState): RecipeState[] => state.recipe

export default recipeSlice.reducer