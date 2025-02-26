export default function Content() {
  return (
    <>
      <div>
        <div className="flex flex-col mx-auto items-center justify-between w-[50%]">
          <div className="flex">
            <h1 className="text-2xl font-semibold text-[#FFFFFF] mb-9 flex ml-5 items-end">
              What’s new?
              <img src="/side arrows.svg"></img>
            </h1>
            {/* <img src="/side arrows.svg"></img> */}
          </div>
          <div>
            <p className="text-[#C8C7D8] text-[18px] mb-5 text-center p-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nulla risus, consectetur ut bibendum non, gravida non libero.
            </p>
          </div>
          <div className="flex items-center">
            <button className="text-[#6966FF] text-[16px] flex  items-center mb-8">
              Read more on our blog
              <img src="/rightBlueArrow.svg" className="ml-3 mt-1"></img>
            </button>
          </div>
        </div>
        <div className="mb-9">
          <img src="/Frame.png" className="items-center mx-auto"></img>
        </div>
      </div>
    </>
  );
}
