import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    axios
      .get(`https://iz-nc-news.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setArticle(data.article);
      });
  }, []);

  return (
    <article className="article">
      <h1>{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} />
      <h2>{article.author}</h2>
      <h3>{article.topic}</h3>
      <p>{article.body}</p>
      <p>Comment Count: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
      <p>{article.created_at}</p>
    </article>
  );
};

export default Article;
