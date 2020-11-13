import React from "react"
// import sections
import HomeText from "../components/elements/HomeText"
import TeamSection from "../components/elements/TeamSection"
import Dignity from "../components/sections/Dignity"
import CallUs from "../components/sections/CallUs"
import RadioNav from "../components/elements/RadioNav"
import Contacts from "../views/Contacts"
import Loader from "../utils/Loader"
import design1 from "../assets/images/home/home-design-1.jpg"
import design2 from "../assets/images/home/home-design-2.jpg"
import design3 from "../assets/images/home/home-design-3.jpg"
import vis1 from "../assets/images/home/home-vis-1.jpg"
import vis2 from "../assets/images/home/home-vis-2.jpg"
import vis3 from "../assets/images/home/home-vis-3.jpg"
import furn1 from "../assets/images/home/home-furn-1.jpg"
import furn2 from "../assets/images/home/home-furn-2.jpg"
import furn3 from "../assets/images/home/home-furn-3.jpg"
import RadioProvider from "../components/sections/context/RadioContext"

const imgArrayDesign = [design1, design2, design3]
const imgArrayVisualization = [vis1, vis2, vis3]
const imgArrayFurniture = [furn1, furn2, furn3]
const FullpageImg = React.lazy(() =>
  import("../components/elements/FullpageImg")
)

var store = require("store")
store.set("interior", 0)
store.set("visualization", 0)
store.set("furniture", 0)
store.set("typeOfvisualization", { type: "1" })
const styles = {
  color: "#FFF",
  textAlign: "center",
  fontSize: "25px",
  marginTop: "-2rem",
}

function Home() {
  window.scrollTo(0, 0)
  const isScroll = window.innerHeight > 725 && window.innerWidth > 920
  return (
    <>
      <RadioProvider>
        <RadioNav />
        <React.Suspense fallback={<Loader />}>
          <FullpageImg
            idSelf="interior"
            imgArray={imgArrayDesign}
            header="ИНТЕРЬЕР"
            buttonText="ПОРТФОЛИО"
            to="/design"
            smallHeader={null}
            name="interior-block"
            isHeader={false}
            targetLowerElement="visualization-block"
            targetUpperElement="interior-block"
            storeName="interior"
            isScroll={isScroll}
          />
        </React.Suspense>
        <React.Suspense fallback={<Loader />}>
          <FullpageImg
            idSelf="visualization"
            imgArray={imgArrayVisualization}
            header="3D"
            isHeader={true}
            buttonText="ПОРТФОЛИО"
            to="/visualization"
            smallHeader={<h6 style={styles}>Визуализация</h6>}
            name="visualization-block"
            targetLowerElement="furniture-block"
            targetUpperElement="interior-block"
            isScroll={isScroll}
            storeName="visualization"
          />
        </React.Suspense>
        <React.Suspense fallback={<Loader />}>
          <FullpageImg
            idSelf="visualization"
            imgArray={imgArrayFurniture}
            header="МЕБЕЛЬ"
            buttonText="В РАЗРАБОТКЕ"
            to="/"
            smallHeader={null}
            isHeader={true}
            name="furniture-block"
            targetLowerElement="main-text"
            targetUpperElement="visualization-block"
            storeName="furniture"
            isScroll={isScroll}
          />
        </React.Suspense>
        <HomeText
          name="main-text"
          isScroll={isScroll}
          targetLowerElement="team-block"
          targetUpperElement="furniture-block"
        />
        <TeamSection
          name="team-block"
          isScroll={isScroll}
          targetLowerElement="dignity-block"
          targetUpperElement="main-text"
        />
        <Dignity
          name="dignity-block"
          isScroll={isScroll}
          targetLowerElement="contacts-block"
          targetUpperElement="team-block"
        />
        <Contacts
          name="contacts-block"
          isScroll={isScroll}
          targetLowerElement="callus-block"
          targetUpperElement="dignity-block"
        />
        <CallUs
          name="callus-block"
          isScroll={isScroll}
          targetLowerElement="callus-block"
          targetUpperElement="contacts-block"
        />
      </RadioProvider>
    </>
  )
}

export default Home
