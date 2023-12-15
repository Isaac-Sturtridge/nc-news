import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleArticle } from "../utils/axios";
import CommentList from "./CommentList";
import VoteButton from "./VoteButton";
import Error from "./Error";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setArticle(data.article);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);

  if (err) {
    return <Error status={err.status} message={err.message} />;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="article-container">
      <article className="article">
          <h1>{article.title}</h1>
          <img src={article.article_img_url} alt={article.title} />
          <section className="articleText">
            <h2>{article.author}</h2>
            <h3>{article.topic}</h3>
            <p>{article.body}</p>
            <p>{article.created_at}</p>
          </section>
        <VoteButton votes={article.votes} article_id={article_id} />
        <Link to={"/articles"}>Back to articles</Link>
        <CommentList setArticle={setArticle} article={article} />
      </article>
    </section>
  );
};

export default Article;
