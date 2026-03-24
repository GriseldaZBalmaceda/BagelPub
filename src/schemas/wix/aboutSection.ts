import { z } from "zod"

/** Shared CMS shape for any two-column block (About, We’re hiring, etc.). */
export const twoColumnSectionItemSchema = z
  .object({
    title_fld: z.string().optional(),
    subtitle: z.string().optional(),
    description_fld: z.string().optional(),
    image_fld: z.string().optional(),
    ctaTitle: z.string().optional(),
    url: z.string().optional(),
  })
  .passthrough()

export type TwoColumnSectionItem = z.infer<typeof twoColumnSectionItemSchema>

export function hasTwoColumnSectionContent(data: TwoColumnSectionItem): boolean {
  const nonempty = (s?: string) => Boolean(s?.trim())
  return (
    nonempty(data.title_fld) ||
    nonempty(data.subtitle) ||
    nonempty(data.description_fld) ||
    nonempty(data.image_fld) ||
    nonempty(data.ctaTitle)
  )
}

/** Alias — same schema as {@link twoColumnSectionItemSchema}. */
export const aboutSectionItemSchema = twoColumnSectionItemSchema
export type AboutSectionItem = TwoColumnSectionItem
export const hasAboutSectionContent = hasTwoColumnSectionContent
