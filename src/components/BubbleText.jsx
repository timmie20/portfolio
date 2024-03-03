import React from "react";

const BubbleText = () => {
  return (
    <h1 className="text-whiteLight text-center text-9xl font-light">
      {"Timilehin".split("").map((child, idx) => (
        <span className="hoverText" key={idx}>
          {child}
        </span>
      ))}
    </h1>
  );
};

export default BubbleText;
