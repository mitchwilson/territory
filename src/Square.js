import React from 'react';


class Square extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id={this.props.id} className={this.props.cssName}>{this.props.piece}</div>
    )
  }
}

export default Square;
