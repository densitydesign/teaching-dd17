import * as React from "react"
import { Link } from "gatsby"

import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"
import Aside from "../components/aside.js"

import Pack from "../contents/starter-pack.mdx"

import "./main.scss"

// markup
const IndexPage = () => {
  return (
    <>
    <title>Starter Pack - DensityDesign Lab Final Synthesis Design Studio 2021/2022 - Mediazioni algoritmiche</title>
    <Navbar />
    <Aside />
    <main>
      <Pack />
    </main>
    <Footer />
    </>
  )
}

export default IndexPage
