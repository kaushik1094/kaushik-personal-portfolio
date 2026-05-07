import Social from "../Social";
import ContactForm from "./ContactForm";
import SectionTitle from "../motion/SectionTitle";
import Reveal from "../motion/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionTitle>Contact</SectionTitle>
      <Reveal>
        <div className="contact-body">
          <ContactForm />
          <Social />
        </div>
      </Reveal>
    </section>
  );
}
