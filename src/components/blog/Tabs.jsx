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

  // // Function to split the title for the card header
  // const splitTitle = (title) => {
  //   const parts = title.split(" of ");
  //   return {
  //     firstPart: parts[0],
  //     secondPart: parts.length > 1 ? `of ${parts[1]}` : "",
  //   };
  // };

  return (
    <div className="max-w-4xl mx-auto">
      <Tabs
        defaultValue="latest"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="flex justify-center mb-8">
          <TabsList className="bg-transparent flex space-x-6">
            <TabsTrigger
              value="latest"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              Latest
            </TabsTrigger>
            <TabsTrigger
              value="funding"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              Funding round
            </TabsTrigger>
            <TabsTrigger
              value="spotlight"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              Spotlight
            </TabsTrigger>
            <TabsTrigger
              value="news"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              News & Updates
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getFilteredData().map((item) => {
              // const { firstPart, secondPart } = splitTitle(item.title);

              return (
                <div key={item.id} className="flex flex-col">
                  {/* Card Header with Background Image */}
                  <div className="relative rounded-t-lg overflow-hidden border-2 border-[#6966FF] h-48">
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
                    <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center z-10">
                      <div className="text-[#FFCC00] text-xs mb-2">
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1)}
                      </div>
                      /*{" "}
                      <h3 className="text-white text-2xl font-semibold">
                        {firstPart}
                        <br />
                        {secondPart}
                      </h3>
                    </div>

                    {/* Blue oval outline */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-24 border border-[#6966FF] rounded-full opacity-80"></div>

                    {/* Bottom-right corner accent */}
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#6966FF] rounded-tl-lg z-10"></div>
                  </div>

                  {/* Card Info Section - Bottom part */}
                  <div className="bg-[#2D2D42] rounded-b-lg p-4">
                    <div className="text-[#FFCC00] text-xs mb-1">
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    <div className="text-[#C8C7D8] text-xs font-mono">
                      {item.date}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TabsFilteringBlogData;
