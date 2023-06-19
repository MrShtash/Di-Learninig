import logo from './logo.svg';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionInfoField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TransactionForm/>
        <TransactionList/>
      </header>
    </div>
  );
}

export default App;