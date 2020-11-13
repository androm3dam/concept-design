import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Objects() {
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
              <Link to="door-raz">
                <div className="hover-text">
                  <h4>Двери в разрезе</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/door-raz/preview/door-1.jpg")}
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
              <Link to="door">
                <div className="hover-text">
                  <h4>Двери</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/door/preview/door-1.jpg")}
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
              <Link to="windows">
                <div className="hover-text">
                  <h4>Окна</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/windows/preview/window-1.jpg")}
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
              <Link to="mattresses">
                <div className="hover-text">
                  <h4>Матрасы</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/mattresses/preview/mat-1.jpg")}
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
              <Link to="handles">
                <div className="hover-text">
                  <h4>Ручки и замки</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/handles/preview/handle-1.jpg")}
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
              <Link to="hinges">
                <div className="hover-text">
                  <h4>Петли</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/hinges/preview/hinge-1.jpg")}
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

export default Objects
