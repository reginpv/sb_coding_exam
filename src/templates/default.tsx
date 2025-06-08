import Header from "@/components/Header"
import Toast from "@/components/Toast"

/**
 * We'll add header options here
 * since not all pages will need a search bar
 */
export default function TemplateDefault({ 
  className,
  children,
  header = { 
    search: true 
  }
}: { 
  className?: string,
  children: React.ReactNode
  header?: {
    search: boolean
  } 
}): JSX.Element {
  return (
    <div className={`${className ? className : ''}`}>

      {/** Header */}
      <Header search={header.search} />

      {/** Main */}
      <main>{children}</main>

      {/** Toast */}
      <Toast />

    </div>
  )
}