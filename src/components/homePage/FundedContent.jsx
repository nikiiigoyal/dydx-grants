function FundedGrants() {
  return (
    <>
      <div className="w-[50%] mx-auto flex items-center m-12 flex-col font-['Circular',_sans-serif]">
        <div className="flex items-center">
          <img
            src="Down_arrow.png"
            alt="down-arrow"
            className="flex items-center mx-auto mb-[16px]"
          ></img>
        </div>
        <div>
          <h1 className="text-[#FFFFFF] text-4xl font-bold">
            Projects built with grants
          </h1>
        </div>
        <div>
          <p className="text-[#C8C7D8] text-sm text-center my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nulla risus, consectetur ut bibendum non, gravida non libero.
          </p>
        </div>
        <div className="flex items-center">
          <button className="text-[#6966FF] text-[16px] flex  items-center">
            View all funded projects{" "}
            <img src="/rightBlueArrow.svg" className="ml-3 mt-1"></img>
          </button>
        </div>
      </div>
    </>
  );
}
export default FundedGrants;
