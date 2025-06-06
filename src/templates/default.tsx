export default function TemplateDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className="template template--default">
      {/** Header here */}
      
      <main>{children}</main>

      {/** If we add a footer here */}
      <footer></footer>
    </div>
  )
}