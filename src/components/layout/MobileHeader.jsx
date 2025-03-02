// isopen: boolean that controls whether menu is expanded
// ontoggle function to toggle menu state
export default function MobileHeader({ isOpen, pnToggle }) {
  return (
    <>
      <button
        className="relative flex flex-col justify-center items-center w-10 h-10"
        onClick={ontoggle}
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
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
    </>
  );
}
