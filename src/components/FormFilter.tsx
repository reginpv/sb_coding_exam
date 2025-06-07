import { FormGroup, FormControlLabel, Checkbox } from "@mui/material"

export default function FormFilter(): JSX.Element {
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
            control={<Checkbox name="favorite" value="Yes" />}
            label="Yes"
          />
          <FormControlLabel
            control={<Checkbox name="favorite" value="No" />}
            label="No"
          />
        </FormGroup>
      </div>
    </form>
  )
}