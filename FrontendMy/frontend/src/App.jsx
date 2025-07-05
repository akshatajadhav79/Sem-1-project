import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // const [count, setCount] = useState(0)

  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/quotes/")
      .then((response) => {
        setQuotes(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the quotes!", error);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Quotes</h1>
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>
              {quote.detail} - {quote.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + DJango</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
