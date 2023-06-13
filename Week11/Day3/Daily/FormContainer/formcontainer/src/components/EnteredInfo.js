import React from 'react';

class EnterInfo extends React.Component {
    constructor(props){
        super(props)
        console.log('props:', props);
    }


    render(){
        return(
            <div id="enteredInfo">
                <h2>Entered information</h2>
                <p>Your name: </p>
                <p>Your age: </p>
                <p>Your gender: </p>
                <p>Your destination: </p>
                <p>Your dietary restrictions: </p>
                <span>**Nuts free: </span><br/>
                <span>**Lactose free: </span><br/>
                <span>**Vegan: </span><br/>
            </div>
        )
    }
}

export default EnterInfo
