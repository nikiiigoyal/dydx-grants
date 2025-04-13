function FundedGrants() {
  return (
    <>
      <div className="w-11/12 md:w-4/5 lg:w-2/5 mx-auto flex items-center m-10 flex-col font-['Circular',_sans-serif]">
        <div className="flex items-center">
          <img
            src="Down_arrow.png"
            alt="down-arrow"
            className="flex items-center mx-auto mb-4"
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4 md:mb-6 flex ml-0 md:ml-5 items-center">
            Projects built with grants
          </h1>
        </div>
        <div>
          <p className="text-[#C8C7D8] my-2 md:my-4 p-2 md:p-4 text-sm md:text-base lg:text-lg text-center mt-2 md:mt-4 lg:mt-6 mb-4 md:mb-6 lg:mb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nulla risus, consectetur ut bibendum non, gravida non.
          </p>
        </div>
        <div className="flex items-center">
          <button className="text-[#6966FF] text-sm md:text-base flex items-center">
            View all funded projects{" "}
            <img src="/rightBlueArrow.svg" className="ml-2 md:ml-3 mt-1" />
          </button>
        </div>
      </div>
    </>
  );
}
export default FundedGrants;
