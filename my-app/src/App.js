import logo from './logo.svg';
import './App.css';
import './api-form-submit.js';
import NameForm from './api-form-submit.js';

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
          Let's Ketchup
        </a>
          <NameForm />
      </header>
    </div>
  );
}

export default App;