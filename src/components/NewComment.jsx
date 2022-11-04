import { useState } from "react";
import { postComment } from "../api";

export default function NewComment({
  article,
  comments,
  setComments,
  err,
  setErr,
  user
}) {
  const [inputValue, setInputValue] = useState({
    body: "",
    author: user.username,
  });
  const id = article.article_id;

  function handleSubmit (event) {
     setErr(null);
    event.preventDefault();
    if (inputValue.body.length !== 0) {
      postComment(id, [inputValue])
        .then((res) => {
          const newComments = [...comments];
          newComments.unshift(res);
          setComments(newComments);
        })
        .catch((err) => {
          const newComments = [...comments];
          newComments.shift();
          setComments(newComments);
          setErr("Something went wrong, please try again.");
        });
      setInputValue({
        body: "",
        author: user.username,
      });
    }
  }

  function handleChange(event) {
    const newInputValue = { ...inputValue };
    newInputValue[event.target.id] = event.target.value;
    setInputValue(newInputValue);
  }
  if (err)
    return (
      <div>
        <p>{err}</p>
        <button onClick={() => setErr(null)}>Reset</button>
      </div>
    );
  return (
    <div>
      <p>adding a new comment</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment"></label>
        <input
          id="body"
          type="text"
          value={inputValue.body}
          onChange={handleChange}
        />
        <label htmlFor=""></label>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
