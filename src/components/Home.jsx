import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Articles from './Articles'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (<div>
    <Articles articles={articles}/>
  </div>);
}
