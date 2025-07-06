import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-[#1c1c28] bg-[url('/gridLayoutBg.svg')] bg-scroll bg-cover border-[4px] border-solid border-[#6966ff] rounded-[1.5em] bg-repeat">
      <Header />
      <main className="flex-1 w-full overflow-x-hidden px-4 py-6 md:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
