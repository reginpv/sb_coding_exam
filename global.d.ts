type Recipe = {
  id: number
  title: string
  description: string
  ingredients: string
  instructions: string
  createdBy: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  },
  createdAt: string
}