import { Button } from "../ui/button";

export default function Create() {
  return (
    <>
      <div className="p-4 sm:p-8 md:p-15">
        <div className="bg-gradient-to-t from-[#6966FF] to-[#514fbc] flex flex-col justify-between items-center mx-auto max-w-[1232px] px-4 sm:px-6 md:px-9 my-4 sm:my-6 md:my-9 rounded-lg sm:rounded-xl md:rounded-2xl">
          <div>
            <p className="text-[#FFFFFF] text-sm sm:text-base md:text-[18px] p-2 sm:p-3 md:p-4">
              Have a project in mind?
            </p>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl text-[#FFFFFF] p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4 font-semibold">
              Let create something awesome.
            </h1>
          </div>
          <div>
            <Button className="bg-[#FFFFFF] text-[#6966FF] font-['Circular',_sans-serif] text-sm sm:text-base md:text-[18px] px-4 sm:px-5 md:px-[29px] py-3 sm:py-4 md:py-[24px] hover:transform hover:scale-105 mb-3 sm:mb-4 md:mb-5 hover:bg-[#fffc] flex items-center gap-2">
              Apply for grant
              <img
                src="/rightBlueArrow.svg"
                alt="Right arrow"
                className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2"
              ></img>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
