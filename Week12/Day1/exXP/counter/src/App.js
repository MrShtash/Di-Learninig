import logo from './logo.svg';
import './App.css';
// import {store} from './reduces/index';
import {connect} from 'react-redux';
import React from 'react';
// import Test from './components/test';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           <Counter count='0'/>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('store=>',state)
  return {
  }
}

// export default App;
export default connect(mapStateToProps, mapStateToProps)(App);