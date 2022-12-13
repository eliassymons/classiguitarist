import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-scroll";

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  const toggleMenu = () => {
    windowWidth < 992 && setMenuOpen(!menuOpen);
  };

  const handleClose = () => setMenuOpen(false);

  return (
    <Navbar expand="lg" sticky="top" collapseOnSelect>
      <Container fluid>
        <NavbarToggle
          aria-controls="offcanvasNavbar-expand-lg"
          onClick={toggleMenu}
          className="ms-auto"
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbar-expand-lg"
          placement="end"
          restoreFocus={false}
          show={menuOpen}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <Link
                className="link"
                to="hero"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                className="link"
                to="lessons"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={toggleMenu}
              >
                Lessons
              </Link>
              <Link
                className="link"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
              <Link
                className="link"
                to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                className="link"
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <NavDropdown
                title="More"
                id="basic-nav-dropdown"
                className="link"
              >
                <NavDropdown.Item>
                  {" "}
                  <Link
                    className="link"
                    to="suzuki"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    onClick={toggleMenu}
                  >
                    Suzuki Method
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="link"
                    to="benefits"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    onClick={toggleMenu}
                  >
                    Benefits of Music
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
