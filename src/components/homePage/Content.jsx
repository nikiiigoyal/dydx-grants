export default function Content() {
  return (
    <>
      <div className="w-full px-4 sm:px-6">
        <div className="flex flex-col mx-auto items-center justify-between w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:1/2">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-semibold text-[#FFFFFF] mb-6 sm;mb-9 flex ml-5 items-center">
              What’s new?
              <img src="/side arrows.svg" alt="arrows" className="ml-2"></img>
            </h1>
            {/* <img src="/side arrows.svg"></img> */}
          </div>
          <div className="w-full">
            <p className="text-[#C8C7D8] p-2 text-base sm:text-lg text-center mt-4 sm:mt-6 mb-4 sm:mb-9 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nulla risus, consectetur ut bibendum non, gravida non libero.
            </p>
          </div>
          <div className="flex items-center whitespace-nowrap">
            <button className="text-[#6966FF] text-sm sm:text-base flex items-center mb-6 sm:mb-8">
              Read more on our blog
              <img src="/rightBlueArrow.svg" className="ml-3 mt-1"></img>
            </button>
          </div>
        </div>
        <div className="mb-6 sm:mb-9">
          <img src="/Frame.png" className="max-w-full mx-auto"></img>
        </div>
      </div>
    </>
  );
}
