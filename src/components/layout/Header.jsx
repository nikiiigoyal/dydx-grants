import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import MobileHeader from "./MobileHeader";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };

    // Initial check
    checkIfMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center font-[16px] m-[25px]">
        <div className="">
          <img src="/Logo.png" alt="logo"></img>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex justify-around p-1 font-['Space_Mono'] text-[18px] items-center text-[#C8C7D8]">
          <a href="/discover-initiatives" className="mr-[25px]">
            Discover initiatives
          </a>
          <a href="/funded-grants" className="mr-[25px]">
            Funded grants
          </a>
          <a href="/program-expenses" className="mr-[25px]">
            Program expenses
          </a>
          <a href="/blog" className="mr-[25px]">
            Blog
          </a>
          <a href="/faq" className="mr-[25px]">
            Faq
          </a>
          <Button>Apply for Grant</Button>
        </div>

        {/* Render mobile menu component only on mobile */}
        <div className="md:hidden">
          {isMobile && (
            <MobileHeader isOpen={isMenuOpen} onToggle={toggleMenu} />
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
