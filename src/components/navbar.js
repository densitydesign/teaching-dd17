import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
export default function Navbar() {
    return (
        <nav>
            <h1><Link to="/">DD17</Link></h1>
            <h1>Final Synthesis Design Studio</h1>
            <ul>
                <li>
                    <Link to="/starter-pack">Starter Pack</Link>
                </li>
                <li>
                    <Link to="/course">Course Results</Link>
                </li>
            </ul>
        </nav>
    )
}