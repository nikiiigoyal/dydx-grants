import AccordionFaq from "./Accordion";

export default function Faq() {
  return (
    <>
      <div className="mb-8 p-4 sm:p-6 md:p-9 font-['Circular',_sans-serif]">
        <div className="flex items-center flex-col mx-auto w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-5 text-center">
            <span className="block sm:inline">Frequently asked</span>{" "}
            <span className="block sm:inline relative">
              questions
              <img
                src="/oval.svg"
                className="absolute -top-2 sm:-top-3 right-0 sm:-right-2"
                alt="oval decoration"
              />
            </span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg text-center mt-4 sm:mt-9 mb-6 sm:mb-9 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nulla risus, consectetur ut bibendum non, non libero.
          </p>
        </div>
        <div>
          <AccordionFaq />
        </div>
      </div>
    </>
  );
}
