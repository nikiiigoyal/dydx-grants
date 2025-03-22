import Layout from "./components/layout";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage/index.jsx";
import FrequentlyAskedQues from "./components/Faq";
import DiscoverInitiatives from "./components/DiscoverInitiatives";
import Blog from "./components/blog";
import FundedGrants from "./components/FundedGrants";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="Faq" element={<FrequentlyAskedQues />} />
            <Route
              path="Discover-initiatives"
              element={<DiscoverInitiatives />}
            />
            <Route path="Funded-grants" element={<FundedGrants />} />
            <Route path="blog" element={<Blog />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
export default App;
