import React, { useState } from "react"
import ProjectImage from "../../components/elements/ProjectImage"
import ReactBnbGallery from "react-bnb-gallery"
import Empty from "../../components/elements/Empty"

const PHOTOS = [
  require(`../../assets/images/house-germany/germ-1.jpg`),
  require(`../../assets/images/house-germany/germ-2.jpg`),
  require(`../../assets/images/house-germany/germ-3.jpg`),
  require(`../../assets/images/house-germany/germ-4.jpg`),
  require(`../../assets/images/house-germany/germ-5.jpg`),
  require(`../../assets/images/house-germany/germ-6.jpg`),
  require(`../../assets/images/house-germany/germ-7.jpg`),
  require(`../../assets/images/house-germany/germ-8.jpg`),
  require(`../../assets/images/house-germany/germ-9.jpg`),
  require(`../../assets/images/house-germany/germ-10.jpg`),
  require(`../../assets/images/house-germany/germ-11.jpg`),
  require(`../../assets/images/house-germany/germ-12.jpg`),
  require(`../../assets/images/house-germany/germ-13.jpg`),
  require(`../../assets/images/house-germany/germ-14.jpg`),
  require(`../../assets/images/house-germany/germ-15.jpg`),
  require(`../../assets/images/house-germany/germ-16.jpg`),
  require(`../../assets/images/house-germany/germ-17.jpg`),
  require(`../../assets/images/house-germany/germ-18.jpg`),
  require(`../../assets/images/house-germany/germ-19.jpg`),
  require(`../../assets/images/house-germany/germ-20.jpg`),
  require(`../../assets/images/house-germany/germ-21.jpg`),
  require(`../../assets/images/house-germany/germ-22.jpg`),
  require(`../../assets/images/house-germany/germ-23.jpg`),
  require(`../../assets/images/house-germany/germ-24.jpg`),
  require(`../../assets/images/house-germany/germ-25.jpg`),
]

function HouseGermany() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const baseSrc = "house-germany/preview/germ-"
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
