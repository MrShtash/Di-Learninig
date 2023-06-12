import React from 'react';
import Garage from './Garage'

// pt 1 way 1
// class CarC extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             color: 'red'
//         }
//     }
//     render(){
//         const {carinfo} = this.props
//         return(
//             <div>
//                 <h2>This car is {this.state.color} {carinfo.model}</h2>
//             </div>
//         )
//     }
// }

// pt 1 way 2
class CarC extends React.Component {
    constructor(){
        super();
        this.state = {
            color: 'red'
        }
    }
    render() {
        const {carinfo} = this.props;
        const {model, name} = carinfo;
        return (
            <div>
                <h1><Garage size="big"/></h1>
                <h1>This car is {this.state.color} {model}</h1>
            </div>
        )
    }
}

export default CarC