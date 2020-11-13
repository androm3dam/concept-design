import React, { useState } from "react"
import ProjectImage from "../../components/elements/ProjectImage"
import ReactBnbGallery from "react-bnb-gallery"
import Empty from "../../components/elements/Empty"
import ProjectHeader from "../../components/elements/ProjectHeader"
const header = "Квартира на победителей"
const description =
  "Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей Квартира на победителей "
const PHOTOS = [
  require(`../../assets/images/flat-pob/pob-1.jpg`),
  require(`../../assets/images/flat-pob/pob-2.jpg`),
  require(`../../assets/images/flat-pob/pob-3.jpg`),
  require(`../../assets/images/flat-pob/pob-4.jpg`),
  require(`../../assets/images/flat-pob/pob-5.jpg`),
  require(`../../assets/images/flat-pob/pob-6.jpg`),
  require(`../../assets/images/flat-pob/pob-7.jpg`),
  require(`../../assets/images/flat-pob/pob-8.jpg`),
  require(`../../assets/images/flat-pob/pob-9.jpg`),
  require(`../../assets/images/flat-pob/pob-10.jpg`),
  require(`../../assets/images/flat-pob/pob-11.jpg`),
  require(`../../assets/images/flat-pob/pob-12.jpg`),
  require(`../../assets/images/flat-pob/pob-13.jpg`),
  require(`../../assets/images/flat-pob/pob-14.jpg`),
  require(`../../assets/images/flat-pob/pob-15.jpg`),
  require(`../../assets/images/flat-pob/pob-16.jpg`),
  require(`../../assets/images/flat-pob/pob-17.jpg`),
  require(`../../assets/images/flat-pob/pob-18.jpg`),
  require(`../../assets/images/flat-pob/pob-19.jpg`),
  require(`../../assets/images/flat-pob/pob-20.jpg`),
  require(`../../assets/images/flat-pob/pob-21.jpg`),
  require(`../../assets/images/flat-pob/pob-22.jpg`),
  require(`../../assets/images/flat-pob/pob-23.jpg`),
  require(`../../assets/images/flat-pob/pob-24.jpg`),
  require(`../../assets/images/flat-pob/pob-25.jpg`),
  require(`../../assets/images/flat-pob/pob-26.jpg`),
]

function HouseGermany() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const baseSrc = "flat-pob/preview/pob-"
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

export default HouseGermany
