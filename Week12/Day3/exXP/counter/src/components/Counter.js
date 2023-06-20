import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {IncrementCounter, DecrementCounter, IncrementIfOdd, IncrementAsync} from '../redux/actions';

const Counter = (props) => {
    const count = useSelector((state)=> state.count);
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Clicked:</h1>
            <h3>{count} times</h3>
            <button onClick={() => dispatch(IncrementCounter())}
                style = {{borderRadius: '5px', 
                        height: '30px', 
                        fontSize: '15px', 
                        backgroundColor: 'lightblue'}}>
                    +
                </button>
            <button onClick={() => dispatch(DecrementCounter())}
                style = {{borderRadius: '5px', 
                        height: '30px', 
                        fontSize: '15px', 
                        backgroundColor: 'lightblue'}}>
                    -
                </button>
            <button onClick={() => dispatch(IncrementIfOdd())}
                style = {{borderRadius: '5px', 
                        height: '30px', 
                        fontSize: '15px', 
                        backgroundColor: 'lightblue'}}>
                    Increment of odd
                </button>
            <button onClick={() => dispatch(IncrementAsync())}
                style = {{borderRadius: '5px', 
                        height: '30px', 
                        fontSize: '15px', 
                        backgroundColor: 'lightblue'}}>
                    Increment async
                </button>
        </div>
    )
}

export default Counter