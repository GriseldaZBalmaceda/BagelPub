import type { z } from "zod"
import type { WixClient } from "@/lib/wixAppClient"
import { normalizeWixItem } from "./normalizeWixItem"

export async function fetchFirstCollectionItem<T extends z.ZodTypeAny>(
  client: WixClient,
  collectionSlug: string,
  schema: T
): Promise<z.infer<T> | null> {
  const results = await client.items.query(collectionSlug).find()
  const raw = results.items[0]
  if (!raw) return null

  const normalized = normalizeWixItem(raw)
  const parsed = schema.safeParse(normalized)
  if (!parsed.success) {
    console.error(
      `[wix] "${collectionSlug}" schema mismatch`,
      parsed.error.flatten()
    )
    return null
  }
  return parsed.data
}

export async function fetchCollectionItems<T extends z.ZodTypeAny>(
  client: WixClient,
  collectionSlug: string,
  schema: T
): Promise<Array<z.infer<T>>> {
  const results = await client.items.query(collectionSlug).find()
  const parsedItems = results.items
    .map((raw, index) => {
      const normalized = normalizeWixItem(raw)
      const parsed = schema.safeParse(normalized)
      if (!parsed.success) {
        console.error(
          `[wix] "${collectionSlug}" schema mismatch at index ${index}`,
          parsed.error.flatten()
        )
        return null
      }
      return parsed.data
    })
    .filter((item): item is z.infer<T> => item !== null)

  return parsedItems
}
