import React, { Component } from "react"
import "../layout/bootstrap.css"
import "react-bootstrap"
import "../layout/style.css"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../elements/Logo"
import RadioProvider, { useRadio } from "../sections/context/RadioContext"
const styles = {
  links: {
    width: "100%",
    fontFamily: "Geneva, Arial, Helvetica, sans-serif",
    letterSpacing: "2px",
    justifyContent: "flex-end",
    background: "#fff",
  },
  logo: {
    fontFamily: "Geneva, Arial, Helvetica, sans-serif",
    color: "white",
  },
  bold: {
    fontWeight: "bolder",
  },
}

function NavigationBlack() {
  const radio = useRadio()
  const store = require("store")
  return (
    <>
      <Navbar fixed="top" expand="lg" variant="light" id="header-top">
        <Navbar.Brand href="/" style={styles.logo} className="header-cdg">
          <Logo classname="header-brand-logo" type="black" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={styles.links}>
            <Nav.Link href="/" className="nav-link">
              <span className="black-to-red">ГЛАВНАЯ</span>
            </Nav.Link>
            <Nav.Link href="design">
              <span className="black-to-red">ИНТЕРЬЕР</span>
            </Nav.Link>
            <Nav.Link href="visualization">
              <span className="black-to-red">3D ВИЗУАЛИЗАЦИЯ</span>
            </Nav.Link>
            <Nav.Link href="/#team-section">
              <span className="black-to-red">КОМАНДА</span>
            </Nav.Link>
            <Nav.Link href="/#contacts-section">
              <span className="black-to-red">КОНТАКТЫ</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavigationBlack
