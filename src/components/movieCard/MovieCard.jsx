import React from "react";
import apiConfig from "../../api/apiConfig";
import "./MovieCard.scss";

function MovieCard({ data }) {
  return (
    <div className="movie__card">
      <a href="/">
        <div className="movie__card-img">
          <img src={`${apiConfig.originalImage(data.poster_path)}`} alt="" />
          <div className="overplay">
            <button className="overplay__btn">
              <i className="fa-solid fa-play "></i>
            </button>
          </div>
        </div>
        <h2 className="movie__card-name">{data.original_title}</h2>
      </a>
    </div>
  );
}

export default MovieCard;
