import { createClient, OAuthStrategy } from "@wix/sdk"
import { items } from "@wix/data"
// Singleton Wix client instance for server-side operations
let wixClientServerInstance: any = null

// Create and cache a single Wix client instance for server-side use
export async function getWixClientServer() {
  if (wixClientServerInstance) {
    return wixClientServerInstance
  }

  const wixClient = createClient({
    modules: {
      items,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    }),
  })

  // Generate visitor tokens for anonymous access
  const tokens = await wixClient.auth.generateVisitorTokens()
  wixClient.auth.setTokens(tokens)

  wixClientServerInstance = wixClient
  return wixClientServerInstance
}
