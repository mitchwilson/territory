import React from 'react'
import Square from './Square'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.squares = props.ranks.map( row => {
      return props.files.map( col => {
        return col + row
      })
    }).flat()
  }
  render() {
    return (
      <div className="chess-board">
        {this.squares.map( (key, i) => {
          let piece = this.props.position[i]
          let cssName = this.props.cssName[i]
          return <Square id={key} key={key} piece={piece} cssName={cssName}  />
        })}
      </div>
    )
  }
}

export default Board;
