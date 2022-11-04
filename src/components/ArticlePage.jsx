import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import { convertDate } from "../utils";
import { Link } from "react-router-dom";
import Likes from "./Likes";
import Comments from "./Comments";
import Error from "./Error";

export default function ArticlePage({ user, err, setErr }) {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    setErr(null)
    setIsLoading(true);
    getArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(true);
      });
  }, [article_id, setErr]);

  if (isLoading) return <p>Loading...</p>;
  if (err) return <Error />;

  return (
    <main>
      <h2>{article.title}</h2>
      <h3>Written by {article.author}</h3>
      <h3>Publihed on {convertDate(article.created_at)}</h3>
      <Link to={`/topics/${article.topic}`}>
        <h4>Topic: {article.topic}</h4>
      </Link>
      <Likes
        article={article}
        setArticle={setArticle}
        err={err}
        setErr={setErr}
      />
      <p>{article.body}</p>
      <Comments
        article={article}
        err={err}
        setErr={setErr}
        user={user}
      />
    </main>
  );
}
