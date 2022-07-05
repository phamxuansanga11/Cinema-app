import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./MovieTrending.scss";

function MovieTrending({ title, type, getNewApi, link }) {
  const [movieCard, setMovieCard] = useState([]);
  useEffect(() => {
    const fetchApiMovieTrend = async () => {
      const dataMovieCard = await getNewApi(type, {
        params: {},
      });
      setMovieCard(dataMovieCard);
    };
    fetchApiMovieTrend();
  }, [getNewApi, type]);
  console.log(movieCard);
  return (
    <div className="movie__trending container">
      <div className="movie__trending-title">
        <h2>{title}</h2>
        <Link to={link}>
          <button className="btn__view-more">View more</button>
        </Link>
      </div>
      <div className="movie__trending__slider">
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
          {movieCard.map((data, idx) => {
            return (
              <SwiperSlide key={idx}>
                <MovieCard data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieTrending;
