import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

function TabsFilteringBlogData() {
  const initialData = [
    {
      id: 1,
      title: "Round 9 of approvals",
      status: "funding",
      date: "January 1, 2022",
      image: "/images/round9.png",
    },
    {
      id: 2,
      title: "Round 8 of approvals",
      status: "funding",
      date: "January 1, 2022",
      image: "/images/round8.png",
    },
    {
      id: 3,
      title: "Round 7 of approvals",
      status: "funding",
      date: "January 1, 2022",
      image: "/images/round7.png",
    },
    {
      id: 4,
      title: "Round 6 of approvals",
      status: "funding",
      date: "January 1, 2022",
      image: "/images/round6.png",
    },
    {
      id: 5,
      title: "Round 5 of approvals",
      status: "funding",
      date: "January 1, 2022",
      image: "/images/round5.png",
    },
    {
      id: 6,
      title: "Round 6 of approvals",
      status: "funding",
      date: "January 1, 2022",
      image: "/images/round6.png",
    },
    {
      id: 7,
      title: "Round 5 of approvals",
      status: "funding",
      date: "January 1, 2022",
      image: "/images/round5.png",
    },
    {
      id: 8,
      title: "Round 4 of approvals",
      status: "funding",
      date: "January 1, 2022",
      image: "/images/round4.png",
    },
  ];

  const [activeTab, setActiveTab] = useState("latest");

  // Filter data based on active tab
  const getFilteredData = () => {
    if (activeTab === "latest") return initialData;
    return initialData.filter((item) => item.status === activeTab);
  };

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-0">
      <Tabs
        defaultValue="latest"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
          <TabsList className="bg-transparent flex flex-wrap justify-center gap-1 sm:gap-2 lg:gap-6">
            <TabsTrigger
              value="latest"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none px-2 py-1 sm:px-3 sm:py-2 lg:p-3 data-[state=active]:text-white text-xs sm:text-sm lg:text-base"
            >
              Latest
            </TabsTrigger>
            <TabsTrigger
              value="funding"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none px-2 py-1 sm:px-3 sm:py-2 lg:p-3 data-[state=active]:text-white text-xs sm:text-sm lg:text-base"
            >
              Funding round
            </TabsTrigger>
            <TabsTrigger
              value="spotlight"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none px-2 py-1 sm:px-3 sm:py-2 lg:p-3 data-[state=active]:text-white text-xs sm:text-sm lg:text-base"
            >
              Spotlight
            </TabsTrigger>
            <TabsTrigger
              value="news"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none px-2 py-1 sm:px-3 sm:py-2 lg:p-3 data-[state=active]:text-white text-xs sm:text-sm lg:text-base"
            >
              News & Updates
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {getFilteredData().map((item) => (
              <div key={item.id} className="flex flex-col">
                {/* Card Header with Background Image */}
                <div className="relative rounded-t-lg overflow-hidden border-2 border-[#6966FF] h-32 sm:h-40 lg:h-48">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  {/* Dark overlay for better text visibility */}
                  <div className="absolute inset-0 bg-[#252538] bg-opacity-75"></div>

                  {/* Content in the center */}
                  <div className="absolute inset-0 p-3 sm:p-4 lg:p-8 flex flex-col items-center justify-center text-center z-10">
                    <div className="text-[#FFCC00] text-xs mb-1 sm:mb-2">
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </div>

                    {/* Blue oval outline - responsive sizing */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 border border-[#6966FF] rounded-full opacity-80"></div>

                    {/* Bottom-right corner accent - responsive sizing */}
                    <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[#6966FF] rounded-tl-lg z-10"></div>
                  </div>
                </div>

                {/* Card Info Section - Bottom part */}
                <div className="bg-[#2D2D42] rounded-b-lg p-3 sm:p-4 lg:p-4">
                  <div className="text-[#FFCC00] text-xs mb-1">
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </div>
                  <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <div className="text-[#C8C7D8] text-xs font-mono">
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TabsFilteringBlogData;
