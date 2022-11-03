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
  function handleDelete(id) {
    deleteComment(id)
      .then(() => {
        const newComments = [...comments];
        newComments.filter((comment) => {
          if (comment.comment_id !== id) {
            return comment;
          }
        });
        setComments(newComments);
      })
      .catch((err) => {
        const newComments = [...comments];
        newComments.unshift(comment);
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
