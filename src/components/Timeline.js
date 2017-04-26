import React from 'react'
import { connect } from 'react-redux'

const Timeline = ({ store }) => (
  <div>
    <h1>Timeline</h1>
    {store.persons.map(x => {
      <div> {x.user} </div>
    })
    }
  </div>
)

export default connect(state => ({ store: state.reducer1 }), null)(Timeline)
