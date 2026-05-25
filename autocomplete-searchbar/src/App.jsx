import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      console.log("cache returned", input);
      setResults(cache[input]);
      return;
    }

    console.log("API call", input);
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${input}`
    );
    const data = await response.json();
    setResults(data.recipes);
    setCache((prev) => ({ ...prev, [input]: data.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 3000);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="App">
      <h2>Auto complete searchbar</h2>
      <div>
        <input
          type="text"
          placeholder="Search your recipe"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
      </div>
      <div className="results-container">
        {showResults &&
          results.map((r) => (
            <span key={r.id} className="result">
              {r.name}
            </span>
          ))}
      </div>
    </div>
  );
}
