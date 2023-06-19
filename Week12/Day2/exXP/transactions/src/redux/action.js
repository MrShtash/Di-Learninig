export const insert_transaction = (data) => {
    console.log("insert", data);
    return {
        type: 'INSERT',
        payload: data
    }
}
export const update_transaction = (data) => {
    return {
        type: 'UPDATE',
        payload: data
    }
}
export const delete_transaction = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}
export const update_current_id = (id) => {
    return {
        type: 'UPDATE-INDEX',
        payload: id
    }
}