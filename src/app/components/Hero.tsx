"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { wixMediaToUrl } from "../helperFunctions/getWixImage"
import { Pagination, Autoplay, Navigation } from "swiper/modules"

export const Hero = ({ heroData }: { heroData: any }) => {
  console.log(heroData)

  // Now you can destructure the hero data

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
    <>
      <div className="absolute z-10 w-full m-2">
        <div className="hidden md:flex justify-around">
          <div>
            <h4>Menu</h4>
          </div>
          <div>
            <h4>About Us</h4>
          </div>
          <div>
            <h4>Catering</h4>
          </div>
          <div>
            <h4>Logo</h4>
          </div>
          <div>
            <h4>Locations</h4>
          </div>
          <div>
            <h4>Hiring</h4>
          </div>
          <div>
            <h4>Order Now</h4>
          </div>
        </div>
      </div>
      <div className="absolute z-10  m-2 top-[20%]  text-center pl-[2rem] pr-[2rem] md:pl-[16rem] md:pr-[16rem]">
        <div className="">
          <p className="text-5xl md:text-8xl text-[#e4d1a7]">{heroText}</p>
        </div>
        <div className="flex flex-row flex-row center justify-center justify-around w-full gap-2 mt-8 h-40px ">
          <div className="w-full md:w-1/8 max-h-30px text-center  bg-[#e4d1a7] p-5 rounded">
            {cta1}
          </div>
          <div className="w-full md:w-1/8 text-center border-4 text-[#e4d1a7] p-5 ">
            {" "}
            {cta2}
          </div>
        </div>
      </div>
      <div></div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
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
          return (
            <>
              <SwiperSlide key={index}>
                <img src={url || ""} alt={`Hero ${index + 1}`}></img>
              </SwiperSlide>
            </>
          )
        })}
      </Swiper>
    </>
  )
}
