
import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useAppDispatch } from "@/lib/hooks"
import { useSelector } from "react-redux"
import { setSort } from "@/lib/features/filter/filter"
import type { RootState } from "@/lib/store"

export default function FormSort(): JSX.Element {

  const dispatch = useAppDispatch()
  const filter = useSelector((state: RootState) => state.filter)
  const { sort } = filter

  return (
    <form className="flex items-center gap-2">
      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="sort" className="text-sm font-semibold">Sort by Title ()</label>
        <Select
          id="sort"
          name="sort"
          value={sort}
          className="w-full bg-white rounded-lg border border-black"
          variant="outlined"
          size="small"
          onChange={(e:SelectChangeEvent<"asc"|"desc">)=>dispatch(setSort(e.target.value))}
        >
          <MenuItem value="asc">ASC</MenuItem>
          <MenuItem value="desc">DESC</MenuItem>
        </Select>
      </div>
    </form>
  )
}