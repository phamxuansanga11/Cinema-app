import React from "react";
import apiConfig from "../../api/apiConfig";

function CastItem({ data }) {
  return (
    <div className="caster__content-item">
      <img src={apiConfig.w500Image(data?.profile_path)} alt="" />
      <p>{data.name}</p>
    </div>
  );
}

export default CastItem;
