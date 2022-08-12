import React from "react";
import { useState, useEffect } from "react";
import MovieGrid from "../components/movieGrid/MovieGrid";
import "../scss/Movie.scss";
import Search from "./search/Search";
import tmdbApi from "../api/tmdbApi";
import { tvType } from "../api/tmdbApi";
import LoadMore from "../components/button/LoadMore";
import Loading from "../components/loading/Loading";

function Movie(props) {
  const [pageSize, setPageSize] = useState(1);

  //
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePageSizeChange = () => {
    setPageSize((pageSize) => pageSize + 1);
  };

  const fetchApi = async () => {
    try {
      setLoading(true);
      const movieList = await tmdbApi.getMoviesList(tvType.popular, {
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

  const fetchDataBySearchText = async () => {
    try {
      const resDataBySearchText = await tmdbApi.search("movie", "thor");
      console.log(resDataBySearchText);
    } catch (error) {
      console.log("fetchSearchText API called fail..!");
    }
  };

  useEffect(() => {
    fetchApi();
  }, [pageSize]);

  useEffect(() => {
    fetchDataBySearchText();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="main__movie container">
      <Search />
      <MovieGrid movie={movie} />
      <LoadMore onClick={handlePageSizeChange} />
    </div>
  );
}

export default Movie;
