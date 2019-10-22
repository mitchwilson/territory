import React from 'react';

export default class Piece extends React.Component {

  drag(e) {
    e.dataTransfer.setData("transfer", e.target.id)
  }

  dragLeave(e) {
    console.log('dragLeave', e.target.id)
  }

  noAllowDrop(e) {
    e.stopPropagation()
  }

  render() {
    return (
      <div id={this.props.altText.replace(" ", "-")} draggable="true" onDragStart={this.drag} onDragOver={this.noAllowDrop} onDragLeave={this.dragLeave}>
        <img src={this.props.image} alt={this.props.altText} className='chess-piece' />
      </div>
    )
  }
}
