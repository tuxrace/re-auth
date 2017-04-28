import React from 'react'
import { connect, test } from 'react-redux'

const Timeline = ({ store }) => (
  <div>
    <h1>Timeline</h1>
    {store.persons.forEach(x => {
      return <div> {x.user} </div>
    })
    }
  </div>
)

function diff(a,b){
  return a - b
}

diff("test","kmmk")

export default connect(state => ({ store: state.reducer1 }), null)(Timeline)
