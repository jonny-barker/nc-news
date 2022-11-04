import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import ArticlePage from "./components/ArticlePage";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Account from "./components/Account";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({ user: "", password: "" });
  const [err, setErr] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>NC News</h1>
        </header>
        <Navbar />
        <Routes>
          <Route
            path="*"
            element={<ErrorPage/>}
          />
          <Route
            path="/"
            element={
              <Home
                err={err}
                setErr={setErr}
              />
            }
          />
          <Route
            path="/topics"
            element={
              <Topics
                err={err}
                setErr={setErr}
              />
            }
          />
          <Route
            path="/topics/:topic_slug"
            element={<Articles />}
          />
          <Route
            path="/articles/:article_id"

            element={<ArticlePage user={user}  err={err}
                setErr={setErr}/>}
          />
          <Route
            path="/account"
            element={
              isSignedIn ? (
                <Account user={user} />
              ) : (
                <Login
                  setIsSignedIn={setIsSignedIn}
                  setUser={setUser}
                />
              )

            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
