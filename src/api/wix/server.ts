import { getWixClientServer } from "@/lib/wixClient"
import { WIX_COLLECTIONS } from "@/constants/wixCollections"
import {
  mainHeroItemSchema,
  showcaseItemSchema,
  twoColumnSectionItemSchema,
} from "@/schemas/wix"
import { fetchCollectionItems, fetchFirstCollectionItem } from "./fetchCollection"

/** Server-only: use in getServerSideProps / Route Handlers / server actions. */
export async function fetchHeroItemServer() {
  const client = await getWixClientServer()
  return fetchFirstCollectionItem(
    client,
    WIX_COLLECTIONS.MAIN_HERO,
    mainHeroItemSchema
  )
}

export async function fetchAboutSectionItemServer() {
  const client = await getWixClientServer()
  return fetchFirstCollectionItem(
    client,
    WIX_COLLECTIONS.ABOUT_SECTION,
    twoColumnSectionItemSchema
  )
}

export async function fetchWeAreHiringItemServer() {
  const client = await getWixClientServer()
  return fetchFirstCollectionItem(
    client,
    WIX_COLLECTIONS.WE_ARE_HIRING,
    twoColumnSectionItemSchema
  )
}

export async function fetchShowcaseItemsServer() {
  const client = await getWixClientServer()
  return fetchCollectionItems(
    client,
    WIX_COLLECTIONS.SHOWCASE,
    showcaseItemSchema
  )
}
