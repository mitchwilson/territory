import React from 'react'
import Board from './Board'
import Header from './Header'
import './App.css'
import DndTest from './DndTest'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Board />
        <DndTest />
      </div>
    )
  }
}

export default App
