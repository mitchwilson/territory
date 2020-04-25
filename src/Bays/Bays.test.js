import React from 'react'
import ReactDOM from 'react-dom'
import Bays from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Bays />, div)
  ReactDOM.unmountComponentAtNode(div)
})
