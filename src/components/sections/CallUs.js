import React from "react"
import bg from "../../assets/images/home/bg-chair.jpg"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import { useRadio } from "../sections/context/RadioContext"
import { Element } from "react-scroll"
import MainFooter from "./partials/MainFooter"
const callUsSectionStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  position: "relative",
  paddingBottom: "100px",
}

function CallUs({ name, targetLowerElement, targetUpperElement, isScroll }) {
  const radio = useRadio()

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
        <section className="fullscreen-section" style={callUsSectionStyle}>
          <div className="container">
            <h6 className="callus-header-h6">НЕ СТЕСНЯЙСЯ</h6>
            <h1 className="callus-header-h1">СВЯЗАТЬСЯ С НАМИ!</h1>
            <div className="callus-text-container">
              <p style={{ textAlign: "center" }}>
                Если у вас возникли вопросы, вы ищите исполнителя для разработки
                дизайна и вам нужна дополнительная информация о нас, пожалуйста,
                свяжитесь с нами любым удобным для вас способом: WhatsApp,
                Viber, Facebook, Instagram или по электронной почте
                <span style={{ color: "#151719" }}>
                  {" "}
                  info@concept-design.by
                </span>
              </p>
            </div>
          </div>
          <MainFooter />
        </section>
      </Element>
    </ReactScrollWheelHandler>
  )
}

export default CallUs
