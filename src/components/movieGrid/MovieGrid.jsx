import React from "react";
import MovieCard from "../movieCard/MovieCard";
import { useState, useEffect } from "react";
import "./MovieGrid.scss";

function MovieGrid({ pageSize, getNewApi, type }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const movieList = await getNewApi(type, {
        params: { page: pageSize },
      });

      let data = [...movie];
      movieList.map((item) => {
        data = [...data, item];
      });
      setMovie(data);
    };
    fetchApi();
  }, [pageSize]);

  return (
    <div className="movie__grid">
      {movie.map((data, idx) => (
        <MovieCard key={idx} data={data} />
      ))}
    </div>
  );
}

export default MovieGrid;
