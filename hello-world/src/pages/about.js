import React from "react"
import Header from '../components/header.js'
import {Link} from "gatsby"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="About Gatsby"/>
    <Header headerText="It's really cool"/>
    <p>Such wow. Very React.</p>
  </div>
)