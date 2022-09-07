import React, { useEffect, useState } from "react";

export default function Borde({ borde, handleClick }) {
  const X = (
    <div className="x">
      <div className="x2 blue-glow"></div>
      <div className="x1 blue-glow"></div>
    </div>
  );
  const O = <div className="o red-glow"></div>;

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
          {box === "x" ? X : ""}
        </div>
      ))}
    </div>
  );
}
