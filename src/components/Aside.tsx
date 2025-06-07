export default function Aside({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}): JSX.Element {
  return (
    <aside className={` ${className} flex flex-col gap-5 md:w-1/4 py-1`}>
      {children}
    </aside>
  )
}