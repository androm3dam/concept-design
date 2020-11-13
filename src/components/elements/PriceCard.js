import React from "react"
import { scroller } from "react-scroll"

const styles = {
  button: {
    border: "3px solid #343a40",
    borderRadius: "0px",
    width: "100%",
    height: "2rem",
    margin: "1rem auto auto",
  },
  p: {
    textAlign: "center",
    color: "#6c757d",
    fontSize: ".8rem",
  },
  smallHeader: {
    fontSize: "14px",
    letterSpacing: "3px",
    margin: "2.5rem auto .2rem",
    color: "#6c757d",
  },
  description: {
    fontSize: "30px",
    fontWeight: "100",
    margin: "0rem auto .3rem",
  },
}

function PriceCard(props) {
  function scrollToElement(target) {
    scroller.scrollTo(target, {
      duration: 1500,
      delay: 0,
      smooth: true,
    })
  }

  return (
    <div id={props.selfId} className="price-card-outer">
      <h6 className="reveal-from-bottom" style={styles.smallHeader}>
        {props.headerUpper}
      </h6>
      <h3 className={`price-card-name${props.headerClass}`}>
        {props.headerLower}
      </h3>
      <h2
        style={{
          color: "#212529",
          textAlign: "center",
          margin: "1rem auto 0rem",
          fontSize: "50px",
          fontWeight: "600",
        }}
      >
        {props.price}
      </h2>
      <h6 style={styles.description}>{props.description}</h6>
      <button
        type="button"
        className="btn btn-outline-dark"
        style={styles.button}
        onClick={() => scrollToElement(props.targetId)}
      >
        ПОДРОБНО
      </button>
    </div>
  )
}

export default PriceCard
