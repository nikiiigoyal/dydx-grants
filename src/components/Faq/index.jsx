import AccordionFaq from "../homePage/Accordion";
import Create from "../homePage/Create";
import AccordionSelectionCriteria from "./Faqs";

function FrequentlyAskedQues() {
  return (
    <>
      <div
        className="flex flex-col justify-around items-center text-[#c8c7d8] tracking-[-.022em] cursor-pointer 
       "
      >
        <h1 className="text-[40px] tracking-[-2.2%] font-bold text-center font-circular-std leading-[72px] text-white mt-6">
          Frequently Asked Questions
        </h1>
        <div>
          <div>
            <h2 className="leading-[32px] tracking-[-1.9%] text-2xl text-white font-bold my-8 ">
              Grant application process
            </h2>
            <AccordionFaq />
          </div>
          <div>
            <h2 className="leading-[32px] tracking-[-1.9%] text-2xl text-white font-bold my-8">
              Selection Criteria
            </h2>
            <AccordionSelectionCriteria />
          </div>
          <div>
            <h2 className="leading-[32px] tracking-[-1.9%] text-2xl text-white font-bold my-8">
              The Grants Trust
            </h2>
            <AccordionSelectionCriteria />
          </div>
        </div>
      </div>
      <div>
        <Create />
      </div>
    </>
  );
}
export default FrequentlyAskedQues;
