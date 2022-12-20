import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This site is under <code>maintainance</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/thisisishara"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit GitHub page for now
        </a>
      </header>
    </div>
  );
}

export default App;
