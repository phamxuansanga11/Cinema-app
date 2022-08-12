import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi from "../api/tmdbApi";
import { movieType } from "../api/tmdbApi";
import SliderItem from "../components/sliderItem/SliderItem";
import "swiper/css";
import "../scss/Home.scss";
import MovieTrending from "../components/movieType/MovieTrending";
import Modal from "react-modal";
import Loading from "../components/loading/Loading";

function Home(props) {
  const [slider, setSlider] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [movieID, setMovieID] = useState(null);
  const [movieDetail, setMovieDetail] = useState();
  const [loading, setLoading] = useState(false);

  const fetchApiSlider = async () => {
    try {
      setLoading(true);
      const sliderList = await tmdbApi.getMoviesList(movieType.popular, {
        params: {},
      });
      const dataMovieTrending = await tmdbApi.getMoviesList(movieType.popular, {
        params: {},
      });
      setMovieTrending(dataMovieTrending);
      //
      const dataMovieTopRate = await tmdbApi.getMoviesList(
        movieType.top_rated,
        {
          params: {},
        }
      );
      setMovieTopRate(dataMovieTopRate);
      //
      const dataTVPopular = await tmdbApi.getTvList(movieType.popular, {
        params: {},
      });
      setTVPopular(dataTVPopular);
      //
      const dataTVTopRate = await tmdbApi.getTvList(movieType.top_rated, {
        params: {},
      });
      setTVTopRate(dataTVTopRate);
      setSlider(sliderList);
      setLoading(false);
    } catch (error) {
      console.log("API fetchApiSlider fail", error);
    }
  };

  const getVideos = async (category, id) => {
    try {
      setLoading(true);
      const response = await tmdbApi.getVideos(category, id);
      setMovieDetail(response);
      setLoading(false);
      window.scrollTo(0, 0);
    } catch (error) {
      console.log("API getVideos fail..!");
    }
  };

  //Movie Trending
  const [movieTrending, setMovieTrending] = useState([]);
  const [movieTopRate, setMovieTopRate] = useState([]);
  const [TVPopular, setTVPopular] = useState([]);
  const [TVTopRate, setTVTopRate] = useState([]);

  const ref = useRef(null);
  console.log("re-render", ref.current + 1);

  useEffect(() => {
    fetchApiSlider();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (movieID !== null) {
      getVideos("movie", movieID);
    }
  }, [movieID]);

  function openModal(data) {
    setMovieID(data?.id);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="home__page">
        <div className="movie__slider">
          <Swiper scrollbar={{ grabCursor: true }}>
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
          data={movieTrending}
          link="/movies"
        />
        <MovieTrending
          title="Top Rated Movies"
          data={movieTopRate}
          link="/movies"
        />
        <MovieTrending title="Trending TV" data={TVPopular} link="/tv" />
        <MovieTrending title="Top Rated TV" data={TVTopRate} link="/tv" />
      </div>
      <div className="new">
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
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
