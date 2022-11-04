import { useState } from "react";
import { deleteComment } from "../api";
import { convertDate } from "../utils";

export default function Comment({
  comment,
  user,
  comments,
  setComments,
}) {

  const [deleted, setDeleted] = useState(false);
  const [errDelete, setErrDelete] = useState(null)
  function handleDelete (id) {
     setErrDelete(null);
    deleteComment(id)
      .then(() => {
        setDeleted(true);
      })
      .catch((err) => {
        setDeleted(false)
        const newComments = [...comments];
        newComments.shift();
        setComments(newComments);
        setErrDelete(true);
      });
  }

  if (errDelete) {
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
    return (<p></p>)
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
