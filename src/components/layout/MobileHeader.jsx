/* eslint-disable react/prop-types */
// isopen: boolean that controls whether menu is expanded

import { Button } from "../ui/button";

// ontoggle function to toggle menu state
export default function MobileHeader({ isOpen, onToggle }) {
  return (
    <>
      <div className="flex items-center">
        <div className="py-4 w-full">
          <Button className="w-4/5">Apply</Button>
        </div>
        {/* mobile menu button create three horizontal lines */}
        <button
          className="relative flex flex-col justify-center items-center w-10 h-10"
          onClick={onToggle}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5 transition" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
        {/* mobile menu dropdown */}
        <div
          className={`fixed inset-0 z-40 bg-[#1C1C2A] flex flex-col items-center pt-20 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col items-center w-full text-center font-['Space_Mono'] text-[18px] text-[#C8C7D8]">
            <a
              href="/discover-initiatives"
              className="py-4 w-full hover:bg-gray-800"
            >
              Discover initiatives
            </a>
            <a href="/funded-grants" className="py-4 w-full hover:bg-gray-800">
              Funded grants
            </a>
            <a
              href="/program-expenses"
              className="py-4 w-full hover:bg-gray-800"
            >
              Program expenses
            </a>
            <a href="/blog" className="py-4 w-full hover:bg-gray-800">
              Blog
            </a>
            <a href="/faq" className="py-4 w-full hover:bg-gray-800">
              Faq
            </a>
            {/* <div className="py-4 w-full">
            <Button className="w-4/5">Apply</Button>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
