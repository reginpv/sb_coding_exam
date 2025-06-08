import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/lib/store"

const initialState: {
  search: string
  sort: "asc" | "desc"
  favorite: "Yes" | "No" | null
} = {
  search: "",
  sort: "asc",
  favorite: null,
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setSort: (state, action: PayloadAction<"asc" | "desc">) => {
      state.sort = action.payload
    },
    setFavorite: (state, action: PayloadAction<"Yes" | "No" | null>) => {
      state.favorite = action.payload
    },
  },
})

export const { setSearch, setSort, setFavorite } = filterSlice.actions
export const selectFilter = (state: RootState): typeof initialState => state.filter

export default filterSlice.reducer