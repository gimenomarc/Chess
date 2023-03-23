import React, { useState } from "react";
import Board from "./Board";
import Chess from "chess.js";

const App = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());

  const handleMove = (move) => {
    game.move(move);
    setFen(game.fen());
  };

  return (
    <div className="app">
      <Board fen={fen} onMove={handleMove} />
    </div>
  );
};

export default App;
