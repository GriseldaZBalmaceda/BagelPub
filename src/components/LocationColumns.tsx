"use client";

import { wixMediaToUrl } from "@/helperFunctions/getWixImage";

export const LocationColumns = ({ content }: { content: any }) => {
  // Now you can destructure the hero data
  const { heroImages, section1, section2 } = {
    section1: {
      title: "Manhattan",
      paragraph: "Visit the only pub you should be at before 5pm",
      buttonText: "View Locations",
    },
    section2: {
      title: "Brooklyn",
      paragraph: "Visit the only pub you should be at before 5pm",
      buttonText: "View Locations",
    },
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
    ],
  };
  //   const { title, subtitle, paragraph, aboutSectionImage, buttonText } = content

  const image1 = wixMediaToUrl(heroImages[0].src);
  const image2 = wixMediaToUrl(heroImages[1].src);
  return (
    <div className={`flex flex-col md:flex-row w-full h-full`}>
      <div className="md:w-1/2">
        <div className="relative">
          <div className="absolute inset-0 z-12 flex items-center justify-center pointer-events-none text-center">
            <div>
              <h1 className="specialFont text-4xl lg:text-6xl">
                {section1.title}
              </h1>
              <p>{section1.paragraph}</p>
              <button className="min-w-[150px] bg-[#2c4735] mt-3 text-[#e4d1a7] rounded-3 py-3 px-5 rounded">
                <p>{section1.buttonText}</p>
              </button>
            </div>
          </div>
          <img className="dark" src={image1 || ""} alt="About Section Image" />
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="relative">
          <div className="absolute inset-0 z-12 flex items-center justify-center pointer-events-none text-center">
            <div>
              <h1 className="specialFont text-4xl lg:text-6xl">
                {section2.title}
              </h1>
              <p className="text-color-[bagelCream]">{section2.paragraph}</p>
              <button className="min-w-[150px] bg-[#2c4735] mt-3 text-[#e4d1a7] rounded-3 py-3 px-5 rounded">
                <p>{section2.buttonText}</p>
              </button>
            </div>
          </div>
          <img className="dark" src={image1 || ""} alt="About Section Image" />
        </div>
      </div>
    </div>
  );
};
