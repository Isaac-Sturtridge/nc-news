import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// NB: this is a shell file that will be replaced by the corresponding file on ticket 4 when merged in, just here to display the links to the individual articles

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://iz-nc-news.onrender.com/api/articles")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);

  return (
    <section>
      {articles.map((article) => {
        return (
          <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
        );
      })}
    </section>
  );
};

export default ArticleList;
