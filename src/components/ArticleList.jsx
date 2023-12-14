import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../utils/axios";
import { useLocation, useSearchParams } from "react-router-dom";
import SortFunction from "./SortFunction";
import { constructSearchParams } from "../utils/params";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(useLocation().search)
  const [searchParams, setSearchParams] = useState(constructSearchParams(location));
  

  useEffect(() => {
    getArticles(searchParams.topic , searchParams.sort_by, searchParams.order)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }, [searchParams]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="articles">
      <h1>Article List</h1>
      <SortFunction setSearchParams={setSearchParams}/>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
};

export default ArticleList;
