import axios from "axios";

const api = axios.create({
  baseURL: "https://iz-nc-news.onrender.com/api",
});

const getArticles = function (topic, sort_by, order) {
  return api.get(`/articles`, {
    params: {
      topic: topic,
      sort_by: sort_by,
      order: order
    },
  });
};

const postArticle = function () {
  return api.post(`/articles`)
}

const getTopics = api.get("/topics");
const getSingleArticle = function (article_id) {
  return api.get(`/articles/${article_id}`).catch((err) => {
    if(err.response) {
      return Promise.reject({status: err.response.status, message: err.response.data.msg})
    }
  });
};
const getComments = function (article_id) {
  return api.get(`/articles/${article_id}/comments`);
};

const postComment = function (article_id, finishedComment) {
  return api.post(`/articles/${article_id}/comments`, finishedComment);
};

const patchArticle = function (article_id, number_to_inc) {
  return api.patch(`/articles/${article_id}`, { inc_votes: number_to_inc });
};

const deleteComment = function (comment_id) {
  return api.delete(`/comments/${comment_id}`)
}

export {
  getArticles,
  postArticle,
  getTopics,
  getSingleArticle,
  patchArticle,
  getComments,
  postComment, deleteComment,
};
