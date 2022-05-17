import React, { useState } from "react";
import "./App.css";

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  // TODO: answer here
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);

  React.useEffect(() => {
    // TODO: answer here
    getQuote();
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  return (
    <div className="Main-App" data-testid="quote">
      <div className="Header">
        <h3 className="Header-Text">Random Quote</h3>
      </div>

      <div className="Center-Container">
        <div className="Quote-Container">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <h1>{quote?.content}</h1>
              <p className="Author-Text">{`- ${quote?.author}`}</p>
            </>
          )}

          <button className="Button-Container" onClick={() => getQuote()}>
            Get another quote
          </button>
        </div>
      </div>
    </div>
  );
}
