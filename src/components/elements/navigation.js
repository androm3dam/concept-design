import React, { Component } from "react"
import "../layout/bootstrap.css"
import "react-bootstrap"
import "../layout/style.css"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../elements/Logo"

const styles = {
  links: {
    width: "100%",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    justifyContent: "flex-end",
  },
  logo: {
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    color: "white",
  },
  bold: {
    fontWeight: "bolder",
  },
}
export class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar fixed="top" expand="lg" variant="dark" id="header-top">
          <Navbar.Brand href="/" style={styles.logo} className="header-cdg">
            <Logo classname="header-brand-logo" type="white" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={styles.links}>
              <Nav.Link href="/" className="nav-link">
                <span className="white-to-red">ГЛАВНАЯ</span>
              </Nav.Link>
              <Nav.Link href="design">
                <span className="white-to-red">ИНТЕРЬЕР</span>
              </Nav.Link>
              <Nav.Link href="visualization">
                <span className="white-to-red">3D ВИЗУАЛИЗАЦИЯ</span>
              </Nav.Link>
              <Nav.Link href="#team-section">
                <span className="white-to-red">КОМАНДА</span>
              </Nav.Link>
              <Nav.Link href="#contacts-section">
                <span className="white-to-red">КОНТАКТЫ</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

export default Navigation
