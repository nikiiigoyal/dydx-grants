import AccordionFaq from "../homePage/Accordion";
import Create from "../homePage/Create";
import AccordionSelectionCriteria from "./Faqs";

function FrequentlyAskedQues() {
  return (
    <>
      <div className="flex flex-col justify-around items-center text-[#c8c7d8] tracking-[-.022em] cursor-pointer px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[-2.2%] font-bold text-center font-circular-std leading-tight sm:leading-[48px] md:leading-[56px] lg:leading-[72px] text-white mt-4 sm:mt-6 mb-6 sm:mb-8">
          Frequently Asked Questions
        </h1>

        <div className="w-full max-w-4xl">
          {/* Grant application process */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="leading-tight sm:leading-[28px] md:leading-[32px] tracking-[-1.9%] text-base sm:text-lg md:text- lg:text-2xl text-white font-bold mb-4 sm:mb-6 md:mb-8 text-center sm:text-left">
              Grant application process
            </h2>
            <AccordionFaq />
          </div>

          {/* Selection Criteria */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="leading-tight sm:leading-[28px] md:leading-[32px] tracking-[-1.9%] text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold mb-4 sm:mb-6 md:mb-8 text-center sm:text-left">
              Selection Criteria
            </h2>
            <AccordionSelectionCriteria />
          </div>

          {/* The Grants Trust */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="leading-tight sm:leading-[28px] md:leading-[32px] tracking-[-1.9%] text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold mb-4 sm:mb-6 md:mb-8 text-center sm:text-left">
              The Grants Trust
            </h2>
            <AccordionSelectionCriteria />
          </div>
        </div>
      </div>

      <div className="w-full">
        <Create />
      </div>
    </>
  );
}

export default FrequentlyAskedQues;
