import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import MobileHeader from "./MobileHeader";
import { Link } from "react-router-dom";

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
          <Link to="/discover-initiatives" className="mr-[25px]">
            Discover initiatives
          </Link>
          <Link to="/funded-grants" className="mr-[25px]">
            Funded grants
          </Link>
          <Link to="/program-expenses" className="mr-[25px]">
            Program expenses
          </Link>
          <Link to="/blog" className="mr-[25px]">
            Blog
          </Link>
          <Link to="/faq" className="mr-[25px]">
            Faq
          </Link>
          <Link to="Apply">
            <Button>Apply for Grant</Button>
          </Link>
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
