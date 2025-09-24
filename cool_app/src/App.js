import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dett är min coola app</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTgU1i9RaC2jy1FttsApU12nkSSmNA8WjWg&s" alt="bild"></img>
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
      </header>
    </div>
  );
}

export default App;
