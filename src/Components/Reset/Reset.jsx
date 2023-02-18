import React from "react";
import "./Reset.css";

function Reset({ restBoard }) {
  return (
    <>
      <div className="reset-container">
        <button className="reset-btn" onClick={restBoard}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Reset;
