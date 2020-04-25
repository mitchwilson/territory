import React from 'react'
import Square from './Square'
import Bays from '../Bays/Bays'
import {getCoordForMove, KING_MOVES, BLACK_PAWN_MOVES, WHITE_PAWN_MOVES} from './Moves'
import 'array-flat-polyfill'
import './Board.css'

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      files: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      ranks: [ '8', '7', '6', '5', '4', '3', '2', '1'],
      hilites: {},
      position: {}
    }
    this.squares = this.state.ranks.map( row => {
      return this.state.files.map( col => {
        return col + row
      })
    }).flat()
  }

  update(coord, pieceId) {
    this.remove(pieceId)
    let pos = Object.assign({}, this.state.position)
    pos[coord] = pieceId
    this.state.position = pos
    let hilites = {}
    let moves = []

    Object.keys(this.state.position).forEach( (key) => {
      let thisPieceId = this.state.position[key]
      let color = thisPieceId.indexOf('Black') > -1 ? 'black' : 'white'
      if(thisPieceId.indexOf('King') > -1) {
        moves = KING_MOVES
      } else {
        if(thisPieceId.indexOf('Black') > -1) {
          moves = BLACK_PAWN_MOVES
        } else {
          moves = WHITE_PAWN_MOVES
        }
      }
      let myMoves = moves.map((path)=> {
        let key2 = getCoordForMove(key, path)
        if(key2) return key2
        else return null
      })
      myMoves.forEach((square)=>{
        hilites[square] = color
      })
    })
    this.setState({
        hilites: hilites || {}
    })
  }
  remove(pieceId) {
    let state = Object.assign({}, this.state)
    Object.keys(this.state.position).forEach( (key) => {
      if(this.state.position[key] === pieceId) {
        delete state.position[key]
      }
    })
  }
  render() {
    return (
      <div>
        <div className="chess-board">
          {this.squares.map( (key, i) => {
            let cssName = key in this.state.hilites ? "hilite" : ""
            let hiliteColor = this.state.hilites[key] || ""
            return <Square id={key} key={key} cssName={cssName + ' ' + hiliteColor} update={this.update.bind(this)} />
          })}
        </div>
        <Bays update={this.update.bind(this)} />
      </div>
    )
  }
}

export default Board;
