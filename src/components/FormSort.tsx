
import { useState } from "react"
import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useAppDispatch } from "@/lib/hooks"
import { sortByTitle } from "@/lib/features/recipe/recipe"

type SortOrder = "asc" | "desc"

export default function FormSort(): JSX.Element {

  const dispatch = useAppDispatch()

  const [order, setOrder] = useState<SortOrder>("asc")

  function handleChange(e: SelectChangeEvent<SortOrder>) {
    const value = e.target.value as SortOrder
    setOrder(value)
    dispatch(sortByTitle(value))
  }


  return (
    <form className="flex items-center gap-2">
      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="sort" className="text-sm font-semibold">Sort by Title ()</label>
        <Select
          id="sort"
          name="sort"
          value={order}
          className="w-full bg-white rounded-lg border border-black"
          variant="outlined"
          size="small"
          onChange={handleChange}
        >
          <MenuItem value="asc">ASC</MenuItem>
          <MenuItem value="desc">DESC</MenuItem>
        </Select>
      </div>
    </form>
  )
}