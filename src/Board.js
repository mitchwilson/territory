import React from 'react'
import Square from './Square'
import Piece from './Piece'
import BlackKingImage from './images/45px-Chess_kdt45.svg.png'
import {getCoordForMove, KING_MOVES} from './Moves'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.BlackKing = Piece(BlackKingImage, 'Black King')
    this.state = {
      currentPosition: 0,
      files: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      ranks: [ '8', '7', '6', '5', '4', '3', '2', '1'],
      position: [],
      hilites: {},
      positions: [
        [this.BlackKing],
        ['',this.BlackKing],
        ['','',this.BlackKing],
        ['','','',this.BlackKing],
        ['','','','','','','','','','','',this.BlackKing],
        ['','','','','','','','','','','','',this.BlackKing],
        ['','','','','','','','','','','','','',this.BlackKing],
        ['','','','','','','','','','','','','','','','','','','','','',this.BlackKing],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',this.BlackKing],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',this.BlackKing]
      ]
    }
    this.squares = this.state.ranks.map( row => {
      return this.state.files.map( col => {
        return col + row
      })
    }).flat()
  }

  componentDidMount = () => {
    this.setState({
        position: this.state.positions[0]
    })
  }

  hilite = () => {
    this.state.position.forEach( (piece, i) => {
        console.log(piece, i)
    })
  }

  next = (direction) => {
    let newCurrentPosition = this.state.currentPosition
    switch(direction) {
      case '+':
        newCurrentPosition++
        if(newCurrentPosition + 1 > this.state.positions.length) newCurrentPosition--
        break
      case '-':
        newCurrentPosition--
        if(newCurrentPosition < 0) newCurrentPosition = 0
        break
      default:
        break
    }
    var kingPosition
    let position = this.state.positions[newCurrentPosition]
    position.forEach((piece, i)=>{
      if(piece) {
        kingPosition = this.squares[i]
      }
    })
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
        currentPosition: newCurrentPosition,
        position: this.state.positions[newCurrentPosition],
        hilites: hilites || {}
    })
  }

  render() {
    return (
      <div>
        <div className="chess-board">
          {this.squares.map( (key, i) => {
            let piece = this.state.position[i]
            let cssName = key in this.state.hilites ? "hilite" : "" //this.state.cssName[i]
            return <Square id={key} key={key} children={piece} cssName={cssName} />
          })}
        </div>
        <button onClick={this.next.bind(this, '-')}>Previous</button>
        <button onClick={this.next.bind(this, '+')}>Next</button>
      </div>
    )
  }
}

export default Board;
