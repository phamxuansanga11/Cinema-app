import React from "react";
import { useState } from "react";
import MovieGrid from "../components/movieGrid/MovieGrid";
import "../scss/Movie.scss";
import Search from "./search/Search";
import tmdbApi from "../api/tmdbApi";
import { tvType } from "../api/tmdbApi";
import LoadMore from "../components/button/LoadMore";

function Movie(props) {
  const [pageSize, setPageSize] = useState(1);
  const handlePageSizeChange = () => {
    setPageSize((pageSize) => pageSize + 1);
  };
  return (
    <div className="main__movie container">
      <Search />
      <MovieGrid
        pageSize={pageSize}
        getNewApi={tmdbApi.getMoviesList}
        type={tvType.popular}
      />
      <LoadMore onClick={handlePageSizeChange} />
    </div>
  );
}

export default Movie;
