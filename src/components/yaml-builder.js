import React from "react"
import { Link } from "gatsby"

const YAMLbuilder = ({data}) => (
  <div className="repo">
    {data.groups.map((data, index) => {
        return <div key={`content_item_${index}`} style={{ marginBottom: `5rem` }} id={data.group}>
            <div className="card">
                <div><Link>Report ↗</Link></div>
                <div><Link>Website ↗</Link></div>
            </div>
            <h1>{data.title}</h1>
            <p className="authors">{data.names}</p>
            <p>{data.desc}</p>
        </div>
    })}
  </div>
)
export default YAMLbuilder