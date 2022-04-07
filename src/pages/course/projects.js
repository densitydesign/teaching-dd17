import * as React from "react"
import { Link } from "gatsby"
import data from "../../contents/projects.yaml"

import Navbar from "../../components/navbar.js"
import Footer from "../../components/footer.js"
import YAMLBuilder from "../../components/yaml-builder.js"
import Menu from "../../components/right-menu.js"
import Breadcrumb from "../../components/breadcrumbs"

import Projects from "../../contents/projects.mdx"

import "../main.scss"

// markup
const IndexPage = () => {
  return (
    <>
    <title>Poster - Visual Explanations - DensityDesign Lab Final Synthesis Design Studio 2021/2022 - Mediazioni algoritmiche</title>
    <Navbar/>
    <Breadcrumb url="/course/posters" title="← Posters" />
    <main>
      <Projects />
    </main>
    <Menu data={data} />
    <YAMLBuilder data={data} />
    <Footer />
    </>
  )
}

export default IndexPage
