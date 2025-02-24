import { Button } from "../ui/button";

export default function Hero() {
  console.log("Hero component rendered!");
  return (
    <>
      <div className="w-[50%] items-center mx-auto font-['Circular',_sans-serif]">
        <div className="text-[80px] text-center text-[#FFFFFF] font-bold flex flex-col ">
          <h1 className="inline">Powering the future of dYdX through</h1>
          {/* <h1 className="inline">dYdX through community</h1> */}

          <div>
            <h1 className="relative inline-block">
              {" "}
              community <span>grants</span>
            </h1>
            <img
              src="/lineHero.svg"
              alt="line"
              className="absolute right-140"
            ></img>
          </div>
        </div>
        <div className="flex justify-around w-[50%] mx-auto mt-6 min-w-[180px]">
          <Button className="bg-[#393953] text-white text-center px-[30px] py-[27px] font-['Circular',_sans-serif] text-[18px] hover:transform hover:scale-105 hover:bg-[#4f4c64]">
            Discover REPs
          </Button>
          <div className="flex">
            <Button className="font-['Circular',_sans-serif] text-[18px] px-[30px] py-[27px] hover:transform hover:scale-105">
              Apply for grant
              <img src="/arrow_right.svg"></img>
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
