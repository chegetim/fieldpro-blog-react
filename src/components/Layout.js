import React from "react"
import { Link } from "gatsby"

import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
