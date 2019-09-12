import React from 'react'
import Board from './Board'
import Header from './Header'
import './App.css'
import Piece from './Piece'
import BlackKingImage from './images/45px-Chess_kdt45.svg.png'
import WhiteQueenImage from './images/45px-Chess_qlt45.svg.png'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.BlackKing = Piece(BlackKingImage, 'Black King')
    this.WhiteQueen = Piece(WhiteQueenImage, 'White Queen')
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
  }

  componentDidMount = () => {
    this.setState({
        cssName: this.state.cssNames[0],
        position: this.state.positions[0]
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
    }
    this.setState({
        currentPosition: newCurrentPosition,
        position: this.state.positions[newCurrentPosition],
        cssName: this.state.cssNames[newCurrentPosition]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Board files={this.state.files} position={this.state.position} ranks={this.state.ranks} squares={this.state.squares} cssName={this.state.cssName} />
        <button onClick={this.next.bind(this, '-')}>Previous</button>
        <button onClick={this.next.bind(this, '+')}>Next</button>
      </div>
    )
  }
}

export default App
