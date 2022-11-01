import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Article from "./Article";
import { useParams } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const { topic_slug } = useParams();

  useEffect(() => {
    setIsLoading(true)
    getArticles(topic_slug)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, [topic_slug]);


  if (isLoading) return <p>Loading...</p>
  
  return (
    <div>
      {articles.map((article) => {
        return (
          <Article
            key={article.article_id}
            article={article}
          />
        );
      })}
    </div>
  );
}
