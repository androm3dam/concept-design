import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Element } from "react-scroll"
import BgChangeButton from "../../assets/images/home/bg-change-button.svg"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import { useRadio } from "../sections/context/RadioContext"
import Logo from "../elements/Logo"
var store = require("store")
function FullpageImg({
  imgArray,
  idSelf,
  header,
  buttonText,
  to,
  smallHeader,
  name,
  targetLowerElement,
  targetUpperElement,
  isHeader,
  storeName,
  isScroll,
}) {
  let index = store.get(storeName)
  let completed = false
  setTimeout(() => {
    completed = true
  }, 1000)
  let changePhoto = () => {
    if (completed) {
      completed = false
      index++
      if (index >= imgArray.length) index = 0
      store.set(storeName, index)
      setBackgroundImage(imgArray[index])
      setTimeout(() => {
        completed = true
      }, 1000)
    }
  }

  const radio = useRadio()
  const [backgroundImage, setBackgroundImage] = useState(imgArray[0])

  return (
    <ReactScrollWheelHandler
      upHandler={
        isScroll
          ? () => {
              radio.toggle(targetUpperElement)
            }
          : null
      }
      downHandler={
        isScroll
          ? () => {
              radio.toggle(targetLowerElement)
            }
          : null
      }
      preventScroll={isScroll}
    >
      <Element name={name}>
        <div
          id={idSelf}
          className="tryinganimate"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          {isHeader ? (
            <a href="#header-top">
              <Logo type="white" classname="cdg-header-absolute" />
            </a>
          ) : null}
          <div className="home-buttons-container">
            <Link to={to} style={{ display: "inline" }}>
              <button className="fullpage-img-btn" style={{ width: "12rem" }}>
                {buttonText}
              </button>
            </Link>
            <button className="bg-change-button" onClick={changePhoto}>
              <img src={BgChangeButton} />
            </button>
          </div>
          <motion.div
            className="container"
            style={{ height: "450px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            initial={{ opacity: 0, y: 10 }}
          >
            <div className="home-content">
              {smallHeader}
              <h1 className="home-header">{header}</h1>
            </div>
          </motion.div>
        </div>
      </Element>
    </ReactScrollWheelHandler>
  )
}

export default FullpageImg
