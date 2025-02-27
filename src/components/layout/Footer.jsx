export default function Footer() {
  return (
    <>
      <div className="py-4 px-6 mt-10 mb-10">
        <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <a href="/" className="mr-8">
              <img src="/crosslogo.png" alt="Cross Logo" className="" />
            </a>

            <div className="text-[#C8C7D8] text-lg flex gap-4">
              <a href="/About" className="hover:text-white px-3 py-1 rounded">
                About
              </a>
              <a href="/faq" className="hover:text-white px-3 py-1 rounded">
                FAQ
              </a>
              <a
                href="/brand-assets"
                className="hover:text-white px-3 py-1 rounded"
              >
                Brand assets
              </a>
              <a
                href="https://www.dydx.foundation/"
                className="hover:text-white px-3 py-1 rounded flex items-center"
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
                className="hover:text-white px-3 py-1 rounded flex items-center"
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

          <div className="flex items-center">
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
