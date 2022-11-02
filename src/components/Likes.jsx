import { addLike } from "../api";
import { useState } from "react";

export default function Likes({article}) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(article.votes)


  function increaseLikes(article_id, ammount) {
    if (!liked) {
      addLike(article_id, ammount).then(() => {
        setCurrentLikes((currentLikes) => currentLikes + ammount)
        setLiked(true);
        setDisliked(false);
      });
    }
  }
  function decreaseLikes(article_id, ammount) {
    if (!disliked) {
      addLike(article_id, ammount).then(() => {
        setCurrentLikes((currentLikes) => currentLikes + ammount)
        setDisliked(true);
        setLiked(false);
      });
    }
  }

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
