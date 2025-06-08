import { Inter } from "next/font/google"
import Link from "next/link"
import TemplateDefault from "@/templates/default"
import Aside from "@/components/Aside"
import { ArrowBackIos } from "@mui/icons-material"
import FormRecipe from "@/components/FormRecipe"

const inter = Inter({ subsets: ['latin'] })

export default function Add() {
  return (
    <TemplateDefault 
      className={`${inter.className} flex flex-col gap-5`}
      header={{ search: false }}
    >
      <section className="flex flex-col md:flex-row gap-5 md:gap-10 p-4 container">

        {/** Aside */}
        <Aside>
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl">
              <ArrowBackIos />
              Back 
            </Link>
          </div>
        </Aside>

        {/** Main */}
        <section className={`${inter.className} flex-1 rounded-2xl p-4 md:p-7 box-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative`}>
          <FormRecipe />
        </section>

      </section>
    </TemplateDefault>
  )
}
