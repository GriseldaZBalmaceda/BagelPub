import { AppProps } from "next/app"
import { WixClientContextProvider } from "@/context/wixContext"
import "@/styles/globals.css"
import { Navigation } from "@/components/Navigation"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WixClientContextProvider>
      <Navigation />
      <Component {...pageProps} />
    </WixClientContextProvider>
  )
}

export default MyApp
