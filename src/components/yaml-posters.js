import React from "react"
import { Link } from "gatsby"

const posters = ({data}) => (
  <div className="repo">
    {data.groups.map((data, index) => {
        return <div key={`content_item_${index}`} style={{ 
          marginBottom: `5rem`,
          display: `grid`,
          gridTemplateColumns: `repeat(8, 1fr)`
            }} id={data.group}>
            <div style={{
              marginRight: `1.5rem`,
              outline: `1px solid cyan`,
              gridColumn: `span 3`
            }}>
            </div>
            <div style={{
              gridColumn: `span 5`
            }}>
            <h1 style={{
              marginTop: 0
            }}>{data.title}</h1>
            <p className="authors">{data.names}</p>
            <p>{data.desc}</p>
            <Link>See the poster</Link>
            </div>
        </div>
    })}
  </div>
)
export default posters