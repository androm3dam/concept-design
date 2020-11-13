import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Packagings() {
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
              <Link to="vodka-blanka">
                <div className="hover-text">
                  <h4>Водка Blanka</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/vodka-blanka/preview/vodka-1.jpg")}
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
              <Link to="beer">
                <div className="hover-text">
                  <h4>Этикетки для пива</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/beer/preview/beer-5.jpg")}
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
              <Link to="ketchup">
                <div className="hover-text">
                  <h4>Кетчуп</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/ketchup/preview/ketchup-1.jpg")}
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
              <Link to="bouffle">
                <div className="hover-text">
                  <h4>Bouffle коробка</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/bouffle/preview/bouffle-1.jpg")}
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
              <Link to="vodka-lumy">
                <div className="hover-text">
                  <h4>Водка Lumy</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/vodka-lumy/preview/vodka-4.jpg")}
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
              <Link to="honey">
                <div className="hover-text">
                  <h4>Упаковка мёда</h4>
                </div>
                <img
                  src={require("../../../assets/images/visualization/honey/preview/honey-1.jpg")}
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
export default Packagings
