import * as React from "react"
import { Link } from "gatsby"

import Navbar from "../../components/navbar.js"
import Footer from "../../components/footer.js"

import Projects from "../../contents/projects.mdx"

import "../main.scss"

// markup
const IndexPage = () => {
  return (
    <>
    <title>Poster - Visual Explanations - DensityDesign Lab Final Synthesis Design Studio 2021/2022 - Mediazioni algoritmiche</title>
    <Navbar/>
    <main>
      <Projects />
    </main>
    <Footer />
    </>
  )
}

export default IndexPage
