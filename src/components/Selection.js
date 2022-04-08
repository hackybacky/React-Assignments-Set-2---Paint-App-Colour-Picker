import React, { useState, useEffect } from "react";
import "./../styles/Child.css";

export default function Selection(props) {
  const { applyColor } = props;
  const [background, setBackground] = useState({ background: "" });
  useEffect(() => {
    console.log("here", background);
  }, [background]);
  return (
    <div
      className="fix-box"
      style={background}
      onClick={() => applyColor(setBackground)}
    >
      <h2 className="subheading"> Selection </h2>
    </div>
  );
}
