import Slider from "./Carousel";
import Content from "./Content";
import FundedGrants from "./FundedContent";
import Hero from "./Hero";

export default function HomePage() {
  console.log("HomePage component rendered!");
  return (
    <>
      <div>
        <Hero />
        <FundedGrants />
        <Slider />
        <Content />
      </div>
    </>
  );
}
