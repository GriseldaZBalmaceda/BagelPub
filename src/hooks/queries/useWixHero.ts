import { WIX_COLLECTIONS } from "@/constants/wixCollections"
import { mainHeroItemSchema } from "@/schemas/wix"
import { useWixFirstCollectionItem } from "./useWixFirstCollectionItem"

export function useWixHero() {
  return useWixFirstCollectionItem(WIX_COLLECTIONS.MAIN_HERO, mainHeroItemSchema)
}
