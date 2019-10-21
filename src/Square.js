import React from 'react';
import Droppable from './Droppable'

class Square extends React.Component {

  render() {
    return (
      <Droppable id={this.props.id} className={this.props.cssName}>{this.props.piece}</Droppable>
    )
  }
}

export default Square;
