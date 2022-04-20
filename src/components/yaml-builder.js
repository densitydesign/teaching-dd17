import React from "react"
import { Link } from "gatsby"

const YAMLbuilder = ({data}) => (
  <div className="repo">
    {data.groups.map((data, index) => {
        return <div key={`content_item_${index}`} style={{ marginBottom: `5rem` }} id={data.group}>
            <div className="card">
                <div style={{
                  backgroundImage: `url(../../reports/thumb/g0${index+1}.gif)`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`
                }}><Link href={`../../reports/report_group0${index+1}.pdf`}>Report ↗</Link></div>
                <div style={{
                  backgroundImage: `url(../../websites/thumb/g0${index+1}.gif)`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`
                }}><Link href={`../../websites/g0${index+1}/index.html`}>Website ↗</Link></div>
            </div>
            <h1>{data.title}</h1>
            <p className="authors">{data.names}</p>
            <p>{data.desc}</p>
        </div>
    })}
  </div>
)
export default YAMLbuilder