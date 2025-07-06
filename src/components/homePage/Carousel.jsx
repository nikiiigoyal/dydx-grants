import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample data array
const projectData = [
  {
    id: 1,
    type: "Crowdfund",
    title: "Funding rates page",
    fundingAmount: "$5,000 - $6,000",
    description:
      "Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.",
    contributors: [
      { id: 1, image: "/avatar1.png", fallback: "JD" },
      { id: 2, image: "/avatar2.png", fallback: "AM" },
    ],
    image: null, // No image for this card
  },
  {
    id: 2,
    type: "Edition",
    title: "Tradingview integration",
    fundingAmount: "$5,000 - $6,000",
    description:
      "The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources and test out different...",
    contributors: [
      { id: 3, image: "/avatar3.png", fallback: "TK" },
      { id: 4, image: "/avatar4.png", fallback: "SL" },
      { id: 5, image: "/avatar5.png", fallback: "RB" },
    ],
    image: null,
  },
  {
    id: 3,
    type: "Crowdfund",
    title: "Funding rates page",
    fundingAmount: "$5,000 - $6,000",
    description:
      "Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.",
    contributors: [
      { id: 1, image: "/avatar1.png", fallback: "JD" },
      { id: 2, image: "/avatar2.png", fallback: "AM" },
    ],
    image: null, // No image for this card
  },
  {
    id: 4,
    type: "Edition",
    title: "Tradingview integration",
    fundingAmount: "$5,000 - $6,000",
    description:
      "The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources and test out different...",
    contributors: [
      { id: 3, image: "/avatar3.png", fallback: "TK" },
      { id: 4, image: "/avatar4.png", fallback: "SL" },
      { id: 5, image: "/avatar5.png", fallback: "RB" },
    ],
    image: null,
  },
];

export default function Slider() {
  return (
    <div className="w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 mb-4 sm:mb-6 lg:mb-9">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full font-['Circular',_sans-serif] rounded-[20px]"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {projectData.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-2 sm:pl-4 basis-[90%] xs:basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="bg-[#292841] text-white rounded-lg p-3 sm:p-4 lg:p-6 h-full shadow-lg">
                  {/* Type Badge */}
                  <div className="text-[#A59EBA] text-xs sm:text-sm mb-3 sm:mb-4 lg:mb-5 font-['Space_Mono'] uppercase tracking-wider">
                    {project.type}
                  </div>

                  {/* Title */}
                  <div className="text-[#FFFFFF] text-lg sm:text-xl lg:text-[24px] font-bold mb-3 sm:mb-4 lg:mb-5 leading-tight">
                    {project.title}
                  </div>

                  {/* Funding Amount */}
                  <div className="text-[#A59EBA] text-xs sm:text-sm mb-2 sm:mb-3 font-['Space_Mono']">
                    Funding Amount: {project.fundingAmount}
                  </div>

                  {/* Description */}
                  <p className="text-[#FFFFFF] text-xs sm:text-sm mb-4 sm:mb-6 lg:mb-8 leading-relaxed line-clamp-4 sm:line-clamp-none">
                    {project.description}
                  </p>

                  {/* Contributors */}
                  <div className="flex mt-auto space-x-1 sm:space-x-2">
                    {project.contributors.map((contributor) => (
                      <Avatar
                        key={contributor.id}
                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-2 border-[#6966ff]"
                      >
                        <AvatarImage src={contributor.image} />
                        <AvatarFallback className="text-xs sm:text-sm bg-[#6966ff] text-white">
                          {contributor.fallback}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
          <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-6 bg-[#6966ff] hover:bg-[#5854d6] text-white border-0 shadow-lg" />
          <CarouselNext className="hidden sm:flex -right-4 lg:-right-6 bg-[#6966ff] hover:bg-[#5854d6] text-white border-0 shadow-lg" />
        </Carousel>

        {/* Mobile Dots Indicator */}
        <div className="flex justify-center mt-4 sm:hidden">
          <div className="flex space-x-2">
            {projectData.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-[#A59EBA] opacity-50"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
