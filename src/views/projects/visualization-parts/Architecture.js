import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Architecture() {
  return (
    <div className="container">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        initial={{ opacity: 0, y: 10 }}
      >
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="portfolio-item">
            <div className="hover-bg">
              {" "}
              <Link to="kolyadzichi">
                <div className="hover-text">
                  <h4>КОЛЯДИЧИ</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/kolyadzichi/preview/kol-1.jpg")}
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
              <Link to="pritytskogo">
                <div className="hover-text">
                  <h4>ПРИТЫЦКОГО</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/pritytskogo/preview/prit-1.jpg")}
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
              <Link to="mall">
                <div className="hover-text">
                  <h4>Торговый центр</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/mall/preview/mall-1.jpg")}
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
              <Link to="windows-architecture">
                <div className="hover-text">
                  <h4>Окна в архитектуре</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/architecture/preview/ast-1.jpg")}
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
              <Link to="storage">
                <div className="hover-text">
                  <h4>Логистический склад</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/storage/preview/storage-1.jpg")}
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
              <Link to="mansard">
                <div className="hover-text">
                  <h4>Мансарда</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/mansard/preview/mansard-1.jpg")}
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
              <Link to="oma">
                <div className="hover-text">
                  <h4>OMA</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/oma/preview/oma-1.jpg")}
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
              <Link to="wood-house">
                <div className="hover-text">
                  <h4>Деревянный дом</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/wood-house/preview/wood-1.jpg")}
                  className="img-responsive"
                  alt="Project Title"
                />{" "}
              </Link>{" "}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Architecture
