import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../utils/axios";
import { Link } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);

  return (
    <section className="articles">
      <h1>Article List</h1>
      {articles.map((article) => {

        return <Link to={`/articles/${article.article_id}`}>
        <ArticleCard key={article.article_id} article={article} />;
        </Link>
      })}
    </section>
  );
};

export default ArticleList;
