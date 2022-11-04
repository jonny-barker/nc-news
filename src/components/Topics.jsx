import { useEffect, useState } from "react";
import { getTopics } from "../api";
import Topic from "./Topic";
import Articles from "./Articles";
import Error from "./Error";

export default function Topics({err, setErr}) {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then((topics) => {
        setTopics(topics);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(true)
      });
  }, [setErr]);

  if (isLoading) return <p>Loading...</p>;

  if (err) return <Error />
  
  return (
    <div>
      {topics.map((topic) => {
        return (
          <Topic
            key={topic.slug}
            topic={topic}
          />
        );
      })}
      <div>
        <Articles />
      </div>
    </div>
  );
}
