import React, { useState } from "react"
import ProjectImage from "../../components/elements/ProjectImage"
import ReactBnbGallery from "react-bnb-gallery"
import Empty from "../../components/elements/Empty"
const PHOTOS = [
  require(`../../assets/images/visualization/pritytskogo/prit-1.jpg`),
  require(`../../assets/images/visualization/pritytskogo/prit-2.jpg`),
  require(`../../assets/images/visualization/pritytskogo/prit-3.jpg`),
  require(`../../assets/images/visualization/pritytskogo/prit-4.jpg`),
  require(`../../assets/images/visualization/pritytskogo/prit-5.jpg`),
]

function Pritytskogo() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const baseSrc = "visualization/pritytskogo/preview/prit-"
  window.scrollTo(0, 0)
  return (
    <>
      <Empty />
      <div id="portfolio" className="text-center" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="portfolio-items">
              {PHOTOS.map((photo, index) => {
                return (
                  <ProjectImage
                    setIndex={setPhotoIndex}
                    setIsOpen={setIsOpen}
                    index={index}
                    folder={baseSrc}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <ReactBnbGallery
        show={isOpen}
        photos={PHOTOS}
        activePhotoIndex={photoIndex}
        showThumbnails={false}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default Pritytskogo
