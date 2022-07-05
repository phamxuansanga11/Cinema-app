import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi from "../api/tmdbApi";
import { movieType } from "../api/tmdbApi";
import SliderItem from "../components/sliderItem/SliderItem";
import "swiper/css";
import "../scss/Home.scss";
import MovieTrending from "../components/movieType/MovieTrending";
import Modal from "react-modal";

function Home(props) {
  const [slider, setSlider] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [movieID, setMovieID] = useState(null);
  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    const fetchApiSlider = async () => {
      const sliderList = await tmdbApi.getMoviesList(movieType.popular, {
        params: {},
      });
      setSlider(sliderList);
    };
    fetchApiSlider();
    window.scrollTo(0, 0);
  }, []);

  const getVideos = async (category, id) => {
    const response = await tmdbApi.getVideos(category, id, { params: {} });
    setMovieDetail(response);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (movieID !== null) {
      getVideos("movie", movieID);
    }
  }, [movieID]);

  console.log(slider);
  function openModal(data) {
    setMovieID(data?.id);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="home__page">
        <div className="movie__slider">
          <Swiper>
            {slider.map((data, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <SliderItem
                    data={data}
                    handleShowPopup={() => openModal(data)}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <MovieTrending
          title="Trending Movies"
          getNewApi={tmdbApi.getMoviesList}
          type={movieType.popular}
          link="/movies"
        />
        <MovieTrending
          title="Top Rated Movies"
          getNewApi={tmdbApi.getMoviesList}
          type={movieType.top_rated}
          link="/movies"
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
      <div className="new">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <iframe
            className="iframe__trailer"
            src={`https://www.youtube.com/embed/${
              movieDetail ? movieDetail[0]?.key : null
            }`}
            frameBorder="0"
            title="popup__video-title"
          ></iframe>
          <button className="btn__close" onClick={closeModal}>
            X
          </button>
        </Modal>
      </div>
    </>
  );
}

export default Home;
