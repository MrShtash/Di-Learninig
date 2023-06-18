import {connect} from "react-redux";
import {IncreaseCounter, DecreaseCounter} from "../redux/actions";


const Counter = (props) => {
    return(
        <>
            <button onClick={()=>props.increment()}>+</button>
            {props.count}
            <button onClick={()=>props.decrement()}>-</button>
        </>
    )
}
// access to data
const mapStateToProps = state => {
    return{
        count:state.count
    }
}
// do
const mapDispatchToProps = dispatch => {
    return{
        increment: () => dispatch(IncreaseCounter()),
        decrement: () => dispatch(DecreaseCounter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)