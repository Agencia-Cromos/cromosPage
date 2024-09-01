import { PageContainer } from "../../components/containers/pageContainer/PageContainer";
import { StyleMain } from "../../components/main/StyleMain";
import { MessageHome } from "../../components/messegeHome/MessageHome";


export function Home() {
    return (
        <StyleMain>
            <PageContainer>
                <MessageHome />
            </PageContainer>
        </StyleMain> 
    )
}