import { useState } from "react";
import { deleteComment } from "../api";
import { convertDate } from "../utils";

export default function Comment({
  comment,
  user,
  comments,
  setComments,
  err,
  setErr,
}) {
  const [deleted, setDeleted] = useState(false);
  function handleDelete(id) {
    deleteComment(id)
      .then(() => {
        setDeleted(true);
      })
      .catch((err) => {
        setDeleted(false)
        const newComments = [...comments];
        newComments.shift();
        setComments(newComments);
        setErr("Something went wrong, please try again.");
      });
  }

  if (err) {
    return (
      <div>
        <h4>{comment.author}</h4>
        <h4>Written {convertDate(comment.created_at)}</h4>
        <p>{comment.body}</p>
        <p>Something went wrong try again</p>
        <button onClick={() => handleDelete(comment.comment_id)}>Delete</button>
      </div>
    );
  }

  if (deleted) {
    return (<p>Comment deleted</p>)
  }

  if (comment.author === user.username) {
    return (
      <div>
        <h4>{comment.author}</h4>
        <h4>Written {convertDate(comment.created_at)}</h4>
        <p>{comment.body}</p>
        <button onClick={() => handleDelete(comment.comment_id)}>Delete</button>
      </div>
    );
  }
  return (
    <div>
      <h4>{comment.author}</h4>
      <h4>Written {convertDate(comment.created_at)}</h4>
      <p>{comment.body}</p>
    </div>
  );
}
