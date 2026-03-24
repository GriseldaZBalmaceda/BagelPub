import { QueryClient } from "@tanstack/react-query"
import {
  WIX_CMS_GC_TIME_MS,
  WIX_CMS_STALE_TIME_MS,
} from "@/constants/queryCache"

export function createBrowserQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: WIX_CMS_STALE_TIME_MS,
        gcTime: WIX_CMS_GC_TIME_MS,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  })
}
