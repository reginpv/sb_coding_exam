import "@/styles/globals.css"
import type { AppProps } from "next/app"
import StoreProvider from "./StoreProvider"


export default function App({ Component, pageProps }: AppProps) {

  const { recipe } = pageProps
  
  return (
    <StoreProvider recipe={recipe}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
