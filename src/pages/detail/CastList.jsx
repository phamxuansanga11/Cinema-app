import React from "react";
import CastItem from "./CastItem";
import "../../scss/CastList.scss";

function CastList({ caster }) {
  return (
    <div className="caster">
      <h3>Casts</h3>
      <div className="caster__content">
        {caster?.map((item, idx) => (
          <CastItem key={idx} data={item} />
        ))}
      </div>
    </div>
  );
}

export default CastList;
