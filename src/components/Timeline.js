// @flow
import React from 'react'
import { connect } from 'react-redux'
import { hello } from '../actions/index'

const Timeline = ({store, hello}: { store: Object, hello: Function }) => (
  <div>
    <h1>Timeline</h1>
    {store.persons.forEach(x => {
      return <div> {x.user} </div>
    })}
    <button onClick={() => hello('Hi arman')}> Test </button>
    {store.greeting}
  </div>
)

function test (str) {
  return str * 2
}

test('test')

export default connect(state => ({ store: state.reducer1 }), ({hello}))(Timeline)
