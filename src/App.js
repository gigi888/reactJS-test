import logo from './logo.svg';
import './App.css';

function App() {
  const express = require("express");
  const cors = require("cors");
  const app = express();
//use cors as middleware
  app.use(cors())

  app.use(
      cors({
        origin: "http://localhost:3000",
      credentials: true
   })
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CORS Enabled. Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
