export default function Footer() {
  return (
    <>
      <div className="py-4 px-6 mt-10 mb-12 font-['Space_Mono']">
        <div className="flex flex-col md:flex-row justify-between  max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row  gap-4 w-full">
            <a href="/" className="mr-0 md:mr-8 mb-4 md:mb-0">
              <img src="/crosslogo.png" alt="Cross Logo" className="" />
            </a>

            <div className="text-[#C8C7D8] text-lg flex flex-col md:flex-row gap-4 w-full ">
              <a
                href="/About"
                className="hover:text-white px-3 py-1 rounded flex  h-8"
              >
                About
              </a>
              <a
                href="/faq"
                className="hover:text-white px-3 py-1 rounded flex  h-8"
              >
                FAQ
              </a>
              <a
                href="/brand-assets"
                className="hover:text-white px-3 py-1 rounded flex  h-8"
              >
                Brand assets
              </a>
              <a
                href="https://www.dydx.foundation/"
                className="hover:text-white px-3 py-1 rounded items-center flex  h-8"
              >
                dYdX Foundation
                <svg
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
              <a
                href="https://dydx.exchange/"
                className="hover:text-white px-3 py-1 rounded items-center flex  h-8"
              >
                dYdX trading
                <svg
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex  mt-6 md:mt-0">
            <a href="#" className="mr-5">
              <img src="/discord.png" alt="Discord" className="" />
            </a>
            <a href="#">
              <img src="/twitter.png" alt="Twitter" className="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
