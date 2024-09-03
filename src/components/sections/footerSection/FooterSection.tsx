import { StyleFooterSection } from "./StylFooterSection";
import perfil from "../../../assets/perfil.png";
import facebook from "../../../assets/Facebook.png";
import instagram from "../../../assets/Instagram.png";
import linkedin from "../../../assets/Linkedin.png";
import { StyleFooterContainer } from "../../containers/footerContainer/StyleFooterContainer";

export function FooterSection() {
  return (
    <StyleFooterSection id="networks">
        <StyleFooterContainer>
          <div className="perfilFotter">
            <img src={perfil} alt="perfil logo" />
            <div>
              <h2>Obrigado!!!</h2>
              <p>
              Conheça um pouco da minha vida pessoal me seguindo no
              mídia de redes
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
          
        </StyleFooterContainer>
    </StyleFooterSection>
  );
}
