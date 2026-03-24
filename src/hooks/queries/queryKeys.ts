import type { WixCollectionSlug } from "@/constants/wixCollections"

export const wixQueryKeys = {
  all: ["wix"] as const,
  collection: (slug: WixCollectionSlug) =>
    [...wixQueryKeys.all, "collection", slug] as const,
  collectionRows: (slug: WixCollectionSlug) =>
    [...wixQueryKeys.all, "collectionRows", slug] as const,
}
