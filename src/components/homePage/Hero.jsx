export default function Hero() {
  console.log("Hero component rendered!");
  return (
    <>
      <div className="w-[60%] items-center mx-auto font-['Circular',_sans-serif]">
        <div className="text-[80px] text-center text-[#FFFFFF] font-bold flex flex-col">
          <h1 className="inline">
            Powering the future of dYdX through community
          </h1>
          {/* <h1 className="inline">dYdX through community</h1> */}

          <div>
            <h1 className="relative inline-block">grants</h1>
            <img src="/lineHero.svg" alt="line" className="absolute"></img>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
