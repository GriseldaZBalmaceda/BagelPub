"use client"

import type { TwoColumnSectionItem } from "@/schemas/wix/aboutSection"
import { wixMediaToUrl } from "@/helperFunctions/getWixImage"

export const TwoColumSection = ({
  content,
  contentRight = false,
}: {
  content: TwoColumnSectionItem
  contentRight?: boolean
}) => {
  const title_fld = content.title_fld ?? ""
  const subtitle = content.subtitle ?? ""
  const description_fld = content.description_fld ?? ""
  const image_fld = content.image_fld ?? ""
  const ctaTitle = content.ctaTitle ?? ""
  const url = content.url

  const image = wixMediaToUrl(image_fld)

  const cta = (
    <span className="min-w-[150px] bg-[#2c4735] mt-3 text-[#e4d1a7] rounded-3 py-3 px-5 rounded inline-block">
      {ctaTitle}
    </span>
  )

  return (
    <div
      className={`flex flex-col lg:flex-row md:flex-row w-full h-full ${
        contentRight ? "felx-col-reverse" : ""
      }`}>
      <div className="lg:w-1/2 md:w-1/2 flex flex-col text-center justify-center items-center p-[50px]">
        <p className=" text-4xl lg:text-6xl">{title_fld}</p>
        <p className="text-2xl mb-3">{subtitle}</p>
        <div
          className="prose prose-neutral max-w-none [&_p]:mb-2"
          dangerouslySetInnerHTML={{ __html: description_fld }}
        />
        {url ? (
          <a href={url} className="mt-3 inline-block">
            {cta}
          </a>
        ) : (
          <button type="button" className="mt-3 bg-transparent border-0 p-0 cursor-pointer">
            {cta}
          </button>
        )}
      </div>
      <div className="lg:w-1/2 md:w-1/2">
        <img className="h-full" src={image || ""} alt="" />
      </div>
    </div>
  )
}
