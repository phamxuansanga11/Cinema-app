import React from "react";
import "./IframeVideo.scss";

function IfameVideo({ data }) {
  return (
    <div className="iframe__video">
      <div className="iframe__video-title">
        <h2>{data.name}</h2>
      </div>
      <iframe
        title="popup"
        className="popup__video"
        src={`https://www.youtube.com/embed/${data.key}`}
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default IfameVideo;
