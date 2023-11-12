import Social from "../Social";
import ContactForm from "./ContactForm";
import ContactImageSvg from "./ContactImage";

export default function Contact() {
  return (
    <div id="contact">
      <h2 className="about-title">Contact</h2>
      <div className="contact-body">
        <ContactImageSvg />
        <ContactForm />
        <Social />
      </div>
    </div>
  );
}
