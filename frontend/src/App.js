import logo from './logo.svg';
import './App.css';

const handleChange = async () => {
  await fetch('http://localhost:1000/', {
    method: "GET",
    credentials:"include",
    mode: 'no-cors',
  })
}

function App() {
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
        <button onClick={handleChange}>cool button</button>
      </header>
    </div>
  );
}

export default App;
