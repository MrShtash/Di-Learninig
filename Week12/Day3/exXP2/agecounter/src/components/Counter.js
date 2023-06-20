import {useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from '../redux/actions';

const Counter = props => {
    const age = useSelector((state)=> state.age);
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Your age:</h1>
            <h2>{age}</h2>
            <button onClick={() => dispatch(INCREMENT())}
                style = {{borderRadius: '5px', 
                        height: '30px', 
                        fontSize: '15px', 
                        backgroundColor: 'lightblue',
                        width: '50px',
                        fontWeight: 'bold',
                        color: 'black',
                        }}>
                            +
            </button>
            <button onClick={() => dispatch(DECREMENT())}
                style = {{borderRadius: '5px', 
                        height: '30px', 
                        fontSize: '15px', 
                        backgroundColor: 'lightblue',
                        width: '50px',
                        fontWeight: 'bold',
                        color: 'black',
                        }}>
                            -
            </button>
        </div>
    )
}
export default Counter