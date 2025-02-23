import { Button } from "../ui/button";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center font-[16px] m-[25px] ">
        <div className="">
          <img src="/Logo.png" alt="logo"></img>
        </div>
        <div className="flex justify-around p-1 font-['Space_Mono'] text-[18px] items-center text-[#C8C7D8]">
          <a href="/discover-initiatives" className="mr-[25px]">
            Discover initiatives
          </a>
          <a href="/funded-grants" className="mr-[25px]">
            Funded grantss
          </a>
          <a href="/program-expenses" className="mr-[25px]">
            Program expenes
          </a>
          <a href="/blog" className="mr-[25px]">
            Blog
          </a>
          <a href="/faq" className="mr-[25px]">
            Faq
          </a>
          <Button>Apply for Grant</Button>
        </div>
      </div>
    </>
  );
}
export default Header;
