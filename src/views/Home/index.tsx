import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return <div>
      <p>this is home page</p>
      <Link to="/about">goto About</Link>
    </div>
  }
}
export default Home