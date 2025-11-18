"use client";

import { wixMediaToUrl } from "@/helperFunctions/getWixImage";

export const TwoColumSection = ({
  content,
  contentRight = false,
}: {
  content: any;
  contentRight?: boolean;
}) => {
  // Now you can destructure the hero data

  const { title, subtitle, paragraph, aboutSectionImage, buttonText } = content;

  const image = wixMediaToUrl(aboutSectionImage);
  const styleToAdd = `flex md:flex-row w-full h-full ${
    contentRight ? "felx-col-reverse" : "flex-col"
  }`;
  console.log("style", styleToAdd);
  return (
    <div
      className={`flex flex-col lg:flex-row md:flex-row w-full h-full ${
        contentRight ? "felx-col-reverse" : ""
      }`}>
      <div className="lg:w-1/2 md:w-1/2 flex flex-col text-center justify-center items-center p-[50px]">
        <p className=" text-4xl lg:text-6xl">{title}</p>
        <p className="text-2xl mb-3">{subtitle}</p>
        <p>{paragraph}</p>
        <button className="min-w-[150px] bg-[#2c4735] mt-3 text-[#e4d1a7] rounded-3 py-3 px-5 rounded">
          <p>{buttonText}</p>
        </button>
      </div>
      <div className="lg:w-1/2 md:w-1/2">
        <img className="h-full" src={image || ""} alt="About Section Image" />
      </div>
    </div>
  );
};
