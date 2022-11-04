import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Article from "./Article";
import { useParams, useSearchParams } from "react-router-dom";
import Error from "./Error";

export default function Articles({ err, setErr }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: "created_at",
    order_by: "desc",
  });
  const { topic_slug } = useParams();
  const [query, setQuery] = useState({
    sort_by: "created_at",
    order_by: "desc",
  });

  function handleChange(event) {
    const newParams = { ...searchParams };
    const newQuery = { ...query };
    newParams[event.target.id] = event.target.value;
    newQuery[event.target.id] = event.target.value;
    setSearchParams(newParams);
    setQuery(newQuery);
  }

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic_slug, query.order_by, query.sort_by)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(true);
      });
  }, [topic_slug, query, setErr]);

  if (isLoading) return <p>Loading...</p>;

  if (err) return <Error />;

  return (
    <div>
      <div>
        <label htmlFor="sort_by">Sort by</label>
        <select
          name="sort_by"
          id="sort_by"
          onChange={handleChange}>
          <option
            value=""
            disabled
            selected>
            Sort by
          </option>

          <option value="created_at">Date</option>
          <option value="votes">Likes</option>
          <option value="author">Author</option>
          <option value="title">Title</option>
        </select>
        <label htmlFor="order_by"></label>
        <select
          name="order_by"
          id="order_by"
          onChange={handleChange}>
          <option
            value=""
            disabled
            selected>
            Order by
          </option>
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
