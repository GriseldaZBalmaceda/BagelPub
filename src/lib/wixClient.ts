import { createWixAppClient, type WixClient } from "./wixAppClient"

let wixClientServerInstance: WixClient | null = null

export type { WixClient }

/** Singleton Wix client for server-side use (SSR, route handlers). */
export async function getWixClientServer() {
  if (wixClientServerInstance) {
    return wixClientServerInstance
  }

  const wixClient = createWixAppClient()

  // Generate visitor tokens for anonymous access
  const tokens = await wixClient.auth.generateVisitorTokens()
  wixClient.auth.setTokens(tokens)

  wixClientServerInstance = wixClient
  return wixClientServerInstance
}
