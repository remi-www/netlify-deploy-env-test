import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [baseUrl, setBaseUrl] = useState("");
  useEffect(() => {
    async function fetchUrl() {
      if (process.env.NODE_ENV !== 'production') {
        setBaseUrl(process.env.REACT_APP_TEST_API)
      } else {
          const url = '/.netlify/functions/baseUrl'
          try {
            const res = await fetch(url).then((res) => res.json())
            setBaseUrl(res.baseUrl)
          } catch (err) {
            console.log(err)
          }
        } 
      }
    fetchUrl()
  }, [])
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
        <p>{baseUrl}</p>
      </header>
    </div>
  );
}

export default App;
