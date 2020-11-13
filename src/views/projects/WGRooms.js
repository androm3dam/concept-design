import React, { useState } from "react"
import ProjectImage from "../../components/elements/ProjectImage"
import ReactBnbGallery from "react-bnb-gallery"
import Empty from "../../components/elements/Empty"
import ProjectHeader from "../../components/elements/ProjectHeader"
const header = "Квартира на победителей"
const description =
  "Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей "
const PHOTOS = [
  require(`../../assets/images/wg-rooms/wg-1.jpg`),
  require(`../../assets/images/wg-rooms/wg-2.jpg`),
  require(`../../assets/images/wg-rooms/wg-3.jpg`),
  require(`../../assets/images/wg-rooms/wg-4.jpg`),
  require(`../../assets/images/wg-rooms/wg-5.jpg`),
  require(`../../assets/images/wg-rooms/wg-6.jpg`),
  require(`../../assets/images/wg-rooms/wg-7.jpg`),
  require(`../../assets/images/wg-rooms/wg-8.jpg`),
  require(`../../assets/images/wg-rooms/wg-9.jpg`),
  require(`../../assets/images/wg-rooms/wg-10.jpg`),
  require(`../../assets/images/wg-rooms/wg-11.jpg`),
  require(`../../assets/images/wg-rooms/wg-12.jpg`),
  require(`../../assets/images/wg-rooms/wg-13.jpg`),
]

function WGRooms() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const baseSrc = "wg-rooms/preview/wg-"
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

export default WGRooms
