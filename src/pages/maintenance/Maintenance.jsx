// import logo from '../../res/logo.png';
import './Maintenance.css';

export default function Maintenance() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          This site is under <code>maintenance</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/thisisishara"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the <code>GitHub</code> profile for now
        </a>
      </header>
    </div>
  );
};
