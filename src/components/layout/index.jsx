import Header from "./Header";

function Layout() {
  return (
    <div
      className="min-h-screen w-screen bg-[#1c1c28] bg-[url('/gridLayoutBg.svg')] bg-cover bg-scroll border-[4px] border-solid border-[#6966ff] rounded-[1.5em] absolute inset-0
     "
    >
      <Header />
    </div>
  );
}

export default Layout;
