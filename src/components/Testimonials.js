import test1 from "../images/testimonials/test1.jpg";
import test2 from "../images/testimonials/test2.jpg";
import test3 from "../images/testimonials/test3.jpg";
import test4 from "../images/testimonials/test4.jpg";
import test5 from "../images/testimonials/test5.jpg";
import Carousel from "react-bootstrap/Carousel";
function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img className="carousel-img" src={test1} alt="first" />
          <Carousel.Caption>
            <p>
              Best guitar lessons in Encinitas! Sean is a great teacher and
              great with kids. Highly recommend!
            </p>
            <p>-Greg L.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="carousel-img" src={test2} alt="second" />
          <Carousel.Caption>
            <p>
              Sean is an amazing guitar teacher! My 8 year old daughter
              absolutely loves her lessons and looks forward to them every week
            </p>
            <p>-Amber A.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="carousel-img" src={test3} alt="first" />
          <Carousel.Caption>
            <p>
              Sean works hard to make sure the needs of his students are met. He
              has a very pleasant personality and he truly wants to teach his
              craft to others.
            </p>
            <p>-Sarah C.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="carousel-img" src={test4} alt="first" />
          <Carousel.Caption>
            <p>
              Sean works hard to make sure the needs of his students are met. He
              has a very pleasant personality and he truly wants to teach his
              craft to others.
            </p>
            <p>-Ursula V.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="carousel-img" src={test5} alt="first" />
          <Carousel.Caption>
            <p>
              My two boys are really enjoying their guitar lessons with Sean. He
              is patient and fun. It is so nice to have a teacher that inspires
              and encourages my boys.
            </p>
            <p>-Nicole M.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonials;
