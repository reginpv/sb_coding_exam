import { useAppDispatch } from "@/lib/hooks"
import { useSelector } from "react-redux"
import { setSearch } from "@/lib/features/filter/filter"
import type { RootState } from "@/lib/store"

export default function FormSearch(): JSX.Element {

  const dispatch = useAppDispatch()
  const filter = useSelector((state: RootState) => state.filter)
  const { search } = filter


  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault()
        // Handle search submission logic here
      }}
      className="bg-background h-11 flex items-center rounded-xl p-4 text-b w-full max-w-[506px] text-black border-1 border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
    >
      <input
        type="text"
        placeholder="Search here..."
        name="search"
        value={search}
        className="outline-none bg-background flex-1"
        onChange={e=>dispatch(setSearch(e.target.value))}
      />
      <button
        type="submit"
      >
        <img src="/images/icons/icon-search.png" alt="Search Icon" width={35} height={35} />
      </button>
    </form>
  )
}
