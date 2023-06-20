export const INSERT = 'INSERT';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const UPDATE_INDEX = 'UPDATE_INDEX';
export const USERS = 'USERS';

// thunk
// export const getusers = () => {
//     return (dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => {
//             dispatch({type: USERS, payload: data})
//         })
//     }
// }
// or:
export const getusers = () => (dispatch, getState) => {
    console.log(getState().currentIndex); // getState - store
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            dispatch({type: USERS, payload: data})
        })
    }

export const insert_trx = (data) => {
    return {
        type: INSERT,
        payload: data
    }

}

export const update_trx = (data) => {
    return {
        type: UPDATE,
        payload: data     
    }
}
  
export const delete_trx = (indx) => {
    return {
        type: DELETE,
        payload: indx 
    }
}

export const update_index = (indx) => {
    return {
        type: UPDATE_INDEX,
        payload: indx
    } 
}