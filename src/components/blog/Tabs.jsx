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
            {getFilteredData().map((item) => (
              <div key={item.id} className="flex flex-col">
                {/* Card Preview/Image Section with Blue Border - This is the image part */}
                <div className="relative rounded-lg overflow-hidden border-2 border-[#6966FF] mb-2 h-64 bg-[#252538]">
                  {/* Use an actual image element here */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover absolute"
                  />

                  {/* Overlay content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-center z-10">
                    <div className="text-[#FFCC00] text-xs mb-2">
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </div>
                    <h3 className="text-white text-2xl font-semibold">
                      {item.title.split(" of ")[0]}
                      <br />
                      of {item.title.split(" of ")[1]}
                    </h3>

                    {/* Blue oval outline */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-24 border border-[#6966FF] rounded-full opacity-50"></div>
                  </div>

                  {/* Bottom-right corner accent */}
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#6966FF] rounded-tl-lg z-10"></div>
                </div>

                {/* Card Info Section - This is the bottom part */}
                <div className="bg-[#2D2D42] rounded-lg p-4">
                  <div className="text-[#FFCC00] text-xs mb-1">
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-3">
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
