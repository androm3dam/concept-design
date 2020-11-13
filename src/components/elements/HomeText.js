import React from "react"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import { useRadio } from "../sections/context/RadioContext"
import { Element } from "react-scroll"
import Logo from "../elements/Logo"
function HomeText({ name, targetLowerElement, targetUpperElement, isScroll }) {
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
        <section className="fullscreen-section">
          <a href="#header-top">
            <Logo type="black" classname="cdg-header-left" />
          </a>
          <div className="container">
            <div className="home-text-container">
              <h4 className="home-text">
                СТУДИЯ ДИЗАЙНА{" "}
                <span className="home-text-span">CONCEPTDESIGNGROUP </span>{" "}
                УВЕРЕННА В ТОМ, ЧТО ХОРОШИЙ ДИЗАЙН — ЭТО НЕ ТОЛЬКО КРАСИВЫЙ
                ИНТЕРЬЕР, НО ЕЩЕ И УДОБНЫЙ, КОМФОРТНЫЙ И ТЕХНОЛОГИЧНЫЙ.
              </h4>
              <h4 className="home-text">
                {" "}
                СТУДИЯ ДИЗАЙНА{" "}
                <span className="home-text-span">CONCEPTDESIGNGROUP</span> В
                СВОИХ ПРОЕКТАХ СОХРАНЯЕТ БАЛАНС МЕЖДУ КРАСОТОЙ, ЭРГОНОМИЧНОСТЬЮ
                И ПРАКТИЧНОСТЬЮ. НАШИ КЛИЕНТЫ — ЭТО ЛЮДИ КОТОРЫХ НЕ УСТРАИВАЮТ
                ТИПОВЫЕ ПЛАНИРОВКИ ХОТЯТ ПОЛУЧИТЬ ПРОДУМАННЫЙ, УДОБНЫЙ И
                СТИЛЬНЫЙ ИНТЕРЬЕР С ХАРАКТЕРОМ. НАШИ ОСНОВНЫЕ ПРИНЦИПЫ РАБОТЫ —
                ИНДИВИДУАЛЬНОСТЬ И ПРОФЕССИОНАЛИЗМ.
              </h4>
            </div>
          </div>
        </section>
      </Element>
    </ReactScrollWheelHandler>
  )
}

export default HomeText
