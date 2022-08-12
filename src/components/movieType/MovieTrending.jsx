import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./MovieTrending.scss";

function MovieTrending({ title, data, link }) {
  // const [movieCard, setMovieCard] = useState([]);
  // const fetchApiMovieTrend = async () => {
  //   const dataMovieCard = await getNewApi(type, {
  //     params: {},
  //   });
  //   setMovieCard(dataMovieCard);
  // };
  // const ref = useRef(null);
  // console.log("re-render", ref.current + 1);
  // useEffect(() => {
  //   fetchApiMovieTrend();
  // }, [getNewApi, type]);
  return (
    <div className="movie__trending container">
      <div className="movie__trending-title">
        <h2>{title}</h2>
        <Link to={link} className="btn__view-more">
          View more
        </Link>
      </div>
      <div className="movie__trending__slider">
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
          {data.map((data, idx) => {
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
