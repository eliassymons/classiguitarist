import guitar from "../images/guitar-icon.svg";
import ukulele from "../images/ukulele-icon.svg";
import piano from "../images/piano-icon.svg";
import suzuki from "../images/suzuki-logo.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";

function Lessons() {
  return (
    <div className="lessons" id="lessons">
      <h2>Lessons</h2>
      <div className="cards">
        <Link to="suzuki">
          {" "}
          <Card style={{ width: "15rem" }}>
            <img alt="suzuki" className="inst-icon" src={suzuki} />
            <Card.Body className="card-body">
              <Card.Title>Suzuki</Card.Title>
              <Card.Text>
                The Suzuki method teaches children how to play an instrument the
                same way they learn to speak a language. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to="contact">
          <Card style={{ width: "15rem" }}>
            <img alt="guitar" className="inst-icon" src={guitar} />
            <Card.Body className="card-body">
              <Card.Title>Guitar</Card.Title>
              <Card.Text>
                Learn any style from rock and metal, to classical and jazz.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to="contact">
          {" "}
          <Card style={{ width: "15rem" }}>
            <img alt="piano" className="inst-icon" src={piano} />
            <Card.Body className="card-body">
              <Card.Title>Piano</Card.Title>
              <Card.Text>
                Piano is a great foundational instrument, and a great way to
                visualize music. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to="contact">
          {" "}
          <Card style={{ width: "15rem" }}>
            <img alt="ukulele" className="inst-icon" src={ukulele} />
            <Card.Body className="card-body">
              <Card.Title>Ukulele</Card.Title>
              <Card.Text>
                Get back from Hawaii recently and want something easy to keep
                those island vibes going? This is the instrument you! 
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default Lessons;
