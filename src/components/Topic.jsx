import { Link } from "react-router-dom";

export default function SingleTopic({ topic }) {
  return (
    <div className="topic">
      <Link to={`/topics/${topic.slug}`}>
        <h3>{topic.slug}</h3>{" "}
      </Link>
    </div>
  );
}
