import React, { useState } from "react"
import ProjectImage from "../../components/elements/ProjectImage"
import ReactBnbGallery from "react-bnb-gallery"
import Empty from "../../components/elements/Empty"
import ProjectHeader from "../../components/elements/ProjectHeader"
const header = "Квартира на победителей"
const description =
  "Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей "
const PHOTOS = [
  require(`../../assets/images/visualization/mattresses/mat-1.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-2.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-3.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-4.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-5.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-6.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-7.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-8.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-9.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-10.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-11.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-12.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-13.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-14.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-15.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-16.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-17.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-18.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-19.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-20.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-21.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-22.jpg`),
  require(`../../assets/images/visualization/mattresses/mat-23.jpg`),
]

function Mattresses() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const baseSrc = "visualization/mattresses/preview/mat-"
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

export default Mattresses
