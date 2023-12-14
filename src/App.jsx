import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Article from "./components/Article";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import LandingPage from "./components/LandingPage";
import TopicList from "./components/TopicList";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/articles" element={<ArticleList />}></Route>
        <Route path="/topics" element={<TopicList/>}></Route>
        <Route path="/*" element={<Error status={404} message={'Route Not Found'}/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
