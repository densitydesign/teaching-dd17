import * as React from "react"
import { Link } from "gatsby"

import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"
import Aside from "../components/aside.js"

import Index from "../contents/index.mdx"

import "./main.scss"

// markup
const IndexPage = () => {
  return (
    <>
    <title>DensityDesign Lab Final Synthesis Design Studio 2021/2022 - Mediazioni algoritmiche</title>
    <Navbar/>
    <div className="title-card"><h1 className="title">Mediazioni algoritmiche III</h1>
      <h2 className="subtitle">Designing in a data-intensive society</h2>
      <h3>Politecnico di Milano, Master Degree in Communication Design</h3></div>
    <Aside/>
    <main>
      <Index />
    </main>
    <Footer />
    </>
  )
}

export default IndexPage
