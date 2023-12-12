import axios from "axios";

const api = axios.create({
  baseURL: "https://iz-nc-news.onrender.com/api",
});


const getArticles = api.get("/articles");
const getSingleArticle = function (article_id) {
  return api.get(`/articles/${article_id}`)
}

const patchArticle = function (article_id, number_to_inc) {
  return api.patch(`/articles/${article_id}`, {inc_votes: number_to_inc})
}

export { getArticles, getSingleArticle, patchArticle };
