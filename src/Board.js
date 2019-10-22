import React from 'react'
import Square from './Square'

import {getCoordForMove, KING_MOVES} from './Moves'

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

  componentDidMount = () => {

  }

  hilite = () => {
    this.state.position.forEach( (piece, i) => {
        console.log(piece, i)
    })
  }

  update(kingPosition, pieceId) {console.log("update", pieceId)
    Object.keys(this.state.position).forEach( (key) => {
      if(this.state.position[key] === pieceId) {
        delete this.state.position[key]
      }
    })
    // NOTE: DONT UPDATE STATE DIRECTLY.
    this.state.position[kingPosition] = pieceId
    let hilites = {}
    Object.keys(this.state.position).forEach( (key) => {
      let kingMoves = KING_MOVES.map((move)=> {
        key = getCoordForMove(key, move)
        if(key) return key
        else return null
      })
      var nullIndex;
      kingMoves.forEach((entry, i)=>{
        if(entry === null) {
          if(nullIndex===undefined) {
            nullIndex = i;
          }
        }
      })
      let kingHilites = kingMoves.slice()
      if(nullIndex) {
        kingHilites.splice(nullIndex)
      }
      kingHilites.forEach((square)=>{
        hilites[square] = square
      })
    })
    this.setState({
        hilites: hilites || {}
    })
  }
  remove(id) {
    // let pos = Object.assign({}, this.state.position)
    // delete pos.id
    // console.log(pos)
    // this.setState({
    //   position: {}
    // })
  }
  render() {
    return (
      <div>
        <div className="chess-board">
          {this.squares.map( (key, i) => {
            let cssName = key in this.state.hilites ? "hilite" : ""
            return <Square id={key} key={key} cssName={cssName} remove={this.remove.bind(this)} update={this.update.bind(this)} />
          })}
        </div>
      </div>
    )
  }
}

export default Board;
