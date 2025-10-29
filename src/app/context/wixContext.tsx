"use client"

import { createContext, useEffect, useState, type ReactNode } from "react"
import { createClient, OAuthStrategy } from "@wix/sdk"

export type WixClient = ReturnType<typeof createClient>
export const WixClientContext = createContext<WixClient | null>(null)

export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [wixClient, setWixClient] = useState<WixClient | null>(null)

  useEffect(() => {
    // Create client with visitor token generation (like in getHeader)
    const client = createClient({
      modules: {
        // Add modules as needed
      },
      auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      }),
    })

    // Generate visitor tokens for anonymous access
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
