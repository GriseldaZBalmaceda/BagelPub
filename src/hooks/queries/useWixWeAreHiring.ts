import { WIX_COLLECTIONS } from "@/constants/wixCollections"
import { twoColumnSectionItemSchema } from "@/schemas/wix"
import { useWixFirstCollectionItem } from "./useWixFirstCollectionItem"

export function useWixWeAreHiring() {
  return useWixFirstCollectionItem(
    WIX_COLLECTIONS.WE_ARE_HIRING,
    twoColumnSectionItemSchema
  )
}
