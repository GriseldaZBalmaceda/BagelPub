// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { wixMediaToUrl } from "@/helperFunctions/getWixImage"
import { Pagination, Autoplay, Navigation } from "swiper/modules"

export const CarrouselAnnouncement = () => {
  // const { heroImages, cta1, cta2, heroText } = heroData || {}
  const { heroImages, cta1, cta2, heroText } = {
    cta2: "Order Now",
    heroImages: [
      {
        description: "",
        fileName: "Hero1.jpg",
        slug: "72a73c_6f2b2bf97dba447ca878d966a9f38ac6~mv2.jpg",
        alt: "",
        src: "wix:image://v1/72a73c_6f2b2bf97dba447ca878d966a9f38ac6~mv2.jpg/Hero1.jpg#originWidth=6720&originHeight=4480",
        title: "Hero1.jpg",
        type: "image",
        settings: [Object],
      },
      {
        description: "",
        fileName: "3Y1A5512.jpg",
        slug: "72a73c_0617f89da2394f95a7b2e3d5b054407c~mv2.jpg",
        alt: "",
        src: "wix:image://v1/72a73c_0617f89da2394f95a7b2e3d5b054407c~mv2.jpg/3Y1A5512.jpg#originWidth=6720&originHeight=4480",
        title: "3Y1A5512.jpg",
        type: "image",
        settings: [Object],
      },
      {
        description: "",
        fileName: "3Y1A5460.jpg",
        slug: "72a73c_0fa4bf0b066e4f80892f028f08a823eb~mv2.jpg",
        alt: "",
        src: "wix:image://v1/72a73c_0fa4bf0b066e4f80892f028f08a823eb~mv2.jpg/3Y1A5460.jpg#originWidth=6398&originHeight=4266",
        title: "3Y1A5460.jpg",
        type: "image",
        settings: [Object],
      },
      {
        description: "",
        fileName: "3Y1A5536.jpg",
        slug: "72a73c_f83f74043f494c6f8351c8407e7f5252~mv2.jpg",
        alt: "",
        src: "wix:image://v1/72a73c_f83f74043f494c6f8351c8407e7f5252~mv2.jpg/3Y1A5536.jpg#originWidth=6720&originHeight=4480",
        title: "3Y1A5536.jpg",
        type: "image",
        settings: [Object],
      },
    ],
    cta1: "View Menu",

    heroText: "Hand-rolled. Kettle-boiled. Baked daily.",
  }
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      loop={true}
      className="mySwiper"
    >
      {heroImages?.map((image: any, index: number) => {
        const url = wixMediaToUrl(image.src)
        console.log(url)
        return (
          <>
            <div className="relative h-full">
              <SwiperSlide className="max-h-[600px]" key={index}>
                <div className="absolute inset-0 z-12 flex items-center justify-center pointer-events-none">
                  <div className="bg-[#e4d1a7] w-1/2 h-3/4">hi</div>
                </div>
                <img
                  className="dark"
                  src={url || ""}
                  alt={`Hero ${index + 1}`}
                ></img>
              </SwiperSlide>
            </div>
          </>
        )
      })}
    </Swiper>
  )
}
