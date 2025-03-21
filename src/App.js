import Square from "./Square";
import { useState } from "react";
import Winner from "./DeclareWinner";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (Winner(square) || square[i]) return;

    const nextSquare = square.slice();

    if (xIsNext) nextSquare[i] = "X";
    else nextSquare[i] = "O";

    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  };

  const winner = Winner(square);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={square[1]} onClick={() => handleClick(1)} />
        <Square value={square[2]} onClick={() => handleClick(2)} />
        <Square value={square[3]} onClick={() => handleClick(3)} />
      </div>
      <div className="board-row">
        <Square value={square[4]} onClick={() => handleClick(4)} />
        <Square value={square[5]} onClick={() => handleClick(5)} />
        <Square value={square[6]} onClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square value={square[7]} onClick={() => handleClick(7)} />
        <Square value={square[8]} onClick={() => handleClick(8)} />
        <Square value={square[9]} onClick={() => handleClick(9)} />
      </div>
    </>
  );
}
