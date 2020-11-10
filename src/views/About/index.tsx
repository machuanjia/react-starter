import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
  render() {
    return <div>
      <p>this is about page</p>
      <Link to="/">goto Home</Link>
    </div>
  }
}

export default About
