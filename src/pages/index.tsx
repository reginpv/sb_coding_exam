import { Inter } from 'next/font/google'
import TemplateDefault from '@/templates/default'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <TemplateDefault>
      <main className={`${inter.className}`}>
        Main
      </main>
    </TemplateDefault>
  )
}
