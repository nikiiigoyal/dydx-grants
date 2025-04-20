import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

const TabsFilteringData = () => {
  // Sample data with different status types
  const initialData = [
    {
      id: 1,
      title: "Funding Rate Page",
      status: "funded",
      fundingAmount: "$45,000-$85,000",
      description:
        "Page that provides a live look at all funding rates with popular timeframes in annualized format",
    },
    {
      id: 2,
      title: "CLI Trading Tool",
      status: "funded",
      fundingAmount: "$25,000-$40,000",
      description:
        "Self-hosted CLI tool leveraging the dYdX API to allow all functionalities from a terminal",
    },
    {
      id: 3,
      title: "New Language SDKs",
      status: "open",
      fundingAmount: "$25,000-$40,000",
      description:
        "Replicate existing Python SDK to new programming languages with all the same features",
    },
    {
      id: 4,
      title: "Liquidation Alert Tool",
      status: "completed",
      fundingAmount: "$25,000-$40,000",
      description:
        "Self-hosted tool that alerts the trader of upcoming liquidation prices across multiple messaging venues",
    },
    {
      id: 5,
      title: "Governance Dashboard",
      status: "funded",
      fundingAmount: "$15,000-$30,000",
      description:
        "Governance page to promote discussions, proposals, delegation and voting",
    },
    {
      id: 6,
      title: "Delegation Tool",
      status: "funded",
      fundingAmount: "$15,000-$30,000",
      description:
        "Webpage to allow active participants to market their voting and enable direct delegation from DYDX holders",
    },
    {
      id: 7,
      title: "Discord bots",
      status: "open",
      fundingAmount: "$5,000-$10,000",
      description:
        "Additional Discord bots that notify members of activity on dYdX and governance",
    },
    {
      id: 8,
      title: "Reward tracking & Simulator",
      status: "completed",
      fundingAmount: "$20,000-$30,000",
      description:
        "Page or tool that allows traders to calculate future rewards and simulate earnings from activity",
    },
    {
      id: 9,
      title: "Funding Rate Page",
      status: "funded",
      fundingAmount: "$45,000-$85,000",
      description:
        "Page that provides a live look at all funding rates with popular timeframes in annualized format",
    },
  ];
  const [activeTab, setActiveTab] = useState("all");

  // Filter data based on active tab
  const getFilteredData = () => {
    if (activeTab === "all") return initialData;
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
              All
            </TabsTrigger>
            <TabsTrigger
              value="open"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              Open
            </TabsTrigger>
            <TabsTrigger
              value="funded"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              Funded
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              Completed
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
};

export default TabsFilteringData;
