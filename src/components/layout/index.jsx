import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div
    //   className="bg-[#1c1c28] bg-[url('/gridLayoutBg.svg')] bg-scroll bg-cover border-[4px] border-solid border-[#6966ff] rounded-[1.5em] absolute inset-0 bg-repeat
    //  "
    >
      <Header />
      <div className="overflow-y-auto h-full">{children}</div>
      <Footer />
    </div>
  );
}
Layout.propTypes = {
  // Required props
  children: PropTypes.node.isRequired,

  // className: PropTypes.string,
};

export default Layout;
