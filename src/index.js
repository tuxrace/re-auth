/* @flow */
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import persons from '../data'
import thunk from 'redux-thunk'
import Timeline from './components/Timeline'

const middleware = [thunk]
const initialState = {
  persons
}

const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case 'GREETING':
      return Object.assign({}, state, {greeting: action.data})
    default:
      return state
  }
}

const red = {reducer1}

const reducer = combineReducers(red)

const store = createStore(reducer, applyMiddleware(...middleware))

const App = () => (
  <Provider store={store}>
    <Timeline />
  </Provider>
)

render(<App />, document.getElementById('root'))
