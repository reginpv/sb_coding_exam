import { configureStore } from "@reduxjs/toolkit"
import recipeReducer from "./features/recipe/recipe"
import filterReducer from "./features/filter/filter"

export const makeStore = () => {
  return configureStore({
    reducer: {
      recipe: recipeReducer,
      filter: filterReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']