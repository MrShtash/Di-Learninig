// let datarobots = require("../data.json");
import robots from '../components/users.json';
// export const SEARCH = 'SEARCH';

const initState = {
    list: robots,
   
}

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "SEARCH":
      console.log("reducer insert", action.inputsearch);
      console.log("list", state.list.filter((robot) => robot.name.toLowerCase().includes(action.inputsearch.toLowerCase())));
      return {
        ...state,
        list: robots.filter((robot) => robot.name.toLowerCase().includes(action.inputsearch.toLowerCase())),
      };
    default:
      return state;
  }
};