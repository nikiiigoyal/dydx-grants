import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

function TabsFilteringBlogData() {
  const initialData = [
    {
      id: 1,
      title: "Round 9 of approvals",
      status: "funding",
      Date: "january 1, 2022",
      //   image:
      //   link:
    },
  ];

  const [activeTab, setActiveTab] = useState("latest");

  // Filter data based on active tab
  const getFilteredData = () => {
    if (activeTab === "latest") return initialData;
    return initialData.filter((item) => item.status === activeTab);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Tabs
        defaultValue="all"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="flex justify-center mb-8">
          <TabsList className="bg-transparent flex space-x-6">
            <TabsTrigger
              value="all"
              className="text-white bg-transparent  data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              Latest
            </TabsTrigger>
            <TabsTrigger
              value="open"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              Funding round
            </TabsTrigger>
            <TabsTrigger
              value="funded"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              Spotlight
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              News $ updates
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0 space-y-4">
          {getFilteredData().map((item) => (
            <div
              key={item.id}
              className="bg-[#2D2D42] rounded-lg p-6 border border-[#393953]"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-[#FFFFFF] font-bold text-2xl">
                  {item.title}
                </h3>
                <span
                  className={`px-3 py-3 rounded-full text-sm font-medium ${
                    item.status === "open"
                      ? "bg-[#6966FF] text-white"
                      : item.status === "funded"
                      ? "bg-[#1C1C28] text-white"
                      : "bg-[#16B57F] text-white"
                  }`}
                >
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
              </div>

              <p className="text-[#FFFFFF] text-sm font-normal mb-4">
                {item.description}
              </p>

              <div className="font-['Space_Mono'] text-[#C8C7D8] tracking-[1px] text-sm">
                Funding amount: {item.fundingAmount}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default TabsFilteringBlogData;
