import { StyleFooterSection } from "./StylFooterSection";
import perfil from "../../../assets/perfil.png";
import facebook from "../../../assets/Facebook.png";
import instagram from "../../../assets/Instagram.png";
import linkedin from "../../../assets/Linkedin.png";

export function FooterSection() {
  return (
    <StyleFooterSection id="networks">
      <div className="containerFooter">
        <div className="perfilFotter">
          <img src={perfil} alt="perfil logo" />
          <div>
            <h2>Thank You!!!</h2>
            <p>
              Get to know a little about my personal life by following me on
              networks media
            </p>
          </div>
        </div>
        <ul>
          <li>
            <a href="https://github.com/Natalespitz" target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/nataspitzalves/" target="_blank">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nata-spitz-alves-217932263/" target="_blank">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </StyleFooterSection>
  );
}
