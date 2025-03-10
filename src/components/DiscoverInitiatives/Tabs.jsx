import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

const TabsFilteringData = () => {
  // Sample data with different status types
  const initialData = [
    {
      id: 1,
      title: "Funding Rate Page",
      status: "funded",
      fundingAmount: "$45,000-$85000",
      description:
        "Page that provides a live look at all funding rates with popular timeframes in annualized format",
    },
    {
      id: 2,
      title: "CLI Trading Tool",
      status: "funded",
      fundingAmount: "$25,000-$40000",
      description:
        "Self-hosted CLI tool leveraging the dYdX API to allow all functionalities from a terminal",
    },
    {
      id: 3,
      title: "New Language SDKs",
      status: "open",
      fundingAmount: "$25,000-$40000",
      description:
        "Replicate existing Python SDK to new programming languages with all the same features",
    },
    {
      id: 4,
      title: "Liquidation Alert Tool",
      status: "completed",
      fundingAmount: "$25,000-$40000",
      description:
        "Self-hosted tool that alerts the trader of upcoming liquidation prices across multiple messaging venues",
    },
    {
      id: 5,
      title: "Governance Dashboard",
      status: "funded",
      fundingAmount: "$15,000-$30000",
      description:
        "Governance page to promote  discussions, proposals, delegation and voting",
    },
    {
      id: 6,
      title: "Delegation Tool",
      status: "funded",
      fundingAmount: "$15,000-$30000",
      description:
        "Webpage to allow active participants to market their voting and enable direct delegation from DYDX holders",
    },
    {
      id: 7,
      title: "Discord bots",
      status: "open",
      fundingAmount: "$5,000-$10000",
      description:
        "Additional Discord bots that notify members of activity on dYdX and governance",
    },
    {
      id: 8,
      title: "Reward tracking & Simulator",
      status: "completed",
      fundingAmount: "$20,000-$30000",
      description:
        "Page or tool that allows traders to calculate future rewards and simulate earnings from activity",
    },
  ];
  const [activeTab, setActiveTab] = useState("all");

  // Filter data based on active tab
  const getFilteredData = () => {
    if (activeTab === "all") return initialData;
    return initialData.filter((item) => item.status === activeTab);
  };

  // Count items by status for badge display
  //   const counts = {
  //     all: initialData.length,
  //     open: initialData.filter((item) => item.status === "open").length,
  //     funded: initialData.filter((item) => item.status === "funded").length,
  //     completed: initialData.filter((item) => item.status === "completed").length,
  //   };
  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-6">
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="bg-transparent space-x-4 flex justify-around mb-6 items-center text-white text-[24px] mx-auto data-[state=active]:bg-[#393953] ">
            <TabsTrigger value="all" className="flex gap-2 items-center">
              All
            </TabsTrigger>
            <TabsTrigger value="open" className="flex gap-2 items-center">
              Open
            </TabsTrigger>
            <TabsTrigger value="funded" className="flex gap-2 items-center">
              Funded
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex gap-2 items-center">
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="bg-[#393953] rounded-lg mt-8 shadow-sm border border-[#3933953] mb-8">
              {/* <div className="grid grid-cols-12 bg-gray-100 p-4 rounded-t-lg font-medium">
                <div className="col-span-1">#</div>
                <div className="col-span-5">Project</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Amount</div>
                <div className="col-span-2">Due Date</div>
              </div> */}

              {getFilteredData().map((item) => (
                <div key={item.id} className="p-4 gap-5 border border-blue">
                  {/* <div className="text-gray-600">{item.id}</div> */}
                  <div className="text-[#FFFFFF] font-bold text-2xl  mb-4">
                    {item.title}
                  </div>
                  <div className="text-[#FFFFFF] text-sm font-medium mb-4">
                    {item.description}
                  </div>
                  <div className="flex flex-row justify-end">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === "open"
                          ? "bg-blue-100 text-blue-800"
                          : item.status === "funded"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </span>
                  </div>
                  <div className="font-['Space_Mono'] text-[#C8C7D8] tracking-[2px]">
                    Funding Amount:{item.fundingAmount}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
export default TabsFilteringData;
