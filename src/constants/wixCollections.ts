/**
 * CMS collection slugs (Data → CMS in Wix dashboard).
 * Keep names in sync with Wix; use these in queries instead of raw strings.
 */
export const WIX_COLLECTIONS = {
  MAIN_HERO: "MainHero",
  ABOUT_SECTION: "AboutSection",
  WE_ARE_HIRING: "WeAreHiring",
  /** Parent row that holds multi-refs to other collections */
  SHOWCASE: "Showcase",
} as const

export type WixCollectionSlug =
  (typeof WIX_COLLECTIONS)[keyof typeof WIX_COLLECTIONS]
