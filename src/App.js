import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import Welcome2 from './components/Welcome2'
import Clothes from "./components/Clothes"; //Import component vào
import ExampleState from './components/ExampleState'

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <Welcome2 />sdsa
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
    <div>
      <Clothes name="Quần jean" type="Skinny" color ="Đen" size = "L">Clothes 1</Clothes>
      <Clothes name="Váy" type="váy công chúa" color ="Trắng" size = "M">Clothes 2</Clothes>
    </div>

    // Example State 
    <ExampleState />
    </div>
  );
}

export default App;
