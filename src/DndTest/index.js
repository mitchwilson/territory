import React from 'react'
import Draggable from '../Draggable'
import Droppable from '../Droppable'
import Piece from '../Piece'
import BlackKingImage from '../images/Chess_kdt60.png'
import WhiteKingImage from '../images/Chess_klt60.png'

const wrapperStyle = {
  width: "100%",
  padding: "32px",
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

export default class DndTest extends React.Component {
  render() {
    return (
      <div style={wrapperStyle}>
        <Droppable id="dr1" style={droppableStyle}>
          <Draggable id="item1" style={{margin:'8px'}}>{Piece(WhiteKingImage, 'White King')}</Draggable>
        </Droppable>
        <Droppable id="dr2" style={droppableStyle}>
          <Draggable id="item2" style={{margin:'8px'}}>{Piece(BlackKingImage, 'Black King')}</Draggable>
        </Droppable>
      </div>
    )
  }
}
