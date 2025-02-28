import AccordionFaq from "./Accordion";

export default function Faq() {
  return (
    <>
      <div className="mb-8 p-9 font-['Circular',_sans-serif]">
        <div className="flex items-center flex-col mx-auto w-[30%]">
          <h1 className="text-4xl text-[#FFFFFF] font-bold mb-5 flex ">
            Frequently asked{" "}
            <span className="flex ml-4">
              questions{"  "}
              <img src="/oval.svg" className="absolute left-auto"></img>
            </span>
          </h1>
          <p className="text-[#C8C7D8] text-lg text-center mt-9 mb-9 loading-[1.3em]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nulla risus, consectetur ut bibendum non, gravida non libero.
          </p>
        </div>
        <div>
          <AccordionFaq />
        </div>
      </div>
    </>
  );
}
