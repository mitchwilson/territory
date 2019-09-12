import React from 'react';

function Piece(image, altText) {
  return (
    <img src={image} alt={altText} className='chess-piece' />
  )
}

export default Piece;
