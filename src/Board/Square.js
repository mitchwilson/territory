import React from 'react'


class Square extends React.Component {

  drop = (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData("transfer")
    e.target.appendChild(document.getElementById(data))
    this.props.update(this.props.id, data)
  }

  allowDrop = (e) => {
    e.preventDefault()
  }

  dragLeave = (e) => {
    // e.preventDefault()
    const data = e.dataTransfer.getData("transfer")
    // e.target.removeChild(document.getElementById(data))
    //this.props.update
    if(data) {
      this.props.update(null, data)
    }
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.cssName} onDragLeave={this.dragLeave} onDrop={this.drop} onDragOver={this.allowDrop}>{this.props.children}</div>
    )
  }
}

export default Square;
