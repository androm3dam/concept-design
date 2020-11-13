import React from "react"
import HeaderBlack from "../components/layout/HeaderBlack"
import CallUsFooter from "../components/sections/CallUsFooter"
const LayoutBlack = ({ children }) => (
  <>
    <HeaderBlack navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">{children}</main>
    <CallUsFooter />
  </>
)

export default LayoutBlack
