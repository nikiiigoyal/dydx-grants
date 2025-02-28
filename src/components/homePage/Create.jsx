import { Button } from "../ui/button";

export default function Create() {
  return (
    <>
      <div className="p-15">
        <div className="bg-gradient-to-t from-[#6966FF] to-[#6966FF5C] flex flex-col justify-between items-center mx-auto max-w-[1232px] px-9 my-9 rounded-2xl">
          <div>
            <p className="text-[#FFFFFF] text-[18px] p-4 ">
              Have a project in mind?
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-[#FFFFFF] p-4 mb-4 font-semibold  ">
              Let’s create something awesome.
            </h1>
          </div>
          <div>
            <Button className="bg-[#FFFFFF] text-[#6966FF] font-['Circular',_sans-serif] text-[18px] px-[29px] py-[24px] hover:transform hover: bg-none hover:scale-105 mb-5 hover:bg-[#fffc]">
              Apply for grant
              <img src="/rightBlueArrow.svg"></img>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
