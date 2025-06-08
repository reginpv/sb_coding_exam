import { configureStore } from "@reduxjs/toolkit"
import recipeReducer from "@/lib/features/recipe/recipe"
import filterReducer from "@/lib/features/filter/filter"
import toastReducer from "@/lib/features/toast/toast"

export const makeStore = () => {
  return configureStore({
    reducer: {
      recipe: recipeReducer,
      filter: filterReducer,
      toast: toastReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']