"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { wixMediaToUrl } from "@/helperFunctions/getWixImage"
import { Pagination, Autoplay } from "swiper/modules"
import type { MainHeroItem } from "@/schemas/wix/mainHero"

export const Hero = ({ heroData }: { heroData: MainHeroItem }) => {
  const { heroImages = [], cta1, cta2, heroText } = heroData
  const count = heroImages.length
  const useLoop = count >= 3
  const useRewind = count === 2

  return (
    <div className="relative w-full m-0 p-0 min-h-[min(80vh,800px)]">
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-7xl">
          <div className="text-center">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#e4d1a7] font-bold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              {heroText}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-4 md:gap-6 mt-6 md:mt-8">
            <div className=" min-h-[65px] flex items-center bg-[#e4d1a7] text-black px-6 py-3 md:px-8 md:py-4 rounded font-semibold text-sm md:text-base lg:text-lg hover:bg-[#d4c197] transition-colors cursor-pointer pointer-events-auto shadow-lg">
              {cta1}
            </div>
            <div className="flex items-center min-h-[65px] text-center border-4 border-[#e4d1a7] text-[#e4d1a7] px-6 py-3 md:px-8 md:py-4 rounded font-semibold text-sm md:text-base lg:text-lg hover:bg-[#e4d1a7] hover:text-black transition-all cursor-pointer pointer-events-auto shadow-lg">
              {cta2}
            </div>
          </div>
        </div>
      </div>

      <Swiper
        className="mySwiper hero-swiper h-[min(80vh,800px)] w-full"
        spaceBetween={0}
        centeredSlides
        speed={700}
        observer
        observeParents
        observeSlideChildren
        autoplay={
          count > 1
            ? {
                delay: 4000,
                disableOnInteraction: false,
              }
            : false
        }
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        loop={useLoop}
        rewind={useRewind}
      >
        {heroImages.map((image, index) => {
          const url = wixMediaToUrl(image.src)
          return (
            <SwiperSlide
              key={image.src ?? index}
              className="!flex items-stretch justify-stretch"
            >
              <img
                className="h-full w-full object-cover brightness-[0.55]"
                src={url || ""}
                alt=""
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
