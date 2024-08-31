import { StylePerfilArticle } from "./StylePerfilAticle";
import perfil from "../../../../../assets/perfil.png";

export function PerfilArtcle() {
    
    return(
        <StylePerfilArticle>
            <div className="image">
                <img src={perfil} alt="Minha foto" />
            </div>
            <p>Olá mundo, meu nome é Natã</p>     
        </StylePerfilArticle>
    )
}