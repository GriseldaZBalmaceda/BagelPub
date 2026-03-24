import { z } from "zod"

/**
 * Single linked item from a Wix reference / multi-reference field.
 * Headless often returns a string ID; sometimes `{ _id }`.
 */
export const wixReferenceIdSchema = z.union([
  z.string(),
  z.object({ _id: z.string() }).transform((v) => v._id),
])

/** Ordered list of linked item IDs (one multi-reference field in the CMS). */
export const wixMultiReferenceFieldSchema = z.array(wixReferenceIdSchema)

export type WixReferenceIds = z.infer<typeof wixMultiReferenceFieldSchema>
