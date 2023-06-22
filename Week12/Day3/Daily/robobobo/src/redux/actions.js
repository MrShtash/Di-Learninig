export const setUsers = (users) => {

  return (dispatch) => {
      setTimeout(() => {
          dispatch({
              type: 'SET_ROBO',
              payload: users
          })
      }, 1000);
  };
};

export const setLoading = (loading) => {
  return {
      type: 'SET_LOADING',
      loading
  };
};

export const getUsers = () => {
  return (dispatch) => {
      dispatch(setLoading(true));
      return fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(response => response.json())
          .then(data => {             
              dispatch(setUsers(data));
              dispatch(setLoading(false));
          })
          .catch(error => {
              console.error('Error:', error);
              dispatch(setLoading(false));
          });
  };
};




export const searchRobots = (inputsearch) => {
  console.log("in search robot", inputsearch);
  return {
    type: 'SEARCH',
    inputsearch: inputsearch
  }
};