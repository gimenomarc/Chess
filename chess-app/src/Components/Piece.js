import React from "react";

const Piece = ({ piece }) => {
  const pieceName = piece ? `${piece.color}${piece.type}` : "";
  const pieceImg = pieceName ? require(`./assets/${pieceName}.svg`).default : "";

  return piece ? <img src={pieceImg} alt={pieceName} className="piece" /> : null;
};

export default Piece;
