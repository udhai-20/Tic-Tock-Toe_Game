import React from "react";
import Box from "../Box/Box";
import "./Board.css";
function Boad({ board, onClick }) {
  console.log(board);
  return (
    <>
      <div className="board">
        {board.map((el, idx) => {
          return (
            <div key={idx}>
              <Box value={el} onClick={() => el == null && onClick(idx)} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Boad;
