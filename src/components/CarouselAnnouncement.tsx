"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { wixMediaToUrl } from "@/helperFunctions/getWixImage"
import { Pagination, Autoplay } from "swiper/modules"
import type { ShowcaseItem } from "@/schemas/wix"

export const CarrouselAnnouncement = ({
  showcaseItems,
}: {
  showcaseItems: ShowcaseItem[]
}) => {
  const slides = showcaseItems.filter(
    (item) => item.image_fld || item.title_fld || item.subtitle || item.description_fld
  )
  if (slides.length === 0) return null

  return (
    <Swiper
      className="mySwiper h-[min(75vh,700px)] w-full"
      spaceBetween={0}
      centeredSlides
      autoplay={
        slides.length > 1
          ? {
              delay: 5000,
              disableOnInteraction: false,
            }
          : false
      }
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      loop={slides.length > 1}
    >
      {slides.map((item, index) => {
        const imageUrl = wixMediaToUrl(item.image_fld ?? "")
        const title = item.title_fld ?? ""
        const subtitle = item.subtitle ?? ""
        const cta = item.cta?.trim()
        const isExternal = item.externalLink === true
        const slideKey =
          typeof item._id === "string" && item._id.length > 0 ? item._id : index

        return (
          <SwiperSlide key={slideKey} className="relative">
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
              <div className="bg-[#e4d1a7] w-full max-w-[560px] rounded p-6 md:p-10 text-center">
                {title && <p className="text-4xl lg:text-6xl">{title}</p>}
                {subtitle && <p className="text-xl mb-3">{subtitle}</p>}
                {item.description_fld && (
                  <div
                    className="prose prose-neutral max-w-none [&_ul]:text-left [&_ul]:mx-auto [&_ul]:w-fit"
                    dangerouslySetInnerHTML={{ __html: item.description_fld }}
                  />
                )}
                {cta && (
                  <div className="mt-4">
                    <a
                      href={cta}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="min-w-[150px] inline-block bg-[#2c4735] text-[#e4d1a7] py-3 px-5 rounded"
                    >
                      View
                    </a>
                  </div>
                )}
              </div>
            </div>
            {imageUrl ? (
              <img className="h-full w-full object-cover brightness-[0.55]" src={imageUrl} alt="" />
            ) : (
              <div className="h-full w-full bg-[#2c4735]" />
            )}
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
