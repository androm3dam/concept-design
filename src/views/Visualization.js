import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import PortfolioHeader from "../components/elements/PortfolioHeader"
import Objects from "./projects/visualization-parts/Objects"
import Interior from "../views/projects/visualization-parts/Interior"
import Packagings from "./projects/visualization-parts/Packagings"
import Architecture from "./projects/visualization-parts/Architecture"
import { scroller, Element } from "react-scroll"
import "../components/layout/style.css"
const header = "3D ВИЗУАЛИЗАЦИЯ"
const descriptionMain =
  "Студия дизайна и 3D визуализации CONCEPTDESIGNGROUP предлагает услуги по созданию уникального контента для сайтов производителей. Не важно какую продукцию Вы производите мы поможем Вам максимально понятно и доступно показать возможности Вашего производства вашему потребителю. По чертежам, фотографиям и т.д создаем реалистичные изображения. Мы создадим изображения для сайта, печатной продукции изображения, которые вы можете передавать Вашим дилерам и дистрибьюторам. Мы можем выполнить различные анимированные изображения, схемы."
const descriptionArch =
  "Студия дизайна и 3D визуализации CONCEPTDESIGNGROUP предлагает услуги по созданию уникального контента для сайтов застройщиков, девелопереров, инвесторов. Если вы нуждаетесь в качественной визуализации ваших объектов то эта услуга для вас! Мы разработаем 3D визуализацию  для продвижения Ваших объектов на переговорах,выставках, форумах, а также в средствах массовой информации - сайтах ,публикациях, изданиях."
const styles = {
  h6: {
    textAlign: "justify",
    textIndent: "1.5rem",
    fontFamily: "Geneva, Arial, Helvetica, sans-serif",
    color: "#151719",
    marginBottom: "1rem",
    marginTop: "2rem",
    fontSize: "16px",
  },
}

let store = require("store")
let type = <Objects />
function Visualization() {
  window.scrollTo(0, 0)
  useEffect(() => {
    let typeOfvisualization = store.get("typeOfvisualization").type
    switch (typeOfvisualization) {
      case "1":
        type = <Objects />
        break
      case "2":
        type = <Interior />
        break
      case "3":
        type = <Architecture />
        break
      case "4":
        type = <Packagings />
        break
      default:
        type = <Objects />
        break
    }
  })

  function scrollToPackage() {
    scroller.scrollTo("visualization-package", {
      duration: 600,
      delay: 0,
      smooth: true,
      offset: -50,
    })
  }

  const [images, setImages] = useState(type)
  const [description, setDescription] = useState(descriptionMain)

  return (
    <>
      <PortfolioHeader header={header} />
      <div className="visualization-buttons-container">
        <Button
          onClick={() => {
            setImages(<Objects />)
            setDescription(descriptionMain)
            store.set("typeOfvisualization", { type: "1" })
            scrollToPackage()
          }}
          variant="outline-dark"
          size="lg"
          className="visualization-change-type"
        >
          Предметы
        </Button>
        <Button
          onClick={() => {
            store.set("typeOfvisualization", { type: "2" })
            setImages(<Interior />)
            setDescription(descriptionMain)
            scrollToPackage()
          }}
          variant="outline-dark"
          size="lg"
          className="visualization-change-type"
        >
          Интерьеры
        </Button>
        <Button
          onClick={() => {
            store.set("typeOfvisualization", { type: "3" })
            setImages(<Architecture />)
            setDescription(descriptionArch)
            scrollToPackage()
          }}
          variant="outline-dark"
          size="lg"
          className="visualization-change-type"
        >
          Архитектура
        </Button>
        <Button
          id="visualization-package"
          onClick={() => {
            store.set("typeOfvisualization", { type: "4" })
            setImages(<Packagings />)
            setDescription(descriptionMain)
            scrollToPackage()
          }}
          variant="outline-dark"
          size="lg"
          className="visualization-change-type"
        >
          Упаковка
        </Button>
      </div>
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="row">
            <div className="portfolio-items">{images}</div>
          </div>
          <h6 style={styles.h6}>{description}</h6>
        </div>
      </div>
    </>
  )
}

export default Visualization
