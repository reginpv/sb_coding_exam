import Header from "@/components/Header"

export default function TemplateDefault({ 
  className,
  children 
}: { 
  className?: string,
  children: React.ReactNode 
}): JSX.Element {
  return (
    <div className={`${className ? className : ''}`}>

      {/** Header */}
      <Header />

      {/** Main */}
      <main>{children}</main>

    </div>
  )
}