import React from "react";

class Garage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <p>Who lives in my {this.props.size} garage?</p>
            </div>
        )
    }
}

// //OR:
// function Garage(props) {
//     return <p>Who lives in my {props.size} garage?</p>
// }

export default Garage