import { Hero } from "@/components/Hero"
import { TwoColumSection } from "@/components/TwoColumSection"
import { CarrouselAnnouncement } from "@/components/CarouselAnnouncement"
import { Footer } from "@/components/Footer"
import {
  hasTwoColumnSectionContent,
  type TwoColumnSectionItem,
} from "@/schemas/wix/aboutSection"
import { hasMainHeroContent, type MainHeroItem } from "@/schemas/wix/mainHero"
import type { ShowcaseItem } from "@/schemas/wix/showcase"

type HomePageContentProps = {
  heroData: MainHeroItem | null
  aboutData: TwoColumnSectionItem | null
  hiringData: TwoColumnSectionItem | null
  showcaseData: ShowcaseItem[]
}

export function HomePageContent({
  heroData,
  aboutData,
  hiringData,
  showcaseData,
}: HomePageContentProps) {
  const showHero = heroData != null && hasMainHeroContent(heroData)
  const showAbout = aboutData != null && hasTwoColumnSectionContent(aboutData)
  const showHiring =
    hiringData != null && hasTwoColumnSectionContent(hiringData)
  const showShowcase = showcaseData != null && showcaseData.length > 0

  return (
    <div className="h-full items-center justify-items-center overflow-hidden">
      {showHero && <Hero heroData={heroData} />}
      {showAbout && <TwoColumSection content={aboutData} />}
      {showShowcase && <CarrouselAnnouncement showcaseItems={showcaseData} />}
      {showHiring && (
        <TwoColumSection content={hiringData} contentRight />
      )}

      <Footer />
    </div>
  )
}
