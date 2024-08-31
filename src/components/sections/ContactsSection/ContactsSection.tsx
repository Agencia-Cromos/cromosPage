import { StyleContactsSection } from "./StyleContactsSection";
import phone from "../../../assets/phone.png";
import mail from "../../../assets/mail.png";
import linkedin from "../../../assets/media.png";

export function ContactsSection() {
  return (
    <StyleContactsSection id="contacts">
      <div className="contactsContainer">
        <div className="info__cta">
          <h2>
            Awaken your creativity!
            <span> You have 3 options </span>
            to turn ideas into reality together,
            <span> contact me!!!</span>
          </h2>
          <p>
            It's no coincidence that you're here!!! If you are here with me so
            far we still have a lot to talk about, click on one of the two
            links.
          </p>
        </div>
        <section className="contacts">
          <article>
            <img src={phone} alt="Logo telefone" />
            <div>
              <h3>Call me</h3>
              <p>
                If: You like a more direct conversation, give me a call or send
                me a message.
              </p>
              <a href="https://wa.link/tz9ni3" target="_blank">
                (22) 99972-6196
              </a>
            </div>
          </article>
          <article>
            <img src={mail} alt="Logo email" />
            <div>
              <h3>Write me</h3>
              <p>
                Else if: You like a more formal conversation, send me an email.
              </p>
              <a href="mailto:nataspitz81@gmail.com">nataspitz81@gmail.com</a>
            </div>
          </article>
          <article>
            <img src={linkedin} alt="Logo linkedin" />
            <div>
              <h3>Follow me</h3>
              <p>
                Else: Get to know me a little better by viewing my LinkedIn and
                chatting with me
              </p>
              <a href="https://www.linkedin.com/in/nata-spitz-alves-217932263/" target="_blank">
                Natã Spitz Alves
              </a>
            </div>
          </article>
        </section>
      </div>
    </StyleContactsSection>
  );
}
