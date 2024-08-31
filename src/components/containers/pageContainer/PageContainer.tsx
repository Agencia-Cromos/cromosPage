import { StylePageContainer } from "./StylePageContainer";


export function PageContainer({ children }: { children: React.ReactNode }) {
    return(
        <StylePageContainer>
            {children}
        </StylePageContainer>
    )
}