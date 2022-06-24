import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi from "../api/tmdbApi";
import { movieType } from "../api/tmdbApi";
import SliderItem from "../components/sliderItem/SliderItem";
import "swiper/css";
import "../scss/Home.scss";
import MovieTrending from "../components/movieType/MovieTrending";

function Home(props) {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    const fetchApiSlider = async () => {
      const sliderList = await tmdbApi.getMoviesList(movieType.popular, {
        params: {},
      });
      setSlider(sliderList);
    };
    fetchApiSlider();
  }, []);
  console.log(slider);
  return (
    <div className="home__page">
      <div className="movie__slider">
        <Swiper>
          {slider.map((data, idx) => {
            return (
              <SwiperSlide key={idx}>
                <SliderItem data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <MovieTrending
        title="Trending Movies"
        getNewApi={tmdbApi.getMoviesList}
        type={movieType.popular}
        link="/movie"
      />
      <MovieTrending
        title="Top Rated Movies"
        getNewApi={tmdbApi.getMoviesList}
        type={movieType.top_rated}
        link="/movie"
      />
      <MovieTrending
        title="Trending TV"
        getNewApi={tmdbApi.getTvList}
        type={movieType.popular}
        link="/tv"
      />
      <MovieTrending
        title="Top Rated TV"
        getNewApi={tmdbApi.getTvList}
        type={movieType.top_rated}
        link="/tv"
      />
    </div>
  );
}

export default Home;
