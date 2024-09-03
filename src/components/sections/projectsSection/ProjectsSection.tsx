import { PageContainer } from "../../containers/pageContainer/PageContainer";
import { ProjectsList } from "../../lists/projects/ProjectsList";
import { StyleProjectsSection } from "./StyleProjectsSection";


export function ProjectsSection() {
    return(
        <StyleProjectsSection id="projects">
            <PageContainer>
                <div className="mainInfos">
                    <h3>Principais projetos</h3>
                    <p>Alguns desses projetos ainda estão em <span>desenvolvimento</span></p>    
                </div>
            </PageContainer>
            <div className="projects">
                <ProjectsList />
            </div>
        </StyleProjectsSection>
    )
}