import React from 'react'
import ReactDOM from 'react-dom'
import Droppable from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Droppable />, div)
  ReactDOM.unmountComponentAtNode(div)
})
