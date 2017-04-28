/* @flow */
import React from 'react'
import { connect } from 'react-redux'
const { object } = React.PropTypes

const Timeline = ({ store }) => (
  <div>
    <h1>Timeline</h1>
    {store.persons.forEach(x => {
      return <div> {x.user} </div>
    })}
  </div>
)

Timeline.propTypes = {
  store: object
}

function add (x) {
  return x * 2
}

add('testresd')

export default connect(state => ({ store: state.reducer1 }), null)(Timeline)
