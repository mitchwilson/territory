import React from 'react'
import Draggable from './Draggable'
import Droppable from './Droppable'
import Piece from '../Pieces/Piece'
import BlackKingImage from '../Pieces/Chess_kdt60.png'
import WhiteKingImage from '../Pieces/Chess_klt60.png'
import BlackPawnImage from '../Pieces/Chess_pdt60.png'
import WhitePawnImage from '../Pieces/Chess_plt60.png'

const wrapperStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center"
}

const droppableStyle = {
  backgroundColor: '#555',
  width: '250px',
  height: '400px',
  margin: '32px'
}

export default class Bays extends React.Component {
  drop = (e) => {
    this.props.update('', e.dataTransfer.getData('transfer'))
  }
  render() {
    return (
      <div style={wrapperStyle}>
        <Droppable id="dr1" style={droppableStyle} drop={this.drop}>
          <Draggable id="item1"><Piece image={WhiteKingImage} altText='White King' /></Draggable>
          <Draggable id="item2"><Piece image={WhitePawnImage} altText='White Pawn 1' /></Draggable>
          <Draggable id="item3"><Piece image={WhitePawnImage} altText='White Pawn 2' /></Draggable>
          <Draggable id="item4"><Piece image={WhitePawnImage} altText='White Pawn 3' /></Draggable>
        </Droppable>
        <Droppable id="dr2" style={droppableStyle} drop={this.drop}>
          <Draggable id="item5"><Piece image={BlackKingImage} altText='Black King' /></Draggable>
          <Draggable id="item6"><Piece image={BlackPawnImage} altText='Black Pawn 1' /></Draggable>
          <Draggable id="item7"><Piece image={BlackPawnImage} altText='Black Pawn 2' /></Draggable>
          <Draggable id="item8"><Piece image={BlackPawnImage} altText='Black Pawn 3' /></Draggable>
        </Droppable>
      </div>
    )
  }
}
