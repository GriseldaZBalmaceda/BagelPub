"use client"

import { getHero } from "./api/getHeader"
import { Hero } from "./components/Hero"
import { AboutSection } from "./components/About-Section"
// import { getAboutSection } from "./api/getAboutSection"
import { CarrouselAnnouncement } from "./components/CarouselAnnouncement"

export default async function Home() {
  // const hero = await getHero()
  // const aboutSection = await getAboutSection()
  return (
    <div className="h-full items-center justify-items-center overflow-hidden">
      <Hero heroData={undefined} />
      <AboutSection aboutSectionData={undefined} />
      <CarrouselAnnouncement />
    </div>
  )
}
