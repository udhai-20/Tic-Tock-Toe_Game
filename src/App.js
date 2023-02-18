import logo from "./logo.svg";
import "./App.css";
import Box from "./Components/Box/Box";
import Boad from "./Components/Board/Boad";
import { useState } from "react";
import ScoreCard from "./Components/ScoreCard/ScoreCard";
import Reset from "./Components/Reset/Reset";

function App() {
  const Win_Conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [xPlayings, setXplayings] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setFGameOver] = useState(false);
  const handleClick = (boxindex) => {
    console.log("  boxindex:", boxindex);
    let newBoard = board.map((value, idx) => {
      if (idx === boxindex) {
        return xPlayings === true ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkWinner(newBoard);
    if (winner) {
      if (winner == "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
    // console.log("scores", scores);
    setBoard(newBoard);
    setXplayings(!xPlayings);
  };
  const checkWinner = (board) => {
    console.log(board);
    for (let i = 0; i < Win_Conditions.length; i++) {
      const [x, y, z] = Win_Conditions[i];

      if (board[x] && board[x] === board[y] && board[y] == board[z]) {
        // console.log("winner", board[x]);
        setFGameOver(true);
        return board[x];
      }
    }
  };
  const restBoard = () => {
    setFGameOver(false);
    setBoard(new Array(9).fill(null));
  };
  return (
    <div>
      {gameOver && (
        <div className="heading">
          <h3> {xPlayings ? "O Win the Battle" : "X Win the Battel"}</h3>
        </div>
      )}
      <ScoreCard scores={scores} xPlayings={xPlayings} />
      <Boad board={board} onClick={gameOver ? restBoard : handleClick} />
      <Reset restBoard={restBoard} />
    </div>
  );
}

export default App;
