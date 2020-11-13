import React, { useState } from "react"
import ProjectImage from "../../components/elements/ProjectImage"
import ReactBnbGallery from "react-bnb-gallery"
import Empty from "../../components/elements/Empty"
import ProjectHeader from "../../components/elements/ProjectHeader"
const header = "Квартира на победителей"
const description =
  "Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей "
const PHOTOS = [
  require(`../../assets/images/visualization/handles/handle-1.jpg`),
  require(`../../assets/images/visualization/handles/handle-2.jpg`),
  require(`../../assets/images/visualization/handles/handle-3.jpg`),
  require(`../../assets/images/visualization/handles/handle-4.jpg`),
  require(`../../assets/images/visualization/handles/handle-5.jpg`),
  require(`../../assets/images/visualization/handles/handle-6.jpg`),
  require(`../../assets/images/visualization/handles/handle-7.jpg`),
  require(`../../assets/images/visualization/handles/handle-8.jpg`),
  require(`../../assets/images/visualization/handles/handle-9.jpg`),
  require(`../../assets/images/visualization/handles/handle-10.jpg`),
  require(`../../assets/images/visualization/handles/handle-11.jpg`),
  require(`../../assets/images/visualization/handles/handle-12.jpg`),
  require(`../../assets/images/visualization/handles/handle-13.jpg`),
  require(`../../assets/images/visualization/handles/handle-14.jpg`),
  require(`../../assets/images/visualization/handles/handle-15.jpg`),
  require(`../../assets/images/visualization/handles/handle-16.jpg`),
  require(`../../assets/images/visualization/handles/handle-17.jpg`),
  require(`../../assets/images/visualization/handles/handle-18.jpg`),
  require(`../../assets/images/visualization/handles/handle-19.jpg`),
  require(`../../assets/images/visualization/handles/handle-20.jpg`),
  require(`../../assets/images/visualization/handles/handle-21.jpg`),
  require(`../../assets/images/visualization/handles/handle-22.jpg`),
  require(`../../assets/images/visualization/handles/handle-23.jpg`),
  require(`../../assets/images/visualization/handles/handle-24.jpg`),
  require(`../../assets/images/visualization/handles/handle-25.jpg`),
]

function Handles() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const baseSrc = "visualization/handles/preview/handle-"
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

export default Handles
