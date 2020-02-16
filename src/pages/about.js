import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import "../styles/about.css"

export default () => (
  <div className="about">
    <Link to="/">Home</Link>
    <Header headerText="Hello hahahahah!" />
    <p>Such wow. Very React.</p>
  </div>
)