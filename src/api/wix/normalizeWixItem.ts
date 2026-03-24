/**
 * Wix Data items often nest custom fields under `data`; merge for predictable Zod parsing.
 */
export function normalizeWixItem(item: unknown): Record<string, unknown> {
  if (!item || typeof item !== "object") return {}
  const o = item as Record<string, unknown>
  const data = o.data
  if (data && typeof data === "object" && !Array.isArray(data)) {
    return { ...o, ...(data as Record<string, unknown>) }
  }
  return o
}
