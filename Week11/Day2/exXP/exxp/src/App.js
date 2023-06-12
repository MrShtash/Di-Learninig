import logo from './logo.svg';
import './App.css';
import CarC from './components/CarC';

// 1 pt 1 way
// const carinfo = {
//   name: "Ford",
//   model: "Mustang"
// }

function App() {
// 1 pt 2 way
  const carinfoData = {
  name: "Ford",
  model: "Mustang"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}


        {/* 1 pt 1 way */}
        {/* <CarC carinfo={carinfo}/> */}

        {/* 1 pt 2 way */}
        <CarC carinfo={carinfoData}/>
        
      </header>
    </div>
  );
}

export default App;
