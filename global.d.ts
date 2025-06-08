type Recipe = {
  id: number
  title: string
  description: string
  ingredients: string
  instructions: string
  image?: {
    src: string
    alt: string
    width: number
    height: number
  },
  favorite: boolean
  createdAt: string
  createdByName: string
  createdByEmail: string
  visible: boolean
}