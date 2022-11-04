import { getComments } from "../api";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";

export default function Comments({ article, user, err, setErr }) {
  const [comments, setComments] = useState([]);
  const [revealComments, setRevealComments] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getComments(article.article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, [article.article_id]);

  if (isLoading) return <p>Loading...</p>;

  if (!revealComments) {
    return (
      <div>
        <button onClick={() => setRevealComments(true)}>
          Reveal Comments...
        </button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => setRevealComments(false)}>Hide Comments...</button>
      <h3>Comments</h3>
      <NewComment
        article={article}
        comments={comments}
        setComments={setComments}
        err={err}
        setErr={setErr}
        user={user}
      />
      <ul>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.comment_id}
              comment={comment}
              user={user}
              comments={comments}
              setComments={setComments}
              err={err}
              setErr={setErr}
            />
          );
        })}
      </ul>
    </div>
  );
}
