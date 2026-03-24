import { z } from "zod"

/** One row in Showcase collection. */
export const showcaseItemSchema = z
  .object({
    title_fld: z.string().optional(),
    subtitle: z.string().optional(),
    description_fld: z.string().optional(),
    image_fld: z.string().optional(),
    cta: z.string().optional(),
    externalLink: z.boolean().optional(),
  })
  .passthrough()

export type ShowcaseItem = z.infer<typeof showcaseItemSchema>

export function hasShowcaseContent(data: ShowcaseItem): boolean {
  const nonempty = (s?: string) => Boolean(s?.trim())
  return (
    nonempty(data.title_fld) ||
    nonempty(data.subtitle) ||
    nonempty(data.description_fld) ||
    nonempty(data.image_fld) ||
    nonempty(data.cta)
  )
}
