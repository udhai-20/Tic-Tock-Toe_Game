import React from "react";
import "./Box.css";
function Box({ value, onClick }) {
  // console.log("value", value);
  const style = value === "X" ? "box x" : "box o";
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Box;
