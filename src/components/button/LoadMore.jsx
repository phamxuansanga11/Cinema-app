import React from "react";
import "./LoadMore.scss";

function LoadMore({ onClick }) {
  return (
    <div className="button__load-more">
      <button className="btn__load-more" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMore;
