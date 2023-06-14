import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  NavLink,
  // Link
} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import Shop from './components/Shop';
import Postlist from './components/PostList';
import DataEx1 from './components/Example1';
import DataEx2 from './components/Example2';
import DataEx3 from './components/Example3';
import ErrorBoundary from './components/ErrorBoundary'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <nav>
//           <NavLink to='/'>Home</NavLink>
//           <NavLink to='/profile'>Profile</NavLink>
//           <NavLink to='/shop'>Shop</NavLink>
//         </nav>
//         <ErrorBoundary>
//         <Routes>
//               <Route path='/' element={<Home/>}/>
//               <Route path='/profile/' element={<Profile/>}/>
//               <Route path='/shop' element={<Shop/>}/>
//           </Routes>
//         </ErrorBoundary> */}

//         {/* <Postlist/> */}

//         <nav>
//           <NavLink to='/ex1'>Example1</NavLink>
//           <NavLink to='/ex2'>Example2</NavLink>
//           <NavLink to='/ex3'>Example3</NavLink>
//         </nav>
//         {/* <ErrorBoundary> */}
//         <Routes>
//               <Route path='/ex1' element={<DataEx1/>}>Example1</Route>
//               <Route path='/ex2' element={<DataEx2/>}>Example1</Route>
//               <Route path='/ex3' element={<DataEx3/>}>Example1</Route>
//           </Routes>
//         {/* </ErrorBoundary> */}

//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  postData = async() => {
    try {
      const data = {
          key1: 'myusername',
          email: 'mymail@gmail.com',
          name: 'Isaac',
          lastname: 'Doe',
          age: 27
      };

      const response = await fetch('https://webhook.site/e74ff67c-ff04-414a-8983-156030dfa341', {
        method: 'post',
        mode: 'no-cors',
        headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json' 
            },
        body: JSON.stringify(data),

      });
      console.log(response);
    }
    catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.postData}>Press Me To Post Some Data</button>
      </div>
    );
  }
}

export default App;