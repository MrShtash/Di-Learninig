import React from 'react';

const clickMe = () => {
        alert('I was clicked')
    }

class EventC extends React.Component {
    constructor(){
        super();
        this.state = {
            isToggleOn: true
        }
    }

    toggle = () => {
        this.setState({isToggleOn: !this.state.isToggleOn})
    }

    handleKeyDown = (e) => {
        if(e.keyCode===13){
            alert(`The Enter key was pressed, your input is: ${e.target.value}`)
        }
    }

    render() {
        return (
            <div>
                <button onClick={clickMe}>Click Me</button><br/>
                <input type="text" placeholder='Press enter Key!' onKeyDown={(e)=>this.handleKeyDown(e)}></input><br/>
                <button onClick={this.toggle}>{this.state.isToggleOn ? "ON" : "OFF"}</button><br/>
            </div>
        )
    }
}

export default EventC