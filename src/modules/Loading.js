import React from "react";
import LoadingIcon from "../images/waiting.svg";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__icon">
        <img src={LoadingIcon} alt="" />
      </div>
      Loading data...
    </div>
  );
};

export default Loading;
