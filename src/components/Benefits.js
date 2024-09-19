import benefits from "../images/brain-on-music.jpg";
import benefits2 from "../images/testimonials/test1.jpg";

function Benefits() {
  return (
    <div className="benefits" id="benefits">
      <h2>The Benefits of Music</h2>
      <iframe
        className="video"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/R0JKCYZ8hng`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />{" "}
      <div className="benefits-content">
        {/* <img alt="benefits1" className="benefits-img" src={benefits2} /> */}
        <img alt="benefits2" className="benefits-img" src={benefits} />
      </div>
    </div>
  );
}

export default Benefits;
