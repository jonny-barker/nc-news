import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Article from "./Article";
import { useParams, useSearchParams } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({});
  const { topic_slug } = useParams();

  const newParams = {};
  function handleChange(event) {
    newParams[event.target.id] = event.target.value;
    console.log(newParams);
  }

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic_slug)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, [topic_slug]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <label htmlFor="sort-by">Sort by</label>
        <select
          name="sort-by"
          id="sort-by"
          onChange={handleChange}>
          <option value="created_at">Date</option>
          <option value="votes">Likes</option>
          <option value="author">Author</option>
          <option value="title">Title</option>
        </select>
        <label htmlFor="sort-by"></label>
        <select
          name="order-by"
          id="order-by"
          onChange={handleChange}>
          <option value="desc">desc</option>
          <option value="asc">asc</option>
        </select>
      </div>
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
