import FormSearch from '@/components/FormSearch'

export default function Header(): JSX.Element {
  return (
    <header className="bg-primary text-white p-4 h-24 flex items-center justify-end">
      <FormSearch />
    </header>
  )
}