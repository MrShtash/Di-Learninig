import React from "react";

class PhoneC extends React.Component {
    constructor(){
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }

    clickMe = () => {
        this.setState({color: 'red'});
    }

    render(){
        return(
            <div>
                <h1>My phone is a {this.state.brand}</h1>
                <p>It is a {this.state.color} {this.state.model} from {this.state.year}</p>
                <button onClick={this.clickMe}>Change color</button>
            </div>
        )
    }
}

export default PhoneC