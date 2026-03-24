import { useContext } from "react"
import { WixClientContext } from "../context/wixContext"

/** `null` while visitor tokens are loading; only throws outside the provider. */
export const useWixClient = () => {
  const context = useContext(WixClientContext)
  if (context === undefined) {
    throw new Error(
      "useWixClient must be used within a WixClientContextProvider"
    )
  }
  return context
}
