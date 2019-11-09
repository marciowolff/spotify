
import createReducer from './create-reducer'
import deepFreeze from 'deep-freeze'

const initialState = 0
const reducer = createReducer(0, {
  'INCREMENT': (state) => state + 1,
  'DECREMENT': (state) => state - 1
})

it('Should be a function', () => {
  expect(typeof createReducer).toBe('function')
})

it('createReducer(initialState, {}) should return a function', () => {
  expect(typeof createReducer([], {})).toBe('function')
})

it('Should create a reducer', () => {
  const before = 0
  const action = deepFreeze({type: 'INCREMENT'})
  const after = 1

  expect(reducer(before, action)).toBe(after)
})

it('reducer should return latest state if action is unknown', () => {
  const before = 3
  const action = deepFreeze({type: 'UNKNOWN'})
  const after = 3

  expect(reducer(before, action)).toBe(after)
})

it('reducer should return initalState when latest state undefined', () => {
  const before = undefined
  const action = deepFreeze({})
  const after = initialState

  expect(reducer(before, action)).toBe(after)
})

it('initialState should not be undefined', () => {
  try {
    createReducer()
  } catch (e) {
    expect(e.message).toEqual('initialState should not be undefined')
  }
})

it('handleActions should not be different from object', () => {
  try {
    createReducer([])
  } catch (e) {
    expect(e.message).toEqual('createReducer expects the second argument as an object representing reducer')
  }
})
