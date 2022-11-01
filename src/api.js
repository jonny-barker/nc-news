export function getArticles() {
  return fetch(
    `https://nc-news-jonathan-barker.herokuapp.com/api/articles`
  ).then((response) => {
    return response.json();
  });
}
