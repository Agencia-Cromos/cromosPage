import styled from "styled-components";

export const StyleMessageHome = styled.section`
    margin: 30vh auto !important;
    padding: 20px !important; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border: 2px solid var(--color-primary-50);
    border-radius: 12px;
    
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    
        h1{
            font-size: 3rem;
        }

        p{
            color: var(--grey-1-75);
            span{
                color: var(--color-primary);
                font-weight: 600;
            }
        }

    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 200px;
        background-color: transparent;
        color: var(--grey-1);
        border: 2px solid var(--color-tertiary);
        border-radius: 10px;
    }a:hover{
        background-color: var(--color-tertiary);
        color: var(--grey-1);
    }
`