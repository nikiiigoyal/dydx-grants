import TabsFilteringFundingData from "./Tabs";

function FundedGrants() {
  return (
    <>
      <div>
        <h1 className="text-2xl text-white text-center">Funded Grants</h1>
      </div>
      <div>
        <TabsFilteringFundingData />
      </div>
    </>
  );
}
export default FundedGrants;
