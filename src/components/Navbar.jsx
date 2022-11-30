import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link
        to="/"
        className="home"
        id="nav-item">
        <h2>Home</h2>
      </Link>
      <Link
        to="/topics"
        className="topics"
        id="nav-item">
        <h2>Topics</h2>
      </Link>
      <Link
        to="/account"
        className="account"
        id="nav-item">
        <h2>Account</h2>
      </Link>
    </nav>
  );
}
