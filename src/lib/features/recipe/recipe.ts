import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/lib/store"
import data from "@/data/recipe.json"

const initialState: Recipe[] = data

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
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


export const { setRecipe, addRecipe, updateRecipe, deleteRecipe } = recipeSlice.actions
export const selectRecipes = (state: RootState): Recipe[] => state.recipe

export default recipeSlice.reducer