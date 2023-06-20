import React from 'react';
import Robot from './Robot';
import {connect} from 'react-redux';

class RoboContainer extends React.Component{
    constructor(props){
        super(props);
        this.props.dispatch({type:"GET_ROBOTS"});
    }
    render(){
        return(
            <div className='RoboContainer'>
                <Robot/>
                <Robot/>
                <Robot/>
                <Robot/>
                <Robot/>
            </div>
        )
    }
}

// export default RoboContainer
export default connect()(RoboContainer)