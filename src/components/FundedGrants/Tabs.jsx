import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { Switch } from "@/components/ui/switch"; // Import the Switch component

const TabsFilteringFundingData = () => {
  // Sample data with different status types, avatars, and completion status
  const initialData = [
    {
      id: 1,
      title: "Hedgie banner",
      status: "technical",
      fundingAmount: "$5,000-$8,000",
      description:
        "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.",
      completed: true, // Added completion status
      avatars: [
        {
          name: "John Doe",
          src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&auto=format",
        },
        {
          name: "Jane Smith",
          src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format",
        },
      ],
    },
    {
      id: 2,
      title: "Hedgie educational content",
      status: "analytics",
      fundingAmount: "$5,000-$6,000",
      description:
        "They are mathematically consistent in the sense that no one rule would ever violate another.",
      completed: false,
      avatars: [
        {
          name: "Alex Lee",
          src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&h=80&fit=crop&auto=format",
        },
      ],
    },
    {
      id: 3,
      title: "Hedgie educational content",
      status: "analytics",
      fundingAmount: "$5,000-$6,000",
      description:
        "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then ...",
      completed: true,
      avatars: [
        {
          name: "Maria Garcia",
          src: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=80&h=80&fit=crop&auto=format",
        },
        {
          name: "Robert Chen",
          src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop&auto=format",
        },
        {
          name: "Sam Wilson",
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
        },
      ],
    },
    {
      id: 4,
      title: "Japanese content website",
      status: "governance",
      fundingAmount: "$5,000-$6,000",
      description:
        "Historically, the electron, for example, was thought to behave like a particle, and then it was found that in many respects it behaved like a ...",
      completed: false,
      avatars: [
        {
          name: "Yuki Tanaka",
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
        },
      ],
    },
    {
      id: 5,
      title: "DGP referral program",
      status: "growth",
      fundingAmount: "$5,000-$6,000",
      description:
        "They finally obtained a consistent description of the behavior of matter on a small scale.",
      completed: true,
      avatars: [
        {
          name: "Emily Johnson",
          src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&h=80&fit=crop&auto=format",
        },
        {
          name: "Michael Brown",
          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format",
        },
      ],
    },
    {
      id: 6,
      title: "ETHGlobal event sponsorship",
      status: "thirdParty",
      fundingAmount: "$5,000-$6,000",
      description:
        "Because atomic behavior is so unlike ordinary experience, it is very difficult to get used to, and it appears peculiar and mysterious to everyon ...",
      completed: false,
      avatars: [
        {
          name: "CT",
          src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=80&h=80&fit=crop&auto=format",
        },
      ],
    },
    {
      id: 7,
      title: "Rust SDK",
      status: "growth",
      fundingAmount: "$5,000-$6,000",
      description:
        "At the end of the 19th century, physics appeared to be at an apex. Several people are reported to have said something like this",
      completed: true,
      avatars: [
        {
          name: "CN",
          src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop&auto=format",
        },
        {
          name: "AN",
          src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=80&h=80&fit=crop&auto=format",
        },
      ],
    },
    {
      id: 8,
      title: "Hack for Inclusion Sponsorship",
      status: "technical",
      fundingAmount: "$5,000-$6,000",
      description:
        "Later, however (in the beginning of the twentieth century), it was found that light did indeed sometimes behave like a particle. ",
      completed: false,
      avatars: [
        {
          name: "CT",
          src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=80&h=80&fit=crop&auto=format",
        },
        {
          name: "PD",
          src: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=80&h=80&fit=crop&auto=format",
        },
      ],
    },
    {
      id: 9,
      title: "Gitcoin Grants Round 13 sponsorship",
      status: "thirdParty",
      fundingAmount: "$5,000-$6,000",
      description:
        "So we have to learn about them in a sort of abstract or imaginative fashion and not by connection with our direct experience.",
      completed: true,
      avatars: [
        {
          name: "CT",
          src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=80&h=80&fit=crop&auto=format",
        },
        {
          name: "CN",
          src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop&auto=format",
        },
        {
          name: "AN",
          src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=80&h=80&fit=crop&auto=format",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("all");
  const [showOnlyCompleted, setShowOnlyCompleted] = useState(false);

  // Filter data based on active tab and completion status
  const getFilteredData = () => {
    let filtered = initialData;

    // First filter by tab
    if (activeTab !== "all") {
      filtered = filtered.filter((item) => item.status === activeTab);
    }

    // Then filter by completion status if toggle is on
    if (showOnlyCompleted) {
      filtered = filtered.filter((item) => item.completed);
    }

    return filtered;
  };

  const getStatusCategory = (status) => {
    const categories = {
      technical: "Technical",
      analytics: "Analytics",
      governance: "Governance",
      growth: "Growth",
      thirdParty: "Third Party",
    };
    return categories[status] || status;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
      <Tabs
        defaultValue="all"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        {/* Mobile-first responsive tabs */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <TabsList className="bg-transparent flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 max-w-full">
            <TabsTrigger
              value="all"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none px-2 py-1 sm:px-3 sm:py-2 md:p-3 data-[state=active]:text-white text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="technical"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none px-2 py-1 sm:px-3 sm:py-2 md:p-3 data-[state=active]:text-white text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              <span className="hidden sm:inline">
                Technical/Tool Development
              </span>
              <span className="sm:hidden">Technical</span>
            </TabsTrigger>
            <TabsTrigger
              value="governance"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none px-2 py-1 sm:px-3 sm:py-2 md:p-3 data-[state=active]:text-white text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              Governance
            </TabsTrigger>
            <TabsTrigger
              value="growth"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none px-2 py-1 sm:px-3 sm:py-2 md:p-3 data-[state=active]:text-white text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              <span className="hidden sm:inline">Growth/Marketing</span>
              <span className="sm:hidden">Growth</span>
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none px-2 py-1 sm:px-3 sm:py-2 md:p-3 data-[state=active]:text-white text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="thirdParty"
              className="text-white bg-transparent data-[state=active]:bg-[#393953] data-[state=active]:shadow-none px-2 py-1 sm:px-3 sm:py-2 md:p-3 data-[state=active]:text-white text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              <span className="hidden sm:inline">Third Party Provider</span>
              <span className="sm:hidden">Third Party</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Toggle Bar - Mobile Responsive */}
        <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-6">
          <div className="flex items-center space-x-2">
            <Switch
              id="completed-toggle"
              checked={showOnlyCompleted}
              onCheckedChange={setShowOnlyCompleted}
            />
            <label
              htmlFor="completed-toggle"
              className="text-white cursor-pointer text-sm sm:text-base"
            >
              Show only completed
            </label>
          </div>
        </div>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {getFilteredData().map((item) => (
              <div
                key={item.id}
                className="bg-[#2D2D42] rounded-lg overflow-hidden h-full flex flex-col"
              >
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start">
                    <div className="text-[#9B9BAD] text-xs sm:text-sm mb-2">
                      {getStatusCategory(item.status)}
                    </div>
                    {/* Displaying a badge if completed */}
                    {/* {item.completed && (
                      <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                        Completed
                      </div>
                    )} */}
                  </div>
                  <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <div className="text-[#9B9BAD] text-xs sm:text-sm mb-2">
                    Funding amount: {item.fundingAmount}
                  </div>
                  <p className="text-white text-sm sm:text-base mt-3 sm:mt-4 mb-6 sm:mb-8 flex-grow leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="p-3 sm:p-4 mt-auto">
                  <div className="flex">
                    {item.avatars.slice(0, 3).map((avatar, index) => (
                      <Avatar
                        key={index}
                        className={`border-2 border-[#2D2D42] h-8 w-8 sm:h-10 sm:w-10 ${
                          index > 0 ? "-ml-1 sm:-ml-2" : ""
                        }`}
                      >
                        <AvatarImage src={avatar.src} alt={avatar.name} />
                        <AvatarFallback className="bg-[#4A4A65] text-white text-xs">
                          {avatar.name.split(" ").length > 1
                            ? avatar.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                            : avatar.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    {item.avatars.length > 3 && (
                      <div className="bg-[#6366F1] h-8 w-8 sm:h-10 sm:w-10 rounded-full -ml-1 sm:-ml-2 flex items-center justify-center text-white text-xs sm:text-sm">
                        +{item.avatars.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsFilteringFundingData;
