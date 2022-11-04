import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import Welcome2 from './components/Welcome2'
import Clothes from "./components/Clothes"; //Import component vào
import ExampleState from './components/ExampleState'
import PropsValidationExample from './components/PropsValidationExample'
import ExampleStateAPIV2 from './components/ExampleStateAPIV2'
import EventHandler from './components/EventHandler';
import LoginComponent from './components/LoginComponent';
import NotificationComponent from './components/NotificationComponent';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <Welcome2 />
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

    // PropsValiationExample case validate true
    <PropsValidationExample />

    // Example about state api
    <ExampleStateAPIV2 />

    //Example Event Handling
    <EventHandler />

    //Example handling form
    <LoginComponent />

    //Example about render with condition
    <NotificationComponent />

    </div>
  );
}

export default App;
