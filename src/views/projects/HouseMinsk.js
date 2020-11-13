import React, { useState } from "react"
import ProjectImage from "../../components/elements/ProjectImage"
import ReactBnbGallery from "react-bnb-gallery"
import Empty from "../../components/elements/Empty"

const PHOTOS = [
  require(`../../assets/images/house-in-minsk/house-1.jpg`),
  require(`../../assets/images/house-in-minsk/house-2.jpg`),
  require(`../../assets/images/house-in-minsk/house-3.jpg`),
  require(`../../assets/images/house-in-minsk/house-4.jpg`),
  require(`../../assets/images/house-in-minsk/house-5.jpg`),
  require(`../../assets/images/house-in-minsk/house-6.jpg`),
  require(`../../assets/images/house-in-minsk/house-7.jpg`),
  require(`../../assets/images/house-in-minsk/house-8.jpg`),
  require(`../../assets/images/house-in-minsk/house-9.jpg`),
]

function HouseGermany() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const baseSrc = "house-in-minsk/preview/house-"
  window.scrollTo(0, 0)
  return (
    <>
      <Empty />
      <div id="portfolio" className="text-center" style={{ marginTop: "65px" }}>
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

export default HouseGermany
