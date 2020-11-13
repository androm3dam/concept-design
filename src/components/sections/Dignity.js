import React from "react"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import { useRadio } from "../sections/context/RadioContext"
import { Element } from "react-scroll"
import Logo from "../elements/Logo"

const headerStyle = {
  color: "#151719",
  margin: "10px",
  fontWeight: "600",
  fontFamily: "'Roboto', sans-serif",
}

const questionmarkStyle = {
  margin: "1rem",
  fontSize: "100px",
  fontWeight: "500",
  color: "#9CA9B3",
  fontFamily: "'Roboto', sans-serif",
}

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
        <section className="fullscreen-section">
          <a href="#header-top">
            <Logo type="black" classname="cdg-header-left" />
          </a>
          <div className="container-lg dignity">
            <div className="dignity-header">
              <h2 className="dignity-header-left" style={headerStyle}>
                ПОЧЕМУ
              </h2>
              <h2 className="dignity-header-left" style={headerStyle}>
                ВЫБИРАЮТ
              </h2>
              <h2 className="dignity-header-left" style={headerStyle}>
                НАС
              </h2>
              <h1 className="dignity-header-left" style={questionmarkStyle}>
                ?
              </h1>
            </div>
            <div className="dignity-center">
              <h4 style={{ marginTop: "15px" }}>РАБОТАЕМ ДИСТАНЦИОННО</h4>
              <p className="dignity-text">
                В связи со сложившейся эпидемиологической обстановкой, осознавая
                свою ответственность и заботясь о Вашем здоровье, в целях
                профилактики предлагаем услуги дистанционно
              </p>
              <h4>РАБОТАЕМ ПО ВСЕМУ МИРУ</h4>
              <p className="dignity-text">
                Мы успешно работаем в разных странах. Работаем как удалённо, так
                и с выездами на объекты. Имеем опыт работы в России, Германии,
                Дании, Нидерландах, Греции
              </p>
            </div>
            <div className="dignity-right">
              <h4 style={{ marginTop: "15px" }}>ЦЕНЫ НА УСЛУГИ</h4>
              <p className="dignity-text">
                Доступные и привлекательные цены не влияют на качество работы!
                Есть возможность скомпоновать индивидуальный тариф под свой
                бюджет!
              </p>
              <h4>ДОГОВОР</h4>
              <p className="dignity-text">
                Предоставляем официальный договор на услуги! Все легально и вы
                защищены юридически.
              </p>
            </div>
          </div>
        </section>
      </Element>
    </ReactScrollWheelHandler>
  )
}

export default TeamSection
