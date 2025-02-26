import ApplicationProcess from "./ApplicationProcess";
import Slider from "./Carousel";
import Content from "./Content";
import Create from "./Create";
import Faq from "./Faq";
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
        <Faq />
        <ApplicationProcess />
        <Create />
      </div>
    </>
  );
}
