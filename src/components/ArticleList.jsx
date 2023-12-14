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
  // still got the issue where it is taking two tries to rerender
  console.log(searchParams)
  console.log(parsedParams)

  useEffect(() => {
    getArticles(parsedParams.topic, parsedParams.sort_by, parsedParams.order)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }, [parsedParams]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="articles">
      <h1>Article List</h1>
      <SortFunction setSearchParams={setSearchParams} setParsedParams={setParsedParams} searchParams={searchParams}/>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
};

export default ArticleList;
