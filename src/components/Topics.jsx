import { useEffect, useState } from "react";
import { getTopics } from "../api";
import Topic from "./Topic";
import Articles from "./Articles";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTopics().then((topics) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="topics-nav">
        {topics.map((topic) => {
          return (
            <Topic
              key={topic.slug}
              topic={topic}
            />
          );
        })}
      </div>
      <div>
        <Articles />
      </div>
    </div>
  );
}
