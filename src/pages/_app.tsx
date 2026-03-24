import { AppProps } from "next/app"
import { WixClientContextProvider } from "@/context/wixContext"
import { QueryProvider } from "@/providers/QueryProvider"
import "@/styles/globals.css"
import { Navigation } from "@/components/Navigation"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WixClientContextProvider>
      <QueryProvider>
        <Navigation />
        <Component {...pageProps} />
      </QueryProvider>
    </WixClientContextProvider>
  )
}

export default MyApp
