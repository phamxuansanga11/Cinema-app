import React from "react";
import "./bgHeader.scss";
import backgroundHeader from "../../img/footer-bg.jpg";

function bgHeader({ title }) {
  return (
    <div
      className="background__header"
      style={{
        backgroundImage: `url(${backgroundHeader})`,
      }}
    >
      <h2>{title}</h2>
    </div>
  );
}

export default bgHeader;
