"use client"

export function wixMediaToUrl(wixImage: string): string | null {
  if (!wixImage || !wixImage.startsWith("wix:image://")) return null

  try {
    // Extract the part after 'v1/' and before '#' or '?' if present
    const match = wixImage.match(/^wix:image:\/\/v1\/([^#?]+)/)
    if (!match) return null

    const relativeUrl = match[1]
      .split("/")[0] // remove the trailing filename if present
      .trim()

    return `https://static.wixstatic.com/media/${relativeUrl}`
  } catch (err) {
    console.error("Failed to parse Wix image:", err)
    return null
  }
}
export const AboutSection = ({
  aboutSectionData,
}: {
  aboutSectionData: any
}) => {
  // Now you can destructure the hero data

  console.log(aboutSectionData, "about")
  const { subtitle, paragraph, aboutSectionImage } = aboutSectionData

  const image = wixMediaToUrl(aboutSectionImage)
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="md:w-1/2 flex flex-col text-center justify-center items-center p-5 ">
        <p className="text-6xl">About Us</p>
        <p className="text-2xl mb-3">{subtitle}</p>
        <p>{paragraph}</p>
        <button className="w-[100px] h-[30px] bg-[#2c4735] mt-3 text-[#e4d1a7] rounded-3 ">
          Hi
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={image || ""} alt="About Section Image" />
      </div>
    </div>
  )
}
