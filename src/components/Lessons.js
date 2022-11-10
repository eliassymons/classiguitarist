import guitar from "../images/guitar-icon.svg";
import ukulele from "../images/ukulele-icon.svg";
import piano from "../images/piano-icon.svg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Lessons() {
  return (
    <div className="lessons" id="lessons">
      <h2>Lessons</h2>
      <div className="cards">
        <Card style={{ width: "15rem" }}>
          <img alt="guitar" className="inst-icon" src={guitar} />
          <Card.Body className="card-body">
            <Card.Title>Guitar</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="btns">
              {" "}
              <Button variant="outline-primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }}>
          <img alt="piano" className="inst-icon" src={piano} />
          <Card.Body className="card-body">
            <Card.Title>Piano</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="btns">
              {" "}
              <Button variant="outline-primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }}>
          <img alt="ukulele" className="inst-icon" src={ukulele} />
          <Card.Body className="card-body">
            <Card.Title>Ukulele</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="btns">
              {" "}
              <Button variant="outline-primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Lessons;
