const initState = {
  list: [],
  filteredList:[],
  loading: false

}

export const reducer = (state = initState, action = {}) => {
switch (action.type) {
  case "SET_ROBO":
    return {
      ...state,
      list: action.payload,
    };
  case "SEARCH":
    console.log("in reducer robot", action.inputsearch);
    return {
      ...state,
      filteredList: state.list.filter((robot) => robot.name.toLowerCase().includes(action.inputsearch.toLowerCase())),
    };
  case "SET_LOADING":
    return {
      ...state,
      loading: action.loading
      };  
  default:
    return state;
}
};
