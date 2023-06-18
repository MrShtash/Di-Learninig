const initState = { // default value
    count: 0
}

// call action

export const reducer = (state = initState, action = {}) => {
    switch(action.type){
        case 'INCREASE_COUNT':
            return{...state, count: state.count+1}
        case 'DECREASE_COUNT':
            return{...state, count: state.count-1}
        default:
            return {...state}
    }
}