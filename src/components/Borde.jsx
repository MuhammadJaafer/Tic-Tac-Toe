import React from "react";

const Borde = ({ borde, handleBorde }) => {
  const X = (
    <div className="x">
      <div className="x2 blue-glow"></div>
      <div className="x1 blue-glow"></div>
    </div>
  );
  const O = <div className="o red-glow"></div>;
  //handle box click
  const handleClick = (e) => {
    const index = e.target.getAttribute("index");
    handleBorde(index);
  };
  return (
    <div className="grid-borde">
      <div className="h-line-1 line"></div>
      <div className="h-line-2 line"></div>
      <div className="v-line-1 line"></div>
      <div className="v-line-2 line"></div>
      {borde.map((box, i) => (
        <div
          className="box"
          key={i}
          index={i}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          {box === "o" ? O : ""}
        </div>
      ))}
    </div>
  );
};

export default Borde;
