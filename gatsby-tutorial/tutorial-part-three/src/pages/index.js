import React from "react"
import Layout from "../components/layout.js"
import { ListLink } from "../components/layout.js"

export default () => (
    <Layout>
        <h1>Hi! Get to know me through my work:</h1>
        <ListLink to="/spectator/">Spectator</ListLink><br/>
        <ListLink to="/raytheon/">Raytheon</ListLink><br/>
        <ListLink to="/nanotech/">NanoTech</ListLink><br/>
    </Layout>
) 