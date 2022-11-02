import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import { convertDate } from "../utils";
import { Link } from "react-router-dom";
import Likes from "./Likes";

export default function ArticlePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <h2>{article.title}</h2>
      <h3>Written by {article.author}</h3>
      <h3>Publihed on {convertDate(article.created_at)}</h3>
      <Link to={`/topics/${article.topic}`}>
        <h4>Topic: {article.topic}</h4>
      </Link>
      <Likes article={article} setArticle={setArticle}/>
      <p>{article.body}</p>
    </main>
  );
}
