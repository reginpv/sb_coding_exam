import Header from "@/components/Header"

export default function TemplateDefault({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="template template--default">

      {/** Header */}
      <Header />

      {/** Main */}
      <main>{children}</main>

      {/** Footer (if we add a footer) */}
      <footer></footer>
    </div>
  )
}