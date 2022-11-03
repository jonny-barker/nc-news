import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-jonathan-barker.herokuapp.com/api",
});

export function getArticles(topic, order, sort) {
  return api.get("/articles", { params: { topic: topic } }).then((res) => {
    return res.data;
  });
}

export function getTopics() {
  return api.get("/topics").then((res) => {
    return res.data;
  });
}

export function getArticle(article_id) {
  return api.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
}

export function addLike(article_id, ammount) {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: ammount })
    .then((res) => {
      return res.data;
    });
}

export function getComments(article_id) {
  return api.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
}

export function postComment(article_id, newComment) {
  return api
    .post(`/articles/${article_id}/comments`, newComment)
    .then((res) => {
      return res.data;
    });
}
