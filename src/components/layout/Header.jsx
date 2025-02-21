function Header() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="">
          <img src="/Logo.png" alt="logo"></img>
        </div>
        <div className="flex justify-around">
          <a href="/discover-initiatives">Discover initiatives</a>
          <a href="/funded-grants">Funded grantss</a>
          <a href="/program-expenses">Program expenes</a>
          <a href="/blog">Blog</a>
          <a href="/faq">Faq</a>
        </div>
      </div>
    </>
  );
}
export default Header;
