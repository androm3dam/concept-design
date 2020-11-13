import React from "react"

export default () => (
  <div
    style={{
      height: "100vh",
      width: "100%",
      background: "black",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <div className="lds-ripple" style={{ top: "45%" }}>
      <div></div>
      <div></div>
    </div>
  </div>
)
