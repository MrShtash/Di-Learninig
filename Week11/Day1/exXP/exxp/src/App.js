import logo from "./logo.svg";
import "./App.css";
// import UserFavoriteColors from './components/UserFavoriteColors';
import ExerciseClass from "./components/Exercise4";

// pt3
// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
// };

function App() {
  // pt 2
  // const hello = <p>Hello world!</p>;
  // const myelement = <h1>I Love JSX!</h1>
  // const sum = 5+5;
  // const msg = <h1>React is {sum} times better than JSX!</h1>
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // pt 2
    // [hello,
    // myelement,
    // msg]

    // pt3
    // <div>
    //   <h3>{user.firstName}</h3>
    //   <h3>{user.lastName}</h3>
    //   <><UserFavoriteColors favAnimals={user.favAnimals}/></>
    // </div>

    // pt4
    <div className="App">
      <ExerciseClass />
    </div>
  );
}

export default App;
