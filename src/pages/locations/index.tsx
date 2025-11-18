import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon } from "lucide-react";

const Locations = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <img
          className="cover max-h-[800px] w-full dark"
          src="https://static.wixstatic.com/media/72a73c_0fa4bf0b066e4f80892f028f08a823eb~mv2.jpg"
        />
        <div className="absolute flex inset-0 z-10 items-center justify-center pointer-events-none">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-7xl">
            <div className="text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#e4d1a7] font-bold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Locations
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 md:gap-6 mt-6 md:mt-8">
              <div className="text-center bg-[#e4d1a7] text-black px-6 py-3 md:px-8 md:py-4 rounded font-semibold text-sm md:text-base lg:text-lg hover:bg-[#d4c197] transition-colors cursor-pointer pointer-events-auto shadow-lg">
                Brooklyn
              </div>
              <div className="text-center border-4 border-[#e4d1a7] text-[#e4d1a7] px-6 py-3 md:px-8 md:py-4 rounded font-semibold text-sm md:text-base lg:text-lg hover:bg-[#e4d1a7] hover:text-black transition-all cursor-pointer pointer-events-auto shadow-lg">
                Manhattan
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex">
        <Accordion
          type="single"
          collapsible
          className="w-full  h-full flex flex-col"
          defaultValue="item-1"
          orientation="horizontal">
          <AccordionItem className="relative h-full" value="item-1">
            <AccordionTrigger className="h-full p-0 [&_svg]:absolute [&_svg]:left-1/2 [&_svg]:-translate-x-1/2 [&_svg]:bottom-[10%] [&_.lucide-chevron-down]:h-15 [&_.lucide-chevron-down]:w-15 [&_svg]:animate-bounce [&_svg]:text-[#e4d1a7] cursor-pointer">
              <>
                <img
                  className="h-full w-full dark max-h-[600px] object-cover"
                  src="https://static.wixstatic.com/media/72a73c_0fa4bf0b066e4f80892f028f08a823eb~mv2.jpg"
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                  <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-7xl">
                    <div className="text-center">
                      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#e4d1a7] font-bold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                        Park Slope
                      </p>
                    </div>
                  </div>
                </div>
              </>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              HIIIIIIIIIII
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="relative h-full" value="item-2">
            <AccordionTrigger className="h-full p-0 [&_svg]:absolute [&_svg]:left-1/2 [&_svg]:-translate-x-1/2 [&_svg]:bottom-[10%] [&_.lucide-chevron-down]:h-15 [&_.lucide-chevron-down]:w-15 [&_svg]:animate-bounce [&_svg]:text-[#e4d1a7] cursor-pointer">
              <>
                <img
                  className="h-full w-full dark max-h-[600px] object-cover"
                  src="https://static.wixstatic.com/media/72a73c_0fa4bf0b066e4f80892f028f08a823eb~mv2.jpg"
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                  <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-7xl">
                    <div className="text-center">
                      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#e4d1a7] font-bold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                        Prospect Heights
                      </p>
                    </div>
                  </div>
                </div>
              </>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              Prospect Heights
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Locations;
