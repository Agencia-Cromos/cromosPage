import { PageContainer } from "../../components/containers/pageContainer/PageContainer";
import { StyleMain } from "../../components/main/StyleMain";
import { MessageHome } from "../../components/messegeHome/MessageHome";
import  fotos  from "../../assets/Contacts.png";

export function Home() {
    return (
        <StyleMain>
            <PageContainer>
                <MessageHome />
                <img src={fotos} alt="" />
            </PageContainer>
        </StyleMain> 
    )
}