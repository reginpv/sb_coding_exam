import { MenuItem, Select } from "@mui/material"

export default function FormSort(): JSX.Element {
  return (
    <form className="flex items-center gap-2">
      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="sort" className="text-sm font-semibold">Sort by Title</label>
        <Select
          id="sort"
          name="sort"
          defaultValue="desc"
          className="w-full bg-white rounded-lg border border-black"
          variant="outlined"
          size="small"

        >
          <MenuItem value="asc">ASC</MenuItem>
          <MenuItem value="desc">DESC</MenuItem>
        </Select>
      </div>
    </form>
  );
}