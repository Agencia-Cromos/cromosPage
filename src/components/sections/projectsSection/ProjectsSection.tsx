import { PageContainer } from "../../containers/pageContainer/PageContainer";
import { ProjectsList } from "../../lists/projects/ProjectsList";
import { StyleProjectsSection } from "./StyleProjectsSection";


export function ProjectsSection() {
    return(
        <StyleProjectsSection id="projects">
            <PageContainer>
                <div className="mainInfos">
                    <h3>My Main Projects</h3>
                    <p>Projects created at <span>Kenzie Academy</span></p>    
                </div>
                <div className="projects">
                    <ProjectsList /> 
                </div>
            </PageContainer>
        </StyleProjectsSection>
    )
}