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
  const [heroData, aboutData, hiringData, showcaseData] = await Promise.all([
    fetchHeroItemServer(),
    fetchAboutSectionItemServer(),
    fetchWeAreHiringItemServer(),
    fetchShowcaseItemsServer(),
  ])

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
