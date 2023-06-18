import logo from './logo.svg';
import './App.css';
import Movie from './components/MovieList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Movie/>
      </header>
    </div>
  );
}

export default App;
