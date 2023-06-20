const initState = [];

// const usersUrl = `https://jsonplaceholder.typicode.com/users`;
// const imgUrl = `https://robohash.org/1?200x200`;

// export const reducer = (state=initState, action={}) => {
//     return {...state};
// }
async function reducer(state = initState, action){
    if(action.type === 'GET_ROBOTS'){
        await fetch(...)
    }
    return state;
}

export default reducer