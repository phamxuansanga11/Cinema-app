import React from "react";
import "./BtnDetail.scss";

function BtnDetail({ btn }) {
  return (
    <div className="btn__option-detail">
      <p>{btn.name}</p>
    </div>
  );
}

export default BtnDetail;
