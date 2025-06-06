export default function Aside({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <aside className={` ${className} w-1/4`}>
      {children}
    </aside>
  )
}