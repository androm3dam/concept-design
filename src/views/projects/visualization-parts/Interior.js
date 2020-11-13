import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Interior() {
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
              <Link to="door-int">
                <div className="hover-text">
                  <h4>Двери в интерьере</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/door-int/preview/door-1.jpg")}
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
              <Link to="mattresses-interior">
                <div className="hover-text">
                  <h4>Матрасы в интерьерах</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/mattresses-int/preview/mat-1.jpg")}
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

export default Interior
