import { StyleFooterContainer } from "./StyleFooterContainer";


export function FooterContainer({ children }: { children: React.ReactNode }) {

    return (
        <StyleFooterContainer>
            {children}
        </StyleFooterContainer>
    )
}