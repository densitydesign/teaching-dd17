import React from "react"
import { Link } from "gatsby"

const Breadcrumb = ({url, title}) => (
  <div style={{
        marginTop: `1.2rem`
    }}>
      <Link href={url}>{title}</Link>
  </div>
)
export default Breadcrumb