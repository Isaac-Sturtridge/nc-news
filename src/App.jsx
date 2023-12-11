import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Article from "./components/Article";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/articles" element={<ArticleList />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
