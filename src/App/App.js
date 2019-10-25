import React from 'react'
import Board from '../Board/Board'
import Header from '../Header/Header'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Board />
      </div>
    )
  }
}

export default App
