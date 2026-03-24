import { z } from "zod"
import { wixHeroImageSchema } from "./common"

/**
 * First row of the MainHero collection — adjust keys to match your CMS field keys.
 */
export const mainHeroItemSchema = z
  .object({
    heroText: z.string().optional(),
    cta1: z.string().optional(),
    cta2: z.string().optional(),
    heroImages: z.array(wixHeroImageSchema).optional(),
  })
  .passthrough()

export type MainHeroItem = z.infer<typeof mainHeroItemSchema>

export function hasMainHeroContent(data: MainHeroItem): boolean {
  if (data.heroImages && data.heroImages.length > 0) return true
  const nonempty = (s?: string) => Boolean(s?.trim())
  return nonempty(data.heroText) || nonempty(data.cta1) || nonempty(data.cta2)
}
