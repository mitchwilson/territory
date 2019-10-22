import React from 'react'
import Draggable from '../Draggable'
import Droppable from '../Droppable'
import Piece from '../Piece'
import BlackKingImage from '../images/Chess_kdt60.png'
import WhiteKingImage from '../images/Chess_klt60.png'

const wrapperStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center"
}

const itemStyle = {
  padding: "8px",
  color: "#555",
  backgroundColor: "white",
  borderRadius: "3px"
}

const droppableStyle = {
  backgroundColor: '#555',
  width: '250px',
  height: '400px',
  margin: '32px'
}

export default class Bays extends React.Component {
  drop(e) {
    console.log(e)
  }
  render() {
    return (
      <div style={wrapperStyle}>
        <Droppable id="dr1" style={droppableStyle} drop={this.drop}>
          <Draggable id="item1"><Piece image={WhiteKingImage} altText='White King' /></Draggable>
        </Droppable>
        <Droppable id="dr2" style={droppableStyle} drop={this.drop}>
          <Draggable id="item2"><Piece image={BlackKingImage} altText='Black King' /></Draggable>
        </Droppable>
      </div>
    )
  }
}
