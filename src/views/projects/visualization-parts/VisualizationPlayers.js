import React from "react"
import { Player, BigPlayButton } from "video-react"
function VisualizationPlayers() {
  return (
    <div className="container-lg" id="test">
      <Player
        playsInline
        src={require("../../../assets/images/avi/wooder-1.mp4")}
      >
        <BigPlayButton position="center" />
      </Player>
      <Player
        playsInline
        src={require("../../../assets/images/avi/wooder-2.mp4")}
      >
        <BigPlayButton position="center" />
      </Player>
    </div>
  )
}

export default VisualizationPlayers
