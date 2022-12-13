import phone from "../images/Group 234.png";
import email from "../images/Subtract.png";

function Socials() {
  return (
    <div className="socials">
      <a href="tel:123-456-7890">
        <img alt="phone" className="phone-icon" src={phone} />
      </a>
      <a href="mailto: abc@example.com">
        <img alt="email" className="email-icon" src={email} />
      </a>
    </div>
  );
}

export default Socials;
