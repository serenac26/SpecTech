import React from "react"
import Header from "../components/header.js"
import {Link} from "gatsby"


export default () => (
  <div style={{ color : 'purple' }}>
    <Link to="/about">About</Link>
    <Header headerText="Home Page"/>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)