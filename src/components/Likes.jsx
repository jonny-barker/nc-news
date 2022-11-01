import { addLike } from "../api";
import { useState } from "react";

export default function Likes({ article, setArticle }) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  function increaseLikes(article_id, ammount) {
    if (!liked) {
      addLike(article_id, ammount).then(({ article }) => {
        setArticle(article);
        setLiked(true);
        setDisliked(false);
      });
    }
  }
  function decreaseLikes(article_id, ammount) {
    if (!disliked) {
      addLike(article_id, ammount).then(({ article }) => {
        setArticle(article);
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
      {article.votes} likes
    </div>
  );
}
