import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Article from "./components/Article";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/articles/:article_id" element={<Article />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
