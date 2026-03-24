import type { GetStaticProps, InferGetStaticPropsType } from "next"
import { HomePageContent } from "@/components/HomePageContent"
import {
  fetchAboutSectionItemServer,
  fetchHeroItemServer,
  fetchShowcaseItemsServer,
  fetchWeAreHiringItemServer,
} from "@/api/wix"

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

function serializeForNextProps<T>(value: T): T {
  if (value instanceof Date) {
    return value.toISOString() as T
  }
  if (Array.isArray(value)) {
    return value.map((item) => serializeForNextProps(item)) as T
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>).map(
      ([key, nested]) => [key, serializeForNextProps(nested)]
    )
    return Object.fromEntries(entries) as T
  }
  return value
}

export default function Home(props: HomePageProps) {
  return <HomePageContent {...props} />
}

export const getStaticProps: GetStaticProps<{
  heroData: Awaited<ReturnType<typeof fetchHeroItemServer>>
  aboutData: Awaited<ReturnType<typeof fetchAboutSectionItemServer>>
  hiringData: Awaited<ReturnType<typeof fetchWeAreHiringItemServer>>
  showcaseData: Awaited<ReturnType<typeof fetchShowcaseItemsServer>>
}> = async () => {
  if (!process.env.NEXT_PUBLIC_WIX_CLIENT_ID) {
    console.warn(
      "[wix] Missing NEXT_PUBLIC_WIX_CLIENT_ID during build. Returning empty homepage data."
    )
    return {
      props: {
        heroData: null,
        aboutData: null,
        hiringData: null,
        showcaseData: [],
      },
      revalidate: 60,
    }
  }

  const [heroResult, aboutResult, hiringResult, showcaseResult] =
    await Promise.allSettled([
      fetchHeroItemServer(),
      fetchAboutSectionItemServer(),
      fetchWeAreHiringItemServer(),
      fetchShowcaseItemsServer(),
    ])

  if (heroResult.status === "rejected") {
    console.error("[wix] Failed to fetch hero data", heroResult.reason)
  }
  if (aboutResult.status === "rejected") {
    console.error("[wix] Failed to fetch about data", aboutResult.reason)
  }
  if (hiringResult.status === "rejected") {
    console.error("[wix] Failed to fetch hiring data", hiringResult.reason)
  }
  if (showcaseResult.status === "rejected") {
    console.error("[wix] Failed to fetch showcase data", showcaseResult.reason)
  }

  const heroData = heroResult.status === "fulfilled" ? heroResult.value : null
  const aboutData =
    aboutResult.status === "fulfilled" ? aboutResult.value : null
  const hiringData =
    hiringResult.status === "fulfilled" ? hiringResult.value : null
  const showcaseData =
    showcaseResult.status === "fulfilled" ? showcaseResult.value : []

  return {
    props: {
      heroData: serializeForNextProps(heroData),
      aboutData: serializeForNextProps(aboutData),
      hiringData: serializeForNextProps(hiringData),
      showcaseData: serializeForNextProps(showcaseData),
    },
    // ISR: regenerate in background at most once every 5 minutes.
    revalidate: 300,
  }
}
