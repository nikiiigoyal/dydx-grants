import TabsFilteringData from "./Tabs";

function DiscoverInitiatives() {
  return (
    <>
      <div>
        <div>
          <h1>Discover Initiatives</h1>
          <p>
            The list below includes initial ideas that we think could make
            excellent Grants. This is a living list that will continue to update
            as ideas popup.
          </p>
        </div>
        <div>
          <TabsFilteringData />
        </div>
      </div>
    </>
  );
}
export default DiscoverInitiatives;
