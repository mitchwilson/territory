import React from 'react';
import Draggable from './Draggable'

function Piece(image, altText) {

  let drag = (e) => {
    e.dataTransfer.setData("transfer", e.target.id)
  }

  let noAllowDrop = (e) => {
    e.stopPropagation()
  }

  return (
    <div id={altText.replace(" ", "-")} style={{border:"1px red solid", pointerEvents: "all"}} draggable="true" onDragStart={drag} onDragOver={noAllowDrop}>
      <img src={image} alt={altText} className='chess-piece' />
    </div>
  )
}

export default Piece;
