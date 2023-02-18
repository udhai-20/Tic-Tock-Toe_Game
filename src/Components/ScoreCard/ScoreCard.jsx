import React from "react";
import "./ScoreCard.css";
function ScoreCard({ scores, xPlayings }) {
  console.log("  xplayings:", xPlayings);
  const { xScore, oScore } = scores;
  return (
    <>
      <div className="scoreCard">
        <span className={`score x-score ${!xPlayings && "inactive"}`}>
          X-{xScore}
        </span>
        <span className={`score o-score ${xPlayings && "inactive"}`}>
          O-{oScore}
        </span>
      </div>
    </>
  );
}

export default ScoreCard;
