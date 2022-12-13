import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero-main">
        <h1>
          Classi<span>Guitarist</span>
        </h1>
        <h3>Lessons for Guitar, Piano, and Ukulele</h3>
      </div>
      <Button variant="primary">
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
      </Button>
    </div>
  );
}

export default Hero;
