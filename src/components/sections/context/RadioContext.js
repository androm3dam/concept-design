import React, { useState, useContext } from "react"
import { scroller } from "react-scroll"
export const RadioContext = React.createContext()

export const useRadio = () => {
  return useContext(RadioContext)
}

export default function RadioProvider({ children }) {
  function scrollToElement(target) {
    scroller.scrollTo(target, {
      duration: 1000,
      delay: 0,
      smooth: true,
    })
  }
  const store = require("store")
  const [radio, setRadio] = useState(store.get("radio"))
  const toggle = (props) => {
    setRadio(props)
    scrollToElement(props)
    store.set("radio", props)
  }
  return (
    <RadioContext.Provider value={{ state: radio, toggle }}>
      {children}
    </RadioContext.Provider>
  )
}
