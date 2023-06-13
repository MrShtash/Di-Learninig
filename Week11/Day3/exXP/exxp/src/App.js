import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary'
import React from 'react';
import ColorC from './components/Color';

class BuggyCounter extends React.Component{
    constructor(){
        super();
        this.state = {
          count:0
        };
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
      };

    render(){
        if(this.state.count > 5){
            throw Error('I Crashed!')
          }
        return(
            <div>
              {this.state.count}
              <button onClick={this.handleClick}>Add Points</button>
            </div>
        );
    }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* pt1 */}
        {/* <h1>Click on the numbers to increase the counters</h1>
        <h2>The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component</h2>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <ErrorBoundary>
          <BuggyCounter/>
          <BuggyCounter/>
        </ErrorBoundary>

        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>

        <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
        <>
          <BuggyCounter/>
        </> */}


        {/* pt2 */}
        <ColorC/>
      </header>
    </div>
  );
}

export default App;
