export const searchRobots = (inputsearch) => {
    console.log("insert action", inputsearch);
    return {
      type: 'SEARCH',
      inputsearch: inputsearch,
    }
  }