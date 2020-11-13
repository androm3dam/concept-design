import React, { useState } from "react"
import ProjectImage from "../../components/elements/ProjectImage"
import ReactBnbGallery from "react-bnb-gallery"
import Empty from "../../components/elements/Empty"

const PHOTOS = [
  require(`../../assets/images/flat-in-minsk/flat-1.jpg`),
  require(`../../assets/images/flat-in-minsk/flat-2.jpg`),
  require(`../../assets/images/flat-in-minsk/flat-3.jpg`),
  require(`../../assets/images/flat-in-minsk/flat-4.jpg`),
  require(`../../assets/images/flat-in-minsk/flat-5.jpg`),
  require(`../../assets/images/flat-in-minsk/flat-6.jpg`),
  require(`../../assets/images/flat-in-minsk/flat-7.jpg`),
  require(`../../assets/images/flat-in-minsk/flat-8.jpg`),
  require(`../../assets/images/flat-in-minsk/flat-9.jpg`),
  require(`../../assets/images/flat-in-minsk/flat-10.jpg`),
  require(`../../assets/images/flat-in-minsk/flat-11.jpg`),
]

function HouseGermany() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const baseSrc = "flat-in-minsk/preview/flat-"
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
