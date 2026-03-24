/** How long Wix CMS data is treated as fresh (no background refetch). */
export const WIX_CMS_STALE_TIME_MS = 24 * 60 * 60 * 1000

/**
 * How long to keep cached Wix results after no component uses them.
 * Longer than staleTime so quick navigations still hit memory cache.
 */
export const WIX_CMS_GC_TIME_MS = 48 * 60 * 60 * 1000
