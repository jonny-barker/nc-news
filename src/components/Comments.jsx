import { getComments } from "../api";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import Error from "./Error";

export default function Comments({ article, err, setErr }) {
  const [comments, setComments] = useState([]);
  const [revealComments, setRevealComments] = useState(false);
  useEffect(() => {
    getComments(article.article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        setErr(true);
      });
  }, [article.article_id, setErr]);

  if (err) return <Error />;

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
      />
      <ul>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.comment_id}
              comment={comment}
            />
          );
        })}
      </ul>
    </div>
  );
}
