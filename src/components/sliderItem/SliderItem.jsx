import React from "react";
import Watch from "../button/watch/Watch";
import apiConfig from "../../api/apiConfig";
import "./SliderItem.scss";

function SliderItem({ data, handleShowPopup }) {
  return (
    <div
      className="movie__slider-item"
      style={{
        backgroundImage: `url(${apiConfig.originalImage(data.backdrop_path)})`,
      }}
    >
      <div className="wrapper__grid container">
        <div className="wrapper__grid-left">
          <h1 className="name__movie">{data.original_title}</h1>
          <p className="text__movie">{data.overview}</p>
          <Watch data={data} handleShowPopup={() => handleShowPopup()} />
        </div>
        <div className="wrapper__grid-right">
          <img src={apiConfig.w500Image(data.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SliderItem;
