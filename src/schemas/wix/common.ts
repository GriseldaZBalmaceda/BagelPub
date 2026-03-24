import { z } from "zod"

/** One image entry from Wix media (hero carousel, etc.). */
export const wixHeroImageSchema = z
  .object({
    src: z.string(),
  })
  .passthrough()

export type WixHeroImage = z.infer<typeof wixHeroImageSchema>
