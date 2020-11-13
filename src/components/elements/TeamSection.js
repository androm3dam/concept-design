import React from "react"
import Profile from "./Profile"
import vl from "../../assets/images/team/vladimir.jpeg"
import ser from "../../assets/images/team/sergej.jpeg"
import ol from "../../assets/images/team/wanted.jpeg"
import and from "../../assets/images/team/andrei.jpg"
import nat from "../../assets/images/team/natalia.jpg"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import { useRadio } from "../sections/context/RadioContext"
import { Element } from "react-scroll"
import Logo from "../elements/Logo"

function TeamSection({
  name,
  targetLowerElement,
  targetUpperElement,
  isScroll,
}) {
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
        <section className="fullscreen-section" id="team-section">
          <a href="#header-top">
            <Logo type="black" classname="cdg-header-left" />
          </a>
          <div className="container">
            <h6 className="team-header-small">НАША</h6>
            <h1 className="team-header">КОМАНДА</h1>
            <div className="team-container">
              <div className="team-cards">
                <Profile
                  photo={vl}
                  name="ВЛАДИМИР ДУДОЧКИН"
                  job="Директор, дизайнер"
                />
                <Profile
                  photo={ser}
                  name="СЕРГЕЙ ЗЕНЧЕНКО"
                  job="Дизайнер, визуализатор"
                />
                <Profile
                  photo={ol}
                  name="ОЛЕГ КОВАЛЕНКО"
                  job="Визуализатор, 3D-моделлер"
                />
              </div>
              <div className="team-cards">
                <Profile photo={nat} name="НАТАЛЬЯ ДУДОЧКИНА" job="Дизайнер" />
                <Profile
                  photo={ol}
                  name="ИЩЕМ СОТРУДНИКА"
                  job="Дизайнер, визуализатор"
                />
                <Profile photo={and} name="АНДРЕЙ МОЛЧАН" job="Программист" />
              </div>
            </div>
          </div>
        </section>
      </Element>
    </ReactScrollWheelHandler>
  )
}

export default TeamSection
