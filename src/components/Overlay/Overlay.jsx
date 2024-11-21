import React from "react";

const Overlay = ({ className = "", onClick }) => {
  return (
    <div className={`overlay btn-toggle ${className}`} onClick={onClick}></div>
  );
};

export default Overlay;
