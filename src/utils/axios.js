import axios from "axios";

const api = axios.create({
  baseURL: "https://iz-nc-news.onrender.com/api",
});


const getArticles = api.get("/articles");
const getSingleArticle = function (article_id) {
  return api.get(`/articles/${article_id}`)
}

export { getArticles, getSingleArticle };
