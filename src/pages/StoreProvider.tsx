"use client"
import { useRef } from "react"
import { Provider } from "react-redux"
import { makeStore, AppStore } from "../lib/store"
import { recipeSlice } from "@/lib/features/recipe/recipe"

export default function StoreProvider({
  recipe,
  children,
}: {
  recipe: any
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(recipeSlice.actions.setRecipe(recipe))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}