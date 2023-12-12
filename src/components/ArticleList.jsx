import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../utils/axios";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticles
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false)
      });
  }, []);

  if(isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <section className="articles">
      <h1>Article List</h1>
      {articles.map((article) => {

        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
};

export default ArticleList;
