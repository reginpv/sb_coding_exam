import FormSearch from "@/components/FormSearch"
export default function Header({
  search = true
}: {
  search?: boolean
}): JSX.Element {
  return (
    <header className="bg-primary text-white p-4 h-24 flex items-center justify-end sticky top-0 z-30">
      {
        search && <FormSearch />
      }
    </header>
  )
}