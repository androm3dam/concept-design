import React, { Component } from "react"
import { Link } from "react-router-dom"
import PortfolioHeader from "../elements/PortfolioHeader"
import { motion } from "framer-motion"
const header = "ИНТЕРЬЕР"
const description =
  "Студия дизайна CONCEPTDESIGNGROUP выполняет дизайн проектирование интерьера любой сложности и назначения. CONCEPTDESIGNGROUP специализируется на профессиональной разработке авторского дизайна интерьера. Разработка дизайна – это шаг на пути к созданию уюта и красоты в любом помещении. Он включает в себя ряд услуг от обмера помещений до подбора мебели и отделочных материалов, а также полный комплект необходимой документации, чертежей и 3D визуализации. CONCEPTDESIGNGROUP – это команда профессионалов с многолетним опытом работы в сфере дизайна интерьеров, как в Беларуси, так и в других странах. Среди наших проектов можно увидеть различные объекты: квартиры и загородные дома, офисы компаний, бары, кафе и рестораны. Свою любовь к делу мы стремимся передать и нашим клиентам, вложить все свои знания и умения в создание вашего дома, офиса или другого пространства для комфортной жизни и продуктивной работы."

const styles = {
  h6: {
    textAlign: "justify",
    textIndent: "1.5rem",
    fontFamily: "Geneva, Arial, Helvetica, sans-serif",
    color: "#151719",
    marginBottom: "0px",
    marginTop: "3rem",
    fontSize: "16px",
  },
}

export class Gallery extends Component {
  render() {
    return (
      <>
        <PortfolioHeader header={header} />
        <div id="portfolio" className="text-center">
          <div className="container">
            <div className="row">
              <motion.div
                className="portfolio-items"
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                initial={{ opacity: 0, y: 10 }}
              >
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      {" "}
                      <Link to="houseMinsk#header-top">
                        <div className="hover-text">
                          <h4>Частный дом в Минске</h4>
                        </div>
                        <img
                          src={require("./../../assets/images/house-in-minsk/preview/house-1.jpg")}
                          className="img-responsive"
                          alt="Project Title"
                        />{" "}
                      </Link>{" "}
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      {" "}
                      <Link to="flatMinsk">
                        <div className="hover-text">
                          <h4>Квартира в Минске</h4>
                        </div>
                        <img
                          src={require("./../../assets/images/flat-in-minsk/flat-main.jpg")}
                          className="img-responsive"
                          alt="Project Title"
                        />{" "}
                      </Link>{" "}
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      {" "}
                      <Link to="flatPob">
                        <div className="hover-text">
                          <h4>Квартира на Победителей</h4>
                        </div>
                        <img
                          src={require("./../../assets/images/flat-pob/pob-main.jpg")}
                          className="img-responsive"
                          alt="Project Title"
                        />{" "}
                      </Link>{" "}
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      {" "}
                      <Link to="wg-rooms">
                        <div className="hover-text">
                          <h4>WARGAMING кабинеты и переговорные комнаты</h4>
                        </div>
                        <img
                          src={require("./../../assets/images/wg-rooms/wg-main.jpg")}
                          className="img-responsive"
                          alt="Project Title"
                        />{" "}
                      </Link>{" "}
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      {" "}
                      <Link to="wg-corridors">
                        <div className="hover-text">
                          <h4>WARGAMING коридоры</h4>
                        </div>
                        <img
                          src={require("./../../assets/images/wg-corridors/wg-main.jpg")}
                          className="img-responsive"
                          alt="Project Title"
                        />{" "}
                      </Link>{" "}
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      {" "}
                      <Link to="wg-lounge">
                        <div className="hover-text">
                          <h4>WARGAMING лаундж зона</h4>
                        </div>
                        <img
                          src={require("./../../assets/images/wg-lounge/wg-main.jpg")}
                          className="img-responsive"
                          alt="Project Title"
                        />{" "}
                      </Link>{" "}
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      {" "}
                      <Link to="flatPob2">
                        <div className="hover-text">
                          <h4>Квартира на Победителей (2)</h4>
                        </div>
                        <img
                          src={require("./../../assets/images/flat-pob-2/pob-main.jpg")}
                          className="img-responsive"
                          alt="Project Title"
                        />{" "}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      {" "}
                      <Link to="garageGomel">
                        <div className="hover-text">
                          <h4>Городское кафе Garage в гомеле</h4>
                        </div>
                        <img
                          src={require("./../../assets/images/garage-gomel/garage-main.jpg")}
                          className="img-responsive"
                          alt="Project Title"
                        />{" "}
                      </Link>{" "}
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      {" "}
                      <Link to="office-garage">
                        <div className="hover-text">
                          <h4>Офис кафе Garage</h4>
                        </div>
                        <img
                          src={require("./../../assets/images/office-garage/preview/garage-1.jpg")}
                          className="img-responsive"
                          alt="Project Title"
                        />{" "}
                      </Link>{" "}
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      {" "}
                      <Link to="houseGermany">
                        <div className="hover-text">
                          <h4>Частный дом в Германии</h4>
                        </div>
                        <img
                          src={require("./../../assets/images/house-germany/germ-main.jpg")}
                          className="img-responsive"
                          alt="Project Title"
                        />{" "}
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <h6 style={styles.h6}>{description}</h6>
          </div>
        </div>
      </>
    )
  }
}

export default Gallery
