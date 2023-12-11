import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Article = () => {
  const [article, setArticle] = useState({});
  const {article_id} = useParams();

  useEffect(() => {
    axios
      .get(`https://iz-nc-news.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        return response.data
      })
      .then((data) => {
        setArticle(data.article)
      });
  }, []);

  return <h1 className="article">Article</h1>;
};

export default Article;
