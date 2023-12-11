import axios from "axios";

const api = axios.create({
  baseURL: "https://iz-nc-news.onrender.com/api",
});

const getArticles = api.get("/articles");

export { getArticles };
