import React from "react";
import Chessboard from "chessboardjsx";
import Chess from "chess.js";

const Board = ({ fen, onMove }) => {
  const handleMove = ({ from, to }) => {
    const move = { from, to, promotion: "q" };

    const game = new Chess(fen);
    const result = game.move(move);

    if (result) {
      onMove(move);
    }
  };

  return (
    <Chessboard
      position={fen}
      onDrop={({ sourceSquare, targetSquare }) =>
        handleMove({ from: sourceSquare, to: targetSquare })
      }
      boardStyle={{
        borderRadius: "5px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
      }}
      draggable
    />
  );
};

export default Board;
