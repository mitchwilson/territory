import React from 'react'
import ReactDOM from 'react-dom'
import {getCoordForMove} from './Moves'

it('returns correct coords when moving right', () => {
  expect(getCoordForMove('A1', ['right'])).toBe('B1')
  expect(getCoordForMove('B1', ['right', 'right'])).toBe('D1')
  expect(getCoordForMove('G1', ['right'])).toBe('H1')
  expect(getCoordForMove('H1', ['right'])).toBe(NaN)
})

it('returns correct coords when moving left', () => {
  expect(getCoordForMove('H1', ['left'])).toBe('G1')
  expect(getCoordForMove('D1', ['left', 'left'])).toBe('B1')
  expect(getCoordForMove('B1', ['left'])).toBe('A1')
  expect(getCoordForMove('A1', ['left'])).toBe(NaN)
})

it('returns correct coords when moving up', () => {
  expect(getCoordForMove('A1', ['up'])).toBe('A2')
  expect(getCoordForMove('B1', ['up', 'up'])).toBe('B3')
  expect(getCoordForMove('G5', ['up'])).toBe('G6')
  expect(getCoordForMove('H8', ['up'])).toBe('Hundefined')
})

it('returns correct coords when moving down', () => {
  expect(getCoordForMove('A8', ['down'])).toBe('A7')
  expect(getCoordForMove('B4', ['down', 'down'])).toBe('B2')
  expect(getCoordForMove('G5', ['down'])).toBe('G4')
  expect(getCoordForMove('H1', ['down'])).toBe('Hundefined')
})
