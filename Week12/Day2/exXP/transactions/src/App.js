import logo from './logo.svg';
import './App.css';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TransactionList/>
      </header>
    </div>
  );
}

export default App;