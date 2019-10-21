import React from 'react'
import Square from './Square'

import {getCoordForMove, KING_MOVES} from './Moves'

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      files: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      ranks: [ '8', '7', '6', '5', '4', '3', '2', '1'],
      hilites: {}
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

  update(kingPosition) {
    let kingMoves = KING_MOVES.map((move)=> {
      kingPosition = getCoordForMove(kingPosition, move)
      if(kingPosition) return kingPosition
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
    let hilites = {}
    kingHilites.forEach((square)=>{
      hilites[square] = square
    })
    this.setState({
        hilites: hilites || {}
    })
  }

  render() {
    return (
      <div>
        <div className="chess-board">
          {this.squares.map( (key, i) => {
            let cssName = key in this.state.hilites ? "hilite" : "" //this.state.cssName[i]
            return <Square id={key} key={key} cssName={cssName} update={this.update.bind(this)} />
          })}
        </div>
      </div>
    )
  }
}

export default Board;
