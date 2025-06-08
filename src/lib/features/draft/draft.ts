import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/lib/store"

const initialState: Recipe = {
  id: 0,
  title: '',
  description: '',
  ingredients: '',
  instructions: '',
  image: {
    src: '',
    alt: '',
    width: 0,
    height: 0
  },
  favorite: false,
  createdAt: new Date().toISOString(),
  createdByName: '',
  createdByEmail: '',
  visible: true
}

export const draftSlice = createSlice({
  name: 'draft',
  initialState,
  reducers: {
    setDraft: (state, action: PayloadAction<Recipe>) => {
      state = action.payload
    },
    clearDraft: () => {
      return initialState
    },
  },
})


export const { setDraft, clearDraft } = draftSlice.actions

export const selectRecipes = (state: RootState): Recipe[] => state.recipe

export default draftSlice.reducer