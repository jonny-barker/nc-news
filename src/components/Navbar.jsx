import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link
        to="/"
        className="home">
        Home
      </Link>
      <Link
        to="/"
        className="topics">
        Topics
      </Link>
      <Link
        to="/"
        className="account">
        Account
      </Link>
    </nav>
  );
}
