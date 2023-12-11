import axios from "axios";
import { useEffect, useState } from "react";

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
    <section className="articles">
      <h1>Article List</h1>
      {articles.map((article) => {
        return (
            // very basic layout, to be updated later
            <article className="article_card">
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt={article.title} />
        <h3>{article.author}</h3>
        <h4>{article.topic}</h4>
        <p>Votes: {article.votes} Comment Count: {article.comment_count} Created at: {article.created_at}</p>
        </article>
        )
      })}
    </section>
  );
};

export default ArticleList;
