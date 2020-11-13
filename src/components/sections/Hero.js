import React, { useState } from "react"
import classNames from "classnames"
import { SectionProps } from "../../utils/SectionProps"
import "../layout/bootstrap.css"
import Empty from "../elements/Empty"
const MainImages = React.lazy(() => import("../elements/MainImages"))
const propTypes = {
  ...SectionProps.types,
}

const defaultProps = {
  ...SectionProps.defaults,
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false)

  const openModal = (e) => {
    e.preventDefault()
    setVideomodalactive(true)
  }

  const closeModal = (e) => {
    e.preventDefault()
    setVideomodalactive(false)
  }

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  )

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  )

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ paddingBottom: "5rem" }}
    >
      <Empty />
      <div
        className="reveal-from-bottom"
        data-reveal-value="20px"
        data-reveal-delay="800"
        style={{ width: "100%" }}
      >
        <React.Suspense fallback={<p>Loading...</p>}>
          <MainImages />
        </React.Suspense>
      </div>
    </section>
  )
}

Hero.propTypes = propTypes
Hero.defaultProps = defaultProps

export default Hero
