import React from 'react'
import ReactDOM from 'react-dom'
import Draggable from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Draggable />, div)
  ReactDOM.unmountComponentAtNode(div)
})
