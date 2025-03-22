import TabsFilteringProgramData from "./Tabs";

function ProgramExpenses() {
  return (
    <>
      <div>
        <h1 className="text-2xl">Program Expenses</h1>
      </div>
      <div>
        <TabsFilteringProgramData />
      </div>
    </>
  );
}
export default ProgramExpenses;
