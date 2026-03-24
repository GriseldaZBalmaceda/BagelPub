import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import type { z } from "zod"
import type { WixCollectionSlug } from "@/constants/wixCollections"
import {
  WIX_CMS_GC_TIME_MS,
  WIX_CMS_STALE_TIME_MS,
} from "@/constants/queryCache"
import { fetchFirstCollectionItem } from "@/api/wix/fetchCollection"
import { useWixClient } from "@/hooks/useWixClient"
import { wixQueryKeys } from "./queryKeys"

/**
 * One query per CMS collection + Zod schema. Cached in memory: fresh for 24h, then
 * eligible for refetch; inactive cache kept 48h (see queryCache constants).
 * Same `queryKey` = one request shared across components.
 */
export function useWixFirstCollectionItem<T extends z.ZodTypeAny>(
  slug: WixCollectionSlug,
  schema: T
): UseQueryResult<z.infer<T> | null, Error> {
  const client = useWixClient()

  return useQuery({
    queryKey: wixQueryKeys.collection(slug),
    queryFn: async () => {
      if (!client) throw new Error("Wix client not ready")
      return fetchFirstCollectionItem(client, slug, schema)
    },
    enabled: !!client,
    staleTime: WIX_CMS_STALE_TIME_MS,
    gcTime: WIX_CMS_GC_TIME_MS,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })
}
