import { getComments } from "../api";
import { useEffect, useState } from "react";
import Comment from "./Comment";

export default function Comments({ article }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article.article_id).then((comments) => {
      setComments(comments);
    });
  }, [article.article_id]);

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return <Comment comment={comment}/>
        })}
      </ul>
    </div>
  );
}
