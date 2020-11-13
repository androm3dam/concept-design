import React from "react"
import classNames from "classnames"
import { SectionTilesProps } from "../../utils/SectionProps"
import SectionHeader from "./partials/SectionHeader"
import { motion } from "framer-motion"
import Empty from "../elements/Empty"
import ProjectHeader from "../elements/ProjectHeader"
const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  )

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    bottomDivider && "has-bottom-divider"
  )

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left")

  const sectionHeader = {
    title: "Наша команда",
    paragraph:
      "Кто мы —  студия с опытом более 10 лет. Это значит, что все работники имеют большой наработанный опыт который позволяет предложить вам новый подход к разработке дизайна интерьера и 3d визуализации. В нашей команде каждый сотрудник отвечает за свою часть работы, поэтому мы успешно сочетаем экспертизу в дизайне и персональный, внимательный клиентский сервис.",
  }

  return (
    <>
      <ProjectHeader
        header={sectionHeader.title}
        description={sectionHeader.paragraph}
      />
      <section {...props} className={outerClasses}>
        <motion.div
          className="container"
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          initial={{ opacity: 0, y: 10 }}
        >
          <div className={innerClasses}>
            <div className={tilesClasses}>
              <div className="tiles-item" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <img
                    src={require("../../assets/images/team/vladimir.jpeg")}
                    width="178px"
                    height="178px"
                  />

                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">
                      Владимир Дудочкин
                    </span>
                    <p className="testimonial-p">Директор</p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <img
                    src={require("../../assets/images/team/sergej.jpeg")}
                    width="178px"
                    height="178px"
                  />
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">
                      Сергей Зенченко
                    </span>
                    <p className="testimonial-p">Дизайнер, визуализатор</p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <img
                    src={require("../../assets/images/team/wanted.jpeg")}
                    width="178px"
                    height="178px"
                  />
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">
                      Олег Коваленко
                    </span>
                    <p className="testimonial-p">Визуализатор</p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <img
                    src={require("../../assets/images/team/wanted.jpeg")}
                    width="178px"
                    height="178px"
                  />
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">
                      Ищем сотрудника
                    </span>
                    <p className="testimonial-p">Визуализатор, Дизайнер.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

Testimonial.propTypes = propTypes
Testimonial.defaultProps = defaultProps

export default Testimonial
