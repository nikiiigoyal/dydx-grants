import { Button } from "../ui/button";
import Features from "./HeroFeatures";

export default function Hero() {
  return (
    <>
      <div className="w-full md:w-4/5 lg:w-3/5 items-center mx-auto font-['Circular',_sans-serif] px-4">
        <div className="text-3xl sm:text-5xl md:text-6xl text-center text-[#FFFFFF] font-bold flex flex-col">
          <h1 className="inline">Powering the future of dYdX through</h1>

          <div>
            <h1 className="relative inline-block">
              {" "}
              community <span>grants</span>
            </h1>
            <img
              src="/lineHero.svg"
              alt="line"
              className="absolute right-0 md:right-140 max-w-full"
            ></img>
          </div>
        </div>
        <div className="flex justify-around w-full flex-col sm:flex-row mx-auto my-8 gap-4 sm:w-4/5 md:w-3/4 lg:w-2/3">
          <Button className="w-full sm:w-auto bg-[#393953] text-white text-center px-[30px] py-[27px] font-['Circular',_sans-serif] text-[18px] hover:transform hover:scale-105 hover:bg-[#4f4c64]">
            Discover REPs
          </Button>
          <div className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto font-['Circular',_sans-serif] text-[18px] px-[30px] py-[27px] hover:transform hover:scale-105">
              Apply for grant
              <img src="/arrow_right.svg"></img>
            </Button>
          </div>
        </div>
        <div>
          <Features />
        </div>
      </div>
    </>
  );
}
