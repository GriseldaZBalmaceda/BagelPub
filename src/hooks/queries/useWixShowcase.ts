import { useQuery } from "@tanstack/react-query"
import { WIX_COLLECTIONS } from "@/constants/wixCollections"
import {
  WIX_CMS_GC_TIME_MS,
  WIX_CMS_STALE_TIME_MS,
} from "@/constants/queryCache"
import { showcaseItemSchema } from "@/schemas/wix"
import { fetchCollectionItems } from "@/api/wix/fetchCollection"
import { useWixClient } from "@/hooks/useWixClient"
import { wixQueryKeys } from "./queryKeys"

export function useWixShowcase() {
  const client = useWixClient()

  return useQuery({
    queryKey: wixQueryKeys.collectionRows(WIX_COLLECTIONS.SHOWCASE),
    queryFn: async () => {
      if (!client) throw new Error("Wix client not ready")
      return fetchCollectionItems(client, WIX_COLLECTIONS.SHOWCASE, showcaseItemSchema)
    },
    enabled: !!client,
    staleTime: WIX_CMS_STALE_TIME_MS,
    gcTime: WIX_CMS_GC_TIME_MS,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })
}
