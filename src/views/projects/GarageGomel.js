import React, { useState } from "react"
import ProjectImage from "../../components/elements/ProjectImage"
import ReactBnbGallery from "react-bnb-gallery"
import Empty from "../../components/elements/Empty"

const PHOTOS = [
  require(`../../assets/images/garage-gomel/garage-1.jpg`),
  require(`../../assets/images/garage-gomel/garage-2.jpg`),
  require(`../../assets/images/garage-gomel/garage-3.jpg`),
  require(`../../assets/images/garage-gomel/garage-4.jpg`),
  require(`../../assets/images/garage-gomel/garage-5.jpg`),
  require(`../../assets/images/garage-gomel/garage-6.jpg`),
  require(`../../assets/images/garage-gomel/garage-7.jpg`),
  require(`../../assets/images/garage-gomel/garage-8.jpg`),
  require(`../../assets/images/garage-gomel/garage-9.jpg`),
]

function HouseGermany() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const baseSrc = "garage-gomel/preview/garage-"
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
