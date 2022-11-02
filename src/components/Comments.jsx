import { getComments } from "../api";
import { useEffect, useState } from "react";
import Comment from "./Comment";

export default function Comments({ article }) {
  const [comments, setComments] = useState([]);
  const [revealComments, setRevealComments] = useState(false);

  useEffect(() => {
    getComments(article.article_id).then((comments) => {
      setComments(comments);
    });
  }, [article.article_id]);
  console.log(comments, "comments");
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
      <button onClick={() =>setRevealComments(false)}>Hide Comments...</button>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return <Comment comment={comment} />;
        })}
      </ul>
    </div>
  );
}
