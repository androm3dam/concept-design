import React, { useState } from "react"
import ProjectImage from "../../components/elements/ProjectImage"
import ReactBnbGallery from "react-bnb-gallery"
import Empty from "../../components/elements/Empty"

const PHOTOS = [
  require(`../../assets/images/office-garage/garage-1.jpg`),
  require(`../../assets/images/office-garage/garage-2.jpg`),
  require(`../../assets/images/office-garage/garage-3.jpg`),
  require(`../../assets/images/office-garage/garage-4.jpg`),
  require(`../../assets/images/office-garage/garage-5.jpg`),
  require(`../../assets/images/office-garage/garage-6.jpg`),
  require(`../../assets/images/office-garage/garage-7.jpg`),
  require(`../../assets/images/office-garage/garage-8.jpg`),
  require(`../../assets/images/office-garage/garage-9.jpg`),
  require(`../../assets/images/office-garage/garage-10.jpg`),
  require(`../../assets/images/office-garage/garage-11.jpg`),
  require(`../../assets/images/office-garage/garage-12.jpg`),
  require(`../../assets/images/office-garage/garage-13.jpg`),
  require(`../../assets/images/office-garage/garage-14.jpg`),
  require(`../../assets/images/office-garage/garage-15.jpg`),
  require(`../../assets/images/office-garage/garage-16.jpg`),
]

function OfficeGarage() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const baseSrc = "office-garage/preview/garage-"
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

export default OfficeGarage
