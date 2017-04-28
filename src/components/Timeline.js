/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { hello } from '../actions/index'
const { object, func } = React.PropTypes

const Timeline = ({ store, hello }) => (
  <div>
    <h1>Timeline</h1>
    {store.persons.forEach(x => {
      return <div> {x.user} </div>
    })}
    <button onClick={() => hello('Hi arman')}> Test </button>
    {store.greeting}
  </div>
)

Timeline.propTypes = {
  store: object,
  hello: func
}

export default connect(state => ({ store: state.reducer1 }), ({hello}))(Timeline)
