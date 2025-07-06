import Create from "../homePage/Create";
import TabsFilteringData from "./Tabs";

function DiscoverInitiatives() {
  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 lg:mb-6 lg:text-center">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
            Discover Initiatives
          </h1>
          <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
            The list below includes initial ideas that we think could make
            excellent Grants. This is a living list that will continue to update
            as ideas popup.
          </p>
        </div>

        {/* Tabs Section */}
        <div className="mb-8 sm:mb-10 lg:mb-16">
          <TabsFilteringData />
        </div>

        {/* Create Section */}
        <div className="mt-8 sm:mt-10 lg:mt-16">
          <Create />
        </div>
      </div>
    </div>
  );
}

export default DiscoverInitiatives;
