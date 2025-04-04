import Form from "./Form";

function ApplyForGrants() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-[#FFFFFF] text-center mb-5">
          Apply for a grant
        </h1>
        <p className="text-sm text-[#C8C7D8] text-center">
          Please complete the application below for Grant consideration!
        </p>
      </div>
      <div className=" mt-5">
        {/* <h1 className="text-[#FFFFFF] text-2xl font-semibold">
          Grant Application
        </h1> */}
        <Form />
      </div>
    </>
  );
}
export default ApplyForGrants;
