import styled from "styled-components";


export const StyleFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    padding: 0 20px !important;
    margin: auto !important;
    height: 100%;
    gap: 15px;

    

    @media(min-width: 768px){
        justify-content: space-between;
        flex-direction: row;
    }
`