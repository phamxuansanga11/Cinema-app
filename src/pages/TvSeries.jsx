import React from "react";
import { useState } from "react";
import LoadMore from "../components/button/LoadMore";
import MovieGrid from "../components/movieGrid/MovieGrid";
import Search from "./search/Search";
import tmdbApi from "../api/tmdbApi";
import { movieType } from "../api/tmdbApi";
import "../scss/Tv.scss";

function TvSeries(props) {
  const [pageSize, setPageSize] = useState(1);
  const handlePageSizeChange = () => {
    setPageSize((pageSize) => pageSize + 1);
  };
  return (
    <div className="main__content">
      <div className="container">
        <Search />
        <MovieGrid
          pageSize={pageSize}
          getNewApi={tmdbApi.getTvList}
          type={movieType.popular}
        />
        <LoadMore onClick={handlePageSizeChange} />
      </div>
    </div>
  );
}

export default TvSeries;
