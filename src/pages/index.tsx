import { Inter } from 'next/font/google'
import TemplateDefault from '@/templates/default'
import Aside from '@/components/Aside'
import FormSort from '@/components/FormSort'
import FormFilter from '@/components/FormFilter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <TemplateDefault className={`${inter.className} flex flex-col gap-5`}>
      <section className="flex gap-5 p-5 container">

        {/** Aside */}
        <Aside>
          <FormSort />
          <FormFilter />
        </Aside>

        {/** Main */}
        <section className={`${inter.className} flex-1`}>
          section
        </section>

      </section>
    </TemplateDefault>
  )
}
