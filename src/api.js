import axios from "axios";

const api = axios.create({
  baseURL: "https://zouzfnyfrnmubhwmadgu.supabase.co/rest/v1/",
  headers: {
    "Content-Type": "application/json",
    apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvdXpmbnlmcm5tdWJod21hZGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2NDExNDAsImV4cCI6MTk4NTIxNzE0MH0.TS48jmhMyXWEVdXMb9HXVukEDg9p_zcxQypayM-Gi5Q`,
  },
});

export function getArticles(topic, order, sort) {
  return api
    .get("/articles", {
      params: { topic: topic, order: order, sort_by: sort },
    })
    .then((res) => {
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

export function getUsers() {
  return api.get(`/users`).then((res) => {
    return res.data;
  });
}

export function deleteComment(comment_id) {
  return api.delete(`comments/${comment_id}`).then((res) => {
    return res;
  });
}
