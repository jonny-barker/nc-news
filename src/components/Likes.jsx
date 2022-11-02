import { addLike } from "../api";
import { useState } from "react";

export default function Likes({ article }) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(article.votes);
  const [err, setErr] = useState(null);

  function increaseLikes(article_id, ammount) {
    if (!liked) {
      addLike(article_id, ammount)
        .then(() => {
          setCurrentLikes((currentLikes) => currentLikes + ammount);
          setLiked(true);
          setDisliked(false);
        })
        .catch((err) => {
          setCurrentLikes((currentLikes) => currentLikes - ammount);
          setErr("Something went wrong, please try again.");
        });
    }
  }
  function decreaseLikes(article_id, ammount) {
    if (!disliked) {
      addLike(article_id, ammount)
        .then(() => {
          setCurrentLikes((currentLikes) => currentLikes + ammount);
          setDisliked(true);
          setLiked(false);
        })
        .catch((err) => {
          setCurrentLikes((currentLikes) => currentLikes - ammount);
          setErr("Something went wrong, please try again.");
        });
    }
  }

  if (err) return <p>{err}</p>;
  return (
    <div>
      <button onClick={() => increaseLikes(article.article_id, 1)}>
        &#8593;
      </button>
      <button onClick={() => decreaseLikes(article.article_id, -1)}>
        &#8595;
      </button>
      {currentLikes} likes
    </div>
  );
}
