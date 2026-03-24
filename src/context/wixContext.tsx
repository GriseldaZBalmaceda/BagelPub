import { createContext, useEffect, useState, type ReactNode } from "react"
import {
  createWixAppClient,
  type WixClient,
} from "@/lib/wixAppClient"

export type { WixClient }
export const WixClientContext = createContext<WixClient | null | undefined>(
  undefined
)

export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [wixClient, setWixClient] = useState<WixClient | null>(null)

  useEffect(() => {
    const client = createWixAppClient()

    client.auth.generateVisitorTokens().then((tokens) => {
      client.auth.setTokens(tokens)
      setWixClient(client)
    })
  }, [])

  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  )
}
