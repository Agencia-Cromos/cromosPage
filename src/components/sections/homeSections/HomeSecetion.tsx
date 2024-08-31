import { StyleHomeSection } from "./StyleHomeSection";
import { PageContainer } from "../../containers/pageContainer/PageContainer";
import { PerfilArtcle } from "./articles/perfil/PerfilArticle";
import { TechList } from "../../lists/techs/TechList";
import { DescriptionArticle } from "./articles/description/DescriptionArticle";
import { LinksNavigations } from "../../linksNavigations/LinksNavigations";


export function HomeSection() {
  return (
    <StyleHomeSection id="home">
      <PageContainer >
        <PerfilArtcle />
        <TechList />
        <DescriptionArticle />
        <LinksNavigations />
      </PageContainer>
    </StyleHomeSection>
  );
}
