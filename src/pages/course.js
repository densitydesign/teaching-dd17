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
    <title>Course results - DensityDesign Lab Final Synthesis Design Studio 2021/2022 - Mediazioni algoritmiche</title>
    <Navbar/>
    <div className="project-phases">
      <Link href="/posters" className="phase">
          <h3>Poster</h3>
          <h2>Visual explanations</h2>
      </Link>
      <Link href="/projects" className="phase lg">
        <div className="phase">
          <h3>Report</h3>
          <h2>Data as artefact</h2>
        </div>
        <div className="phase">
          <h3>Website</h3>
          <h2>Data publics</h2>
        </div>
      </Link>
    </div>
    <main>
      <Course />
    </main>
    <Footer />
    </>
  )
}

export default IndexPage
