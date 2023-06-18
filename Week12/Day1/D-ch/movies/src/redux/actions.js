// hont from class theory exercise:
// export const changePropOne = (value) => {
//     return {
//        type:'PROP_ONE',
//        payload:value
//     }
// }

export const movieInfo = (movie) => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie,
  };
};
