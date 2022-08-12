import React from "react";
import MovieCard from "../movieCard/MovieCard";
import "./MovieGrid.scss";

function MovieGrid({ movie }) {
  return (
    <>
      <div className="movie__grid">
        {movie.map((data, idx) => (
          <MovieCard key={idx} data={data} />
        ))}
      </div>
    </>
  );
}

export default MovieGrid;
