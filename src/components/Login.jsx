import { useState } from "react";
import { getUsers } from "../api";

export default function Login({ setIsSignedIn, setUser }) {
  const [input, setInput] = useState({
    avatar_url: "",
    name: "",
    username: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  let exists = false;

  function handleChange(event) {
    const newInput = { ...input };
    newInput[event.target.id] = event.target.value;
    setInput(newInput);
  }
  function checkUser(username) {
    getUsers().then((users) => {
      setUsers(users);
    });
    users.forEach((user) => {
      if (user.username === username) {
        exists = true;
        setUser(user);
      }
    });
    return;
  }

  function handleSubmit(event) {
    event.preventDefault();
    checkUser(input.username);
    if (exists) {
      setIsSignedIn(true);
      setInput({
        avatar_url: "",
        name: "",
        username: "",
        password: "",
      });
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=""></label>
        <input
          onChange={handleChange}
          type="text"
          id="username"
          value={input.username}
        />
        <label htmlFor=""></label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          value={input.password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
