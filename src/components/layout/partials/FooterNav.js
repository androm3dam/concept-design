import React from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"
import "../../layout/style.css"

const footerH6Style = {
  textAlign: "center",
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  color: "#151719",
  marginBottom: ".3rem",
  marginTop: "0px",
}
const footerPStyle = {
  textAlign: "center",
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  color: "#151719",
  marginBottom: ".3rem",
}

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className)

  return (
    <nav {...props} className={classes}>
      <div>
        <div id="h6-pc-footer">
          <h6 style={footerH6Style}>
            Адрес: 220125, Беларусь, г. Минск, ул. Городецкая, 22-112
          </h6>
        </div>
        <div id="h6-mobile-footer">
          <h6 style={footerH6Style}>Адрес: 220125, Беларусь</h6>
          <h6 style={footerH6Style}>Минск, ул. Городецкая, 22-112</h6>
        </div>

        <p style={footerPStyle}>info@concept-design.by</p>

        <p style={footerPStyle}>УНП 191046567</p>
      </div>
    </nav>
  )
}

export default FooterNav
