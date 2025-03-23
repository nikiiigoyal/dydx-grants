/* eslint-disable react/prop-types */
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

// Simple external link icon without using Lucide
const ExternalLinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const TabsFilteringExpenseData = () => {
  // Sample expense data
  const initialData = [
    {
      id: 1,
      title: "Expense title",
      amount: "-5,198.37",
      currency: "USDC",
      type: "Software",
      description: "Monthly subscription for design tools",
      status: "pending",
    },
    {
      id: 2,
      title: "Office supplies",
      amount: "-245.65",
      currency: "USDC",
      type: "Office",
      description: "Printer paper and ink cartridges",
      status: "approved",
    },
    {
      id: 3,
      title: "Team lunch",
      amount: "-187.50",
      currency: "USDC",
      type: "Food & Beverage",
      description: "Monthly team lunch at Bistro",
      status: "pending",
    },
    {
      id: 4,
      title: "Conference tickets",
      amount: "-1,299.00",
      currency: "USDC",
      type: "Travel",
      description: "Tech conference registration fees",
      status: "approved",
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
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              Pending
            </TabsTrigger>
            <TabsTrigger
              value="approved"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none p-3 data-[state=active]:text-white"
            >
              Approved
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0 space-y-4">
          {getFilteredData().map((expense) => (
            <ExpenseCard key={expense.id} expense={expense} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
const ExpenseCard = ({ expense }) => {
  return (
    <div className="bg-[#2D2D42] rounded-2xl p-6 border border-[#393953] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#FFFFFF] font-bold text-xl">{expense.title}</h3>
        <div className="flex items-center">
          <span className="text-[#FFFFFF] font-mono mr-2">
            {expense.amount}
          </span>
          <ExternalLinkIcon />
        </div>
      </div>

      <div className="mb-3">
        {/* <p className="text-[#C8C7D8] text-sm mb-1">Type</p> */}
        <p className="text-[#FFFFFF] text-sm">
          {expense.type || "Not specified"}
        </p>
      </div>

      <div>
        {/* <p className="text-[#C8C7D8] text-sm mb-1">Description</p> */}
        <p className="text-[#FFFFFF] text-sm">
          {expense.description || "No description"}
        </p>
      </div>
    </div>
  );
};

export default TabsFilteringExpenseData;
