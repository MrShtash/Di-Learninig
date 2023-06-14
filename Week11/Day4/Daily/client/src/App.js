import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
        
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message: null,
      formValue: ''
    }
  }

  async componentDidMount(){
    const url = `http://localhost:3001/api/hello`;
    try{
      const resText = await fetch(url);
      const res = await resText.text();
      this.setState({message: res})
      // console.log('res:', res);
    } catch (e) {
      console.log(e);
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const message = document.getElementById('search').value;
    const options = {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify({message})
    };
    const url = `http://localhost:3001/api/world`;
    try{
      const resJson = await fetch(url, options);
      const res = await resJson.json();
      console.log('res:', res);
      // this.props.setMessage(res.message)
      this.setState({formValue: '', message: res.message})
    } catch (e) {
      console.log(e);
    }
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1>{this.state.message}</h1>
          <h2>Post to Server</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text"
                  placeholder="Type here"
                  id="search"
                  value={this.state.formValue}
                  onChange={(e) => this.setState({ formValue: e.target.value })}/>
            <input type="submit" value="Submit"/>
            {/* <p>{this.res.message}</p> */}
          </form>
        </header>
      </div>
    )
  }
}

export default App;