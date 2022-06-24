import React from "react";
import { Link } from "react-router-dom";

function Watch({ id }) {
  return (
    <div className="btn__movie">
      <Link to={`/movie/${id}`} className="btn btn__movie-watch__now">
        Watch now
      </Link>
      <button className="btn btn__movie-watch__trailer">Watch trailer</button>
    </div>
  );
}

export default Watch;
