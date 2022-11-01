import { convertDate } from "../utils";

export default function Article ({ article }) {

  return (
    <div className="article-box">
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <h4>{convertDate(article.created_at)}</h4>
    </div>
  )
}
