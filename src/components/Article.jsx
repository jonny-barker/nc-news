import { convertDate } from "../utils";
import { Link } from "react-router-dom";

export default function Article ({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <div
        id="article-box"
        className={article.article_id}>
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <h4>{convertDate(article.created_at)}</h4>
      </div>
    </Link>
  );
}
<div>Article Page</div>;