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
];

export default function Slider() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 mb-9">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full font-['Circular',_sans-serif] rounded-[20px]"
        >
          <CarouselContent>
            {projectData.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-4 basis-full xs:basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div
                  className={`bg-[#292841] text-white rounded-lg p-6 h-full ${
                    !project.image ? "" : ""
                  }`}
                >
                  <div className="text-[#A59EBA] text-sm mb-5 font-['Space_Mono']">
                    {project.type}
                  </div>
                  <div className="text-[#FFFFFF] text-[24px] font-bold mb-5">
                    {project.title}
                  </div>
                  <div className="text-[#A59EBA] text-sm mb-3 font-['Space_Mono']">
                    Funding Amount: {project.fundingAmount}
                  </div>
                  <p className="text-[#FFFFFF] text-sm mb-8">
                    {project.description}
                  </p>

                  <div className="flex mt-5">
                    {project.contributors.map((contributor) => (
                      <Avatar key={contributor.id}>
                        <AvatarImage src={contributor.image}></AvatarImage>
                        <AvatarFallback>{contributor.fallback}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
