import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Logo from "./partials/Logo"
import FooterNav from "./partials/FooterNav"
import FooterSocial from "./partials/FooterSocial"

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
}

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  )

  return (
    <footer {...props} className={classes}>
      <div style={{ background: "#f8f9fa", marginTop: "2rem" }}>
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top space-around text-xxs">
            <FooterSocial />
          </div>
          <div className="footer-bottom space-around text-xxs invert-order-desktop">
            <FooterNav />
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = propTypes
Footer.defaultProps = defaultProps

export default Footer
