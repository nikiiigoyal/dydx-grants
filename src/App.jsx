import Layout from "./components/layout";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage/index.jsx";
import FrequentlyAskedQues from "./components/Faq";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="Faq" element={<FrequentlyAskedQues />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
