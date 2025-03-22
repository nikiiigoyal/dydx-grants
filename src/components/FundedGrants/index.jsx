import TabsFilteringFundingData from "./Tabs";

function FundedGrants() {
  return (
    <>
      <div>
        <h1 className="text-2xl">Funded Grants</h1>
      </div>
      <div>
        <TabsFilteringFundingData />
      </div>
    </>
  );
}
export default FundedGrants;
