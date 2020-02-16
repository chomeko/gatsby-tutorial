import React from "react"

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    {children}
  </div>
)
//src/components/layout.css
//src/components/layout.js
//作成してsrc/pages/index.jsにimport Layout from "../components/layout"の追加で反映