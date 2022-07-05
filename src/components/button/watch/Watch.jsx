import React from "react";
import { Link } from "react-router-dom";

function Watch({ data, handleShowPopup }) {
  return (
    <div className="btn__movie">
      <Link to={`/movie/${data.id}`} className="btn btn__movie-watch__now">
        Watch now
      </Link>
      <button
        className="btn btn__movie-watch__trailer"
        onClick={() => handleShowPopup()}
      >
        Watch trailer
      </button>
    </div>
  );
}

export default Watch;
