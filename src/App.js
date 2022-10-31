import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>NC News</h1>
        </header>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
