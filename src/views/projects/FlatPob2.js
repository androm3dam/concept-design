import React, { useState } from "react"
import ProjectImage from "../../components/elements/ProjectImage"
import ReactBnbGallery from "react-bnb-gallery"
import Empty from "../../components/elements/Empty"

const PHOTOS = [
  require(`../../assets/images/flat-pob-2/pob-1.jpg`),
  require(`../../assets/images/flat-pob-2/pob-2.jpg`),
  require(`../../assets/images/flat-pob-2/pob-3.jpg`),
  require(`../../assets/images/flat-pob-2/pob-4.jpg`),
  require(`../../assets/images/flat-pob-2/pob-5.jpg`),
  require(`../../assets/images/flat-pob-2/pob-6.jpg`),
  require(`../../assets/images/flat-pob-2/pob-7.jpg`),
  require(`../../assets/images/flat-pob-2/pob-8.jpg`),
  require(`../../assets/images/flat-pob-2/pob-9.jpg`),
  require(`../../assets/images/flat-pob-2/pob-10.jpg`),
  require(`../../assets/images/flat-pob-2/pob-11.jpg`),
  require(`../../assets/images/flat-pob-2/pob-12.jpg`),
]

function HouseGermany() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const baseSrc = "flat-pob-2/preview/pob-"
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
