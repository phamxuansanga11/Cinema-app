import React from "react";
import { useState } from "react";
import LoadMore from "../components/button/LoadMore";
import MovieGrid from "../components/movieGrid/MovieGrid";
import Search from "./search/Search";
import tmdbApi from "../api/tmdbApi";
import { tvType } from "../api/tmdbApi";
import "../scss/Tv.scss";
import { useEffect } from "react";
import Loading from "../components/loading/Loading";

function TvSeries(props) {
  const [pageSize, setPageSize] = useState(1);
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePageSizeChange = () => {
    setPageSize((pageSize) => pageSize + 1);
  };

  const fetchListTV = async () => {
    try {
      setLoading(true);
      const movieList = await tmdbApi.getTvList(tvType.popular, {
        params: { page: pageSize },
      });
      let data = [...movie];
      movieList.map((item) => {
        data = [...data, item];
      });
      setMovie(data);
      setLoading(false);
    } catch (error) {
      console.log("API movieList fail..!");
    }
  };

  useEffect(() => {
    fetchListTV();
  }, [pageSize]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="main__content">
      <div className="container">
        <Search />
        <MovieGrid movie={movie} />
        <LoadMore onClick={handlePageSizeChange} />
      </div>
    </div>
  );
}

export default TvSeries;
