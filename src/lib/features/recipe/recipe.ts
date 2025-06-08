import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/lib/store"
import data from "@/data/recipe.json"

const initialState: Recipe[] = data

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setRecipe: (state, action: PayloadAction<Recipe[]>) => {
      state = action.payload
    },
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.push(action.payload)
    },
    updateRecipe: (state, action: PayloadAction<Recipe>) => {
      const index = state.findIndex(recipe => recipe.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    deleteRecipe: (state, action: PayloadAction<number>) => {
      return state.filter(recipe => recipe.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRecipe, addRecipe, updateRecipe, deleteRecipe } = recipeSlice.actions

// A "selector" function that allows us to select a value from the state
export const selectRecipes = (state: RootState): Recipe[] => state.recipe

export default recipeSlice.reducer