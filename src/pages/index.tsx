import { Inter } from "next/font/google"
import TemplateDefault from "@/templates/default"
import Aside from "@/components/Aside"
import FormSort from "@/components/FormSort"
import FormFilter from "@/components/FormFilter"
import RecipeList from "@/components/RecipeList"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <TemplateDefault className={`${inter.className} flex flex-col gap-5`}>
      <section className="flex flex-col md:flex-row gap-5 md:gap-10 p-4 container">

        {/** Aside */}
        <Aside>
          <FormSort />
          <FormFilter />
        </Aside>

        {/** Main */}
        <section className={`${inter.className} flex-1 rounded-2xl bg-white p-4 md:p-7 box-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]`}>
          <RecipeList />
        </section>

      </section>
    </TemplateDefault>
  )
}
