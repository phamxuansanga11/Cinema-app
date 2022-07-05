import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "./Similar.scss";
import "swiper/css";
import MovieCard from "../movieCard/MovieCard";

function Similar({ similar }) {
  return (
    <div className="similar">
      <div className="similar__title">
        <h2>Similar</h2>
      </div>
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {similar?.map((data, idx) => (
          <SwiperSlide key={idx} className="width15">
            <MovieCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Similar;
