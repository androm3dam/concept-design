import React, { useState } from "react"
import ProjectImage from "../../components/elements/ProjectImage"
import ReactBnbGallery from "react-bnb-gallery"
import Empty from "../../components/elements/Empty"

const PHOTOS = [
  require(`../../assets/images/wg-corridors/wg-1.jpg`),
  require(`../../assets/images/wg-corridors/wg-2.jpg`),
  require(`../../assets/images/wg-corridors/wg-3.jpg`),
  require(`../../assets/images/wg-corridors/wg-4.jpg`),
  require(`../../assets/images/wg-corridors/wg-5.jpg`),
  require(`../../assets/images/wg-corridors/wg-6.jpg`),
  require(`../../assets/images/wg-corridors/wg-7.jpg`),
  require(`../../assets/images/wg-corridors/wg-8.jpg`),
  require(`../../assets/images/wg-corridors/wg-9.jpg`),
  require(`../../assets/images/wg-corridors/wg-10.jpg`),
  require(`../../assets/images/wg-corridors/wg-11.jpg`),
  require(`../../assets/images/wg-corridors/wg-12.jpg`),
]

function HouseGermany() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const baseSrc = "wg-corridors/preview/wg-"
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
