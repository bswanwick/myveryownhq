import logo from './logo.svg';
import './App.css';
import HQButton from './HQButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <HQButton />
        </p>
      </header>
    </div>
  );
}

export default App;
