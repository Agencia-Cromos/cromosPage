import { StyleMain } from "../../components/main/StyleMain";
import { ContactsSection } from "../../components/sections/ContactsSection/ContactsSection";
import { FooterSection } from "../../components/sections/footerSection/FooterSection";
import { HomeSection } from "../../components/sections/homeSections/HomeSecetion";
import { ProjectsSection } from "../../components/sections/projectsSection/ProjectsSection";
import { Header } from "../../fragments/header/Header";


export function Home(){
    return (
        <StyleMain>
            <Header />
            <HomeSection/>
            <ProjectsSection/>
            <ContactsSection/>
            <FooterSection />
        </StyleMain>
    );
}
