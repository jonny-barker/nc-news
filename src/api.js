import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-jonathan-barker.herokuapp.com/api",
});


export function getArticles (topic) {
  return api
    .get("/articles", { params: { topic: topic } }) 
    .then((res) => {
      return res.data;
    });
};

export function getTopics ()  {
  return api
    .get("/topics")
    .then((res) => {
    return res.data;
  });
};