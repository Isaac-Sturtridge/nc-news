import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../utils/axios";
import { useLocation, useSearchParams } from "react-router-dom";
import SortFunction from "./SortFunction";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [parsedParams, setParsedParams] = useState(Object.fromEntries(searchParams));
  const {search} = useLocation();

  useEffect(() => {
    getArticles(parsedParams.topic, parsedParams.sort_by, parsedParams.order)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="articles">
      <h1>Article List</h1>
      <SortFunction searchParams={searchParams} setSearchParams={setSearchParams} />
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
};

export default ArticleList;
