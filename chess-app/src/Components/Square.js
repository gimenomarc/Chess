import React from 'react';
import Piece from './Piece';

const Square = ({ piece, isLight, onSquareClick, position }) => {
  const backgroundColor = isLight ? 'lightgray' : 'darkgray';

  const onClick = () => {
    if (onSquareClick) {
      onSquareClick(position);
    }
  };

  return (
    <div
      className='square'
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        width: '12.5%',
        height: '12.5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Piece piece={piece} />
    </div>
  );
};

export default Square;
