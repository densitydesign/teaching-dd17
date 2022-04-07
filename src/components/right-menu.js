import React from "react"
import { Link } from "gatsby"

const navMenu = ({data}) => (
    <aside className="right">
        <ul>
            {data.groups.map((data, index) => {
                return <li><a href={"#"+data.group}>{index+1}</a> <span>{data.title}</span></li>
            })}
        </ul>
    </aside>
  )
  export default navMenu