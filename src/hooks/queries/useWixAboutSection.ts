import { WIX_COLLECTIONS } from "@/constants/wixCollections"
import { twoColumnSectionItemSchema } from "@/schemas/wix"
import { useWixFirstCollectionItem } from "./useWixFirstCollectionItem"

export function useWixAboutSection() {
  return useWixFirstCollectionItem(
    WIX_COLLECTIONS.ABOUT_SECTION,
    twoColumnSectionItemSchema
  )
}
