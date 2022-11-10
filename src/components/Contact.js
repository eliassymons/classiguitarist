import phone from "../images/Group 234.png";
import email from "../images/Subtract.png";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Contact</h2>
      <h3 className="contact-desc">
        Email or call for information about lessons.
      </h3>
      <div className="contact-methods">
        <div className="contact-item">
          <h3>Email:</h3>
          <a>
            <img
              alt="email-contact"
              className="contact-icon"
              href="#"
              src={email}
            />
          </a>
        </div>

        <div className="contact-item">
          <h3>Phone:</h3>{" "}
          <a>
            <img alt="phone-contact" className="contact-icon" src={phone} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
