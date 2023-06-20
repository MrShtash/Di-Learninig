import './Robo.css'
import React from 'react';
import {connect} from 'react-redux';
import Robot from './Robot';
import RoboContainer from './RoboContainer';

const usersUrl = `https://jsonplaceholder.typicode.com/users`;
const imgUrl = `https://robohash.org/1?200x200`;

class Robo extends React.Component {
    render(){
        return(
            <div className=''>
                <div className='tc'>
                    <h1 className="title">ROBOFRIENDS</h1>
                    <div className='pa2'>
                        <input type="search"
                            placeholder="Search Robots"
                            className='pa3 ba b--green bg-lightest-blue'/>
                    </div>
                    <RoboContainer/>
                </div>
            </div>
        )
    }
}


// function Robo (props) {
//     store.dispatch({type: "GET_ROBOT"})

//         return(
//             <div className=''>
//                 <div className='tc'>
//                     <h1 className="title">ROBOFRIENDS</h1>
//                     <div className='pa2'>
//                         <input type="search"
//                             placeholder="Search Robots"
//                             className='pa3 ba b--green bg-lightest-blue'/>
//                     </div>
//                     <div className='RoboContainer'>
//                         <Robot/>
//                         <Robot/>
//                         <Robot/>
//                         <Robot/>
//                         <Robot/>
//                     </div>
//                 </div>
//             </div>
//         )

// }

// export default connect()(Robo)
export default Robo