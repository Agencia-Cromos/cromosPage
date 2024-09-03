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
            Escolha uma das
            <span> 3 opções </span>
            para transformar ideias em realidade juntos, <span>entre em contato comigo</span>
          </h2>
          <p>
            Não é por acaso que você está aqui. Algo me diz que quer conversar, então
            clique em um dos links.
          </p>
        </div>
        <section className="contacts">
          <article>
            <img src={phone} alt="Logo telefone" />
            <div>
              <h3>Me ligue</h3>
              <p>
                Se: Você gosta de uma conversa mais direta, me ligue ou mande
                me uma mensagem.
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
                Caso contrário: Você gosta de uma conversa mais formal, me mande um email.
              </p>
              <a href="mailto:nataspitz81@gmail.com">nataspitz81@gmail.com</a>
            </div>
          </article>
          <article>
            <img src={linkedin} alt="Logo linkedin" />
            <div>
              <h3>Me siga</h3>
              <p>
                Ou: Me conheça um pouco melhor visualizando meu LinkedIn e
                conversando comigo
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
