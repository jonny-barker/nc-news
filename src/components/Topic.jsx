import { Link } from "react-router-dom";

export default function SingleTopic({ topic }) {
  return (
    <div>
      <ul>
        <Link
          to={`/topics/${topic.slug}`}>
          <li>{topic.slug}</li>
        </Link>
      </ul>
    </div>
  );
}
