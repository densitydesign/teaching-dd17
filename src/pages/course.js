import * as React from "react"
import { Link } from "gatsby"

import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"

import Course from "../contents/course.mdx"

import "./main.scss"

// markup
const IndexPage = () => {
  return (
    <>
    <Navbar/>
    <main>
      <Course />
    </main>
    <div className="project-phases">
      <div className="phase">
        <h3>Warm up</h3>
        <h2>Visual explanations</h2>
      </div>
      <div className="phase">
        <h3>Main assignment</h3>
        <h2>Data as artefact</h2>
      </div>
      <div className="phase">
        <h3>Main assignment</h3>
        <h2>Data publics</h2>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default IndexPage
