import React from "react"

function Profile({ photo, name, job }) {
  return (
    <div
      style={{
        textAlign: "center",
        width: "250px",
        height: "300px",
        margin: "5px auto",
      }}
    >
      <img
        src={photo}
        className="mx-auto"
        alt="Vladimir"
        height="170px"
        width="170px"
      />
      <h6 style={{ marginBottom: "0px", marginTop: "5px" }}>{name}</h6>
      <p style={{ fontFamily: "Geneva, Arial, Helvetica, sans-serif" }}>
        {job}
      </p>
    </div>
  )
}

export default Profile
