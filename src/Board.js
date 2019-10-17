import React from 'react'
import Square from './Square'
import Piece from './Piece'
import BlackKingImage from './images/45px-Chess_kdt45.svg.png'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.BlackKing = Piece(BlackKingImage, 'Black King')
    this.state = {
      currentPosition: 0,
      files: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      ranks: [ '8', '7', '6', '5', '4', '3', '2', '1'],
      position: [],
      cssNames: [
        ['hilite', 'hilite','','','','','','','hilite','hilite'],
        ['hilite', 'hilite','hilite','','','','','','hilite','hilite','hilite'],
        ['', 'hilite','hilite','hilite','','','','','','hilite','hilite','hilite'],
        ['', '','hilite','hilite','hilite','','','','','','hilite','hilite','hilite'],
        ['', '','hilite','hilite','hilite','','','','','','hilite','hilite','hilite','','','','','','hilite','hilite','hilite']
      ],
      cssName: [],
      positions: [
        [this.BlackKing],
        ['',this.BlackKing],
        ['','',this.BlackKing],
        ['','','',this.BlackKing],
        ['','','','','','','','','','','',this.BlackKing]
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
    this.hilite()
    this.setState({
        cssName: this.state.cssNames[0]
    })
  }

  hilite = () => {
    this.state.position.forEach( (piece, i) => {
        console.log(piece, i)
    })
  }

  next = (direction) => {console.log(direction)
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
    this.setState({
        currentPosition: newCurrentPosition,
        position: this.state.positions[newCurrentPosition],
        cssName: this.state.cssNames[newCurrentPosition]
    })

    this.hilite()
  }

  test() {
    console.log('test')
  }

  render() {
    return (
      <div>
        <div className="chess-board">
          {this.squares.map( (key, i) => {
            let piece = this.state.position[i]
            let cssName = this.state.cssName[i]
            return <Square id={key} key={key} piece={piece} cssName={cssName}  />
          })}
        </div>
        <button onClick={this.next.bind(this, '-')}>Previous</button>
        <button onClick={this.next.bind(this, '+')}>Next</button>
      </div>
    )
  }
}

export default Board;
