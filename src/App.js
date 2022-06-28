import React, { useState } from "react";

import data from "./data";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          onChange={(e) => setCount(e.target.value)}
          type="number"
          name="amount"
          id="amount"
          value={count}
        />
        <button type="submit" className="btn">
          generate
        </button>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </form>
    </section>
  );
}

export default App;
