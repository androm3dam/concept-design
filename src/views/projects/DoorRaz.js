import React, { useState } from "react"
import ProjectImage from "../../components/elements/ProjectImage"
import ReactBnbGallery from "react-bnb-gallery"
import Empty from "../../components/elements/Empty"
import ProjectHeader from "../../components/elements/ProjectHeader"
const header = "Квартира на победителей"
const description =
  "Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей "
const PHOTOS = [
  require(`../../assets/images/visualization/door-raz/door-1.jpg`),
  require(`../../assets/images/visualization/door-raz/door-2.jpg`),
  require(`../../assets/images/visualization/door-raz/door-3.jpg`),
  require(`../../assets/images/visualization/door-raz/door-4.jpg`),
  require(`../../assets/images/visualization/door-raz/door-5.jpg`),
  require(`../../assets/images/visualization/door-raz/door-6.jpg`),
  require(`../../assets/images/visualization/door-raz/door-7.jpg`),
  require(`../../assets/images/visualization/door-raz/door-8.jpg`),
  require(`../../assets/images/visualization/door-raz/door-9.jpg`),
  require(`../../assets/images/visualization/door-raz/door-10.jpg`),
  require(`../../assets/images/visualization/door-raz/door-11.jpg`),
  require(`../../assets/images/visualization/door-raz/door-12.jpg`),
  require(`../../assets/images/visualization/door-raz/door-13.jpg`),
  require(`../../assets/images/visualization/door-raz/door-14.jpg`),
  require(`../../assets/images/visualization/door-raz/door-15.jpg`),
]

function DoorRaz() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const baseSrc = "visualization/door-raz/preview/door-"
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

export default DoorRaz
