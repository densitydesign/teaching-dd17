import * as React from "react"
import { Link } from "gatsby"

import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"

import Pack from "../contents/starter-pack.mdx"

import "./main.scss"

// markup
const IndexPage = () => {
  return (
    <>
    <Navbar/>
    <main>
      <Pack />
    </main>
    <Footer />
    </>
  )
}

export default IndexPage
