import React from "react"
import Empty from "./Empty"

function PortfolioHeader(props) {
  const styles = {
    h6: {
      textAlign: "justify",
      textIndent: "1.5rem",
      fontFamily: "Geneva, Arial, Helvetica, sans-serif",
      color: "#151719",
      marginBottom: "5px",
      fontSize: "16px",
    },
  }
  return (
    <>
      <Empty />
      <h2 className="portfolio-header-name">{props.header}</h2>
      <div className="container">
        <h6 style={styles.h6}>{props.description}</h6>
      </div>
    </>
  )
}

export default PortfolioHeader
