import PropTypes from "prop-types";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div
      className="min-h-screen w-screen bg-[#1c1c28] bg-[url('/gridLayoutBg.svg')] bg-cover bg-scroll border-[4px] border-solid border-[#6966ff] rounded-[1.5em] absolute inset-0
     "
    >
      <Header />
      {children}
    </div>
  );
}
Layout.propTypes = {
  // Required props
  children: PropTypes.node.isRequired,
  // Optional props
  // className: PropTypes.string,
};

export default Layout;
