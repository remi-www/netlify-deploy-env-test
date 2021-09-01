import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchApiData() {
      const url = "/.netlify/functions/Fetch?endpoint=api/v1/artists";
      try {
        setLoading(true);
        const res = await fetch(url).then((res) => res.json());
        console.log(res.data[0]["name"]);
        setApiData(res.data[0]["name"]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchApiData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{loading ? "Loading..." : apiData}</p>
      </header>
    </div>
  );
}

export default App;
