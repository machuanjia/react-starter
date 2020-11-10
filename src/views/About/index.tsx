import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet"

class About extends Component {
  render() {
    return <div>
      <Helmet>
          <title>关于-合作伙伴</title>
      </Helmet>
      <p>this is about page</p>
      <Link to="/">goto Home</Link>
    </div>
  }
}

export default About
