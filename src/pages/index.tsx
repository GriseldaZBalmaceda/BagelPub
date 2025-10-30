import { Hero } from "@/components/Hero"
import { TwoColumSection } from "@/components/TwoColumSection"
import { CarrouselAnnouncement } from "@/components/CarouselAnnouncement"
import { LocationColumns } from "@/components/LocationColumns"
import { Footer } from "@/components/Footer"

export default function Home() {
  const aboutSectionDate = {
    title: "About Us",
    subtitle: "Food, service & a vibe you'll look forward to every time.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaeiusmod tempor incididunt ut labore et.",
    aboutSectionImage:
      "wix:image://v1/72a73c_0fa4bf0b066e4f80892f028f08a823eb~mv2.jpg/3Y1A5460.jpg#originWidth=6398&originHeight=4266",
    buttonText: "Learn More",
    link: "",
  }
  const weAreHiring = {
    title: "We Are Hiring",
    subtitle: "Want to join us behind the counter?",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaeiusmod tempor incididunt ut labore et.",
    aboutSectionImage:
      "wix:image://v1/72a73c_0fa4bf0b066e4f80892f028f08a823eb~mv2.jpg/3Y1A5460.jpg#originWidth=6398&originHeight=4266",
    buttonText: "Apply Now",
    link: "",
  }

  return (
    <div className="h-full items-center justify-items-center overflow-hidden">
      <Hero heroData={undefined} />
      <TwoColumSection content={aboutSectionDate} />

      <CarrouselAnnouncement />
      <TwoColumSection content={weAreHiring} contentRight={true} />
      <LocationColumns content={weAreHiring} />
      <Footer />
    </div>
  )
}
