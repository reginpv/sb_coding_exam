import { Inter } from "next/font/google"
import TemplateDefault from "@/templates/default"
import FormRecipe from "@/components/FormRecipe"
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Edit() {

  const router = useRouter()
  const recipeId: string = router.query.recipeId as string

  return (
    <TemplateDefault 
      className={`${inter.className} flex flex-col gap-5`}
      header={{ search: false }}
    >
      <section className="flex flex-col md:flex-row gap-5 md:gap-10 p-4 container">
        <section className={`${inter.className} flex-1 rounded-2xl p-4 md:p-7 box-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative`}>
          <FormRecipe editing={recipeId}  />
        </section>
      </section>
    </TemplateDefault>
  )
}
