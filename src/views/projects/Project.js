import React from "react"
import ImageGallery from "react-image-gallery"
import Empty from "../../components/elements/Empty"
import "../../components/layout/style.css"

const styles = {
  div: {
    paddingTop: "50px",
  },
  imageGallery: {
    marginTop: "250px",
  },
}

class Project extends React.Component {
  render() {
    return (
      <>
        <Empty />
        <div style={styles.div} className="reveal-from-top">
          <div className="project-header-container">
            <h2
              style={{
                fontWeight: "100",
                textAlign: "center",
                color: "#ECEDED",
              }}
            >
              concept
            </h2>
          </div>
          <ImageGallery
            items={this.props.images}
            showThumbnails={false}
            style={styles.imageGallery}
          />
        </div>
      </>
    )
  }
}

export default Project
