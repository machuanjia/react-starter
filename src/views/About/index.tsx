import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet"
import { useTranslation, withTranslation, Trans } from 'react-i18next';

class About extends Component {
  render() {
    return <div>
      <Helmet>
          <title>关于-合作伙伴</title>
      </Helmet>
      <Trans i18nKey="description.part1"></Trans>
      <p>this is about page</p>
      <Link to="/">goto Home</Link>
    </div>
  }
}

export default About
