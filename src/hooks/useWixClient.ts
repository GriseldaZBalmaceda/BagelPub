import { useContext } from "react"
import { WixClientContext } from "../context/wixContext"

export const useWixClient = () => {
  const context = useContext(WixClientContext)
  if (!context) {
    throw new Error(
      "useWixClient must be used within a WixClientContextProvider"
    )
  }
  return context
}
