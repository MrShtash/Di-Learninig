import React from 'react';
import Child from './Child'

class ColorC extends React.Component {
    constructor(){
        super();
        this.state = {
            color: 'red',
            show: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({color: 'yellow'});
        }, 5000);
    }
    
    clickMe = () => {
        this.setState({color: 'blue'}); 
    }

    shouldComponentUpdate() {
        return true
    }

    componentDidUpdate(){
        console.log("after update"); // see this in console after componentDidMount is done
    }

    getSnapshotBeforeUpdate(){
        console.log("in getSnapshotBeforeUpdate")
    }

    clickHere = () => {
        this.setState({show: false}); 
    }

    render() {
        return(
            <div>
                <h1>My favorite color is {this.state.color}</h1>
                <button onClick={this.clickMe}>Change color</button>
                <button onClick={this.clickHere}>Delete Header</button>
                {this.state.show && <Child />}
            </div>
        )
    }
}

export default ColorC