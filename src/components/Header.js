import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-scroll";

function Header() {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link
              className="link"
              to="hero"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
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
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
