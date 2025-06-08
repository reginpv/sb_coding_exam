import { useAppDispatch } from "@/lib/hooks"
import { setFavorite } from "@/lib/features/filter/filter"
import { useSelector } from "react-redux"
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import type { RootState } from "@/lib/store"

export default function FormFilter(): JSX.Element {

  const dispatch = useAppDispatch()
  const filter = useSelector((state: RootState) => state.filter)
  const { favorite } = filter

  return (
    <form className="flex flex-col items-center gap-2">
      <div className="w-full text-sm font-semibold">
        <p>Filter</p>
      </div>
      <div className="flex flex-col items-center gap-2 w-full bg-white p-4 rounded-lg border border-black">
        <div className="w-full text-sm font-semibold">
          <p>Favorites</p>
        </div>
        <FormGroup className="pl-7 w-full">
          <FormControlLabel
            control={
              <Checkbox
                checked={favorite === "Yes"}
                onChange={() => {
                  dispatch(setFavorite(favorite === "Yes" ? null : "Yes"))
                }}
              />
            }
            label="Yes"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={favorite === "No"}
                onChange={() => {
                  dispatch(setFavorite(favorite === "No" ? null : "No"))
                }}
              />
            }
            label="No"
          />
        </FormGroup>
      </div>
    </form>
  )
}