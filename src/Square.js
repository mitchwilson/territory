import React from 'react'


class Square extends React.Component {

  drop = (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData("transfer")
    e.target.appendChild(document.getElementById(data))
  }

  allowDrop = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.cssName} onDrop={this.drop} onDragOver={this.allowDrop}>{this.props.children}</div>
    )
  }
}

export default Square;
