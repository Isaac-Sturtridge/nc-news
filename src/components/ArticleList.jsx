import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../utils/axios";
import { useLocation, useParams } from "react-router-dom";
import SortFunction from "./SortFunction";
import { constructSearchParams } from "../utils/params";
import Error from "./Error";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  const [err, setErr] = useState(null);
  const [location, setLocation] = useState(useLocation().search);
  const [searchParams, setSearchParams] = useState(
    constructSearchParams(location, topic)
  );

  useEffect(() => {
    getArticles(searchParams.topic, searchParams.sort_by, searchParams.order)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [searchParams, location]);

  if (err) {
    return <Error status={err.status} message={err.message} />;
  }

  if (isLoading) {
    return (
      <section className="article-list-container">
        <section className="articles">
          <h1>Loading...</h1>
        </section>
      </section>
    );
  }

  return (
    <section className="article-list-container">
      <section className="articles">
        <h1>Today's Articles</h1>
        <SortFunction
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
        <section className="articleList">
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </section>
      </section>
    </section>
  );
};

export default ArticleList;
