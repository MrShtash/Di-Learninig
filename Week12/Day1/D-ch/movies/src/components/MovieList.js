// import { useState } from "react";
import { connect } from "react-redux";
import { movieInfo } from "../redux/actions";

const Movie = (props) => {
  console.log(props.movies[0].title);
  return (
    <div>
      <h1>Redux Movies</h1>
      <div>
        <h2>Movie List</h2>
        {props.movies.map((movie, index) => (
          <div>
            <p key={index}>{movie.title}</p>
            <button onClick={() => props.handleSelect(movie)}>Details</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Movie Details</h2>
        <h3>Select Movie</h3>
        {props.selected && (
          <div>
            <p>Title: {props.selected.title}</p>
            <p>Release Date: {props.selected.releaseDate}</p>
            <p>Rating: {props.selected.rating}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// access to data
const mapStateToProps = (state) => {
  return {
    movies: state.list,
    selected: state.selected,
  };
};
// do
const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect: (movie) => dispatch(movieInfo(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);