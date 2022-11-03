import { getComments } from "../api";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";

export default function Comments({ article, err, setErr, user}) {
  const [comments, setComments] = useState([]);
  const [revealComments, setRevealComments] = useState(false);
  useEffect(() => {
    getComments(article.article_id).then((comments) => {
      setComments(comments);
    });
  }, [article.article_id]);

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
