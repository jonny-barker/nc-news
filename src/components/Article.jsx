export default function Article ({ article }) {
  console.log(article);
  return <p className="article-box">{article.title}</p>;
}