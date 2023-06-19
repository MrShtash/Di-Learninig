const initState = {
    list: [],
    currentIndex: null
}
export const reducer = (state = initState, action = {}) => {
    if (action.type === "INSERT") {
        const newList = [...state.list]; //copy of the list
        newList.push(action.payload); //push the new transaction
        return {...state, list: newList} //return the new state
    }
    return {...state}
}
