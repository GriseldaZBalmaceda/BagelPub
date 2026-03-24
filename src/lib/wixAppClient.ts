import { createClient, OAuthStrategy } from "@wix/sdk"
import { items } from "@wix/data"

export function createWixAppClient() {
  return createClient({
    modules: { items },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    }),
  })
}

export type WixClient = ReturnType<typeof createWixAppClient>
