import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link
        to="/"
        className="home">
        <h2>Home</h2>
      </Link>
      <Link
        to="/"
        className="topics">
        <h2>Topics</h2>
      </Link>
      <Link
        to="/"
        className="account">
        <h2>Account</h2>
      </Link>
    </nav>
  );
}
