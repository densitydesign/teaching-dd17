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
    <Footer />
    </>
  )
}

export default IndexPage
