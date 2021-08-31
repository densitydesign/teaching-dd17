import * as React from "react"
import { Link } from "gatsby"

import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"

import Index from "../contents/index.mdx"


import "./main.scss"

// markup
const IndexPage = () => {
  return (
    <>
    <Navbar/>
    <div className="title-card"><h1 className="title">Mediazioni algoritmiche III</h1>
      <h2 className="subtitle">Designing in a data-intensive society</h2>
      <h3>Politecnico di Milano, Master Degree in Communication Design</h3></div>
    <aside>
      <h3>Additional materials</h3>
      <ul>
        <li>
          <Link to="https://densitydesign.github.io/teaching-dd16/">DD16 FSDS 2020/2021</Link>
        </li>
        <li>
          <Link to="https://www4.ceda.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=19&k_corso_la=1162&k_indir=***&codDescr=052799&lang=EN&semestre=1&anno_corso=2&idItemOfferta=154784&idRiga=267427">Course manifesto</Link>
        </li>
        <li>
          <Link to="">Course calendar</Link>
        </li>
        <li>
          <Link to="">Google Drive folder</Link>
        </li>
        <li>
          <Link to="">Join the Telegram Channel</Link>
        </li>
      </ul>
    </aside>
    <main>
      <title>Mediazioni algoritmiche</title>

      <Index />
    </main>
    <Footer />
    </>
  )
}

export default IndexPage
