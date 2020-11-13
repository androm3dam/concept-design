import React from "react"
import instagram from "../../../assets/images/home/instagram.svg"
import facebook from "../../../assets/images/home/facebook.svg"
import toTop from "../../../assets/images/home/to-top.svg"
import { scroller } from "react-scroll"

const spanStyle = {
  color: "#151719",
  fontSize: "medium",
  fontWeight: "600",
  marginLeft: "1rem",
}

function MainFooter() {
  function scrollToElement(target) {
    scroller.scrollTo(target, {
      duration: 1000,
      delay: 0,
      smooth: true,
    })
  }

  return (
    <div className="callus-footer">
      <div style={{ textAlign: "center", width: "100%" }}>
        <a href="https://www.instagram.com/uladzimir_dudachkin/">
          <img
            src={instagram}
            height="40px"
            width="40px"
            alt="instagram"
            style={{ display: "inline", margin: "auto .5rem" }}
          />
        </a>
        <a href="https://www.facebook.com/CDGMinsk/">
          <img
            src={facebook}
            height="40px"
            width="40px"
            alt="facebook"
            style={{ display: "inline", margin: "auto .5rem" }}
          />
        </a>
        <div className="callus-footer-text-container">
          <p className="callus-footer-text">
            220125, Беларусь, г. Минск, ул. Городецкая 22-112
            <span style={spanStyle}>А1</span> +375 44 7690690
            <span style={spanStyle}>МТС</span> +375 33 6690690 УНП 191046567
          </p>
        </div>
      </div>
      <img
        src={toTop}
        width="70px"
        height="70px"
        alt="instagram"
        style={{
          position: "absolute",
          zIndex: "101",
          bottom: "0%",
          right: "0%",
          cursor: "pointer",
        }}
        onClick={() => {
          scrollToElement("header-top")
        }}
      />
    </div>
  )
}

export default MainFooter
