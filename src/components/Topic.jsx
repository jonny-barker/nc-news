import { Link } from "react-router-dom";

export default function SingleTopic({ topic }) {
  return (
    <div className="topic-div">
      <Link
        to={`/topics/${topic.slug}`}
        className="topic-item">
        <h2>{topic.slug}</h2>{" "}
      </Link>
    </div>
  );
}
