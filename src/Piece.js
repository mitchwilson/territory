import React from 'react';
import Draggable from './Draggable'

function Piece(image, altText) {
  return (
    <Draggable id="piece">
      <img src={image} alt={altText} className='chess-piece' />
    </Draggable>
  )
}

export default Piece;
