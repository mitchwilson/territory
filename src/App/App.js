import React from 'react'
import Board from '../Board/Board'
import Header from '../Header/Header'
import './App.css'
import Bays from '../Bays'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Board />
        <Bays />
      </div>
    )
  }
}

export default App
